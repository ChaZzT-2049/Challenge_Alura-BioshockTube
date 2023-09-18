import { Container, MainTitle, HomeVideo, Card, VideoCover, VideoInfo } from "../components/styled"
import styled from "styled-components"

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getData } from "../API/api";

const Main = styled(Container)`
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    padding: 1rem;
    @media screen and (min-width: 0px) and (max-width: 480px){
        flex-direction: column;
    }
`;
const VideoTitle = styled(MainTitle)`
    text-align: start;
    margin-top: 0;
`;
const VideoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    @media screen and (min-width: 0px) and (max-width: 480px){
        width: 100%;
        & iframe{order: 0;}
        & h1{order: 1;}
        & p{order: 2;}
        
    }
`;
const VideoRelated = styled(Card)`
    width: 100%;
    @media screen and (min-width: 0px) and (max-width: 480px){
        width: 100%;
    }
`;
const Relacionados = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 40%;
    overflow-y: auto;
    height: 100vh;
    @media screen and (min-width: 0px) and (max-width: 480px){
        width: 100%;
        height: auto;
        overflow-y: hidden;
    }
`;
const MainVideo = styled(HomeVideo)`
    width: 100%;
`;
const Descripcion = styled.p`
    padding: 1rem;
    @media screen and (min-width: 0px) and (max-width: 480px){
        padding: 0;
    }
`;
const Video = () => {
    const {id} = useParams()
    const [video, setVideo] = useState({})
    const [videos, setVideos] = useState([])
    const [related, setRelated] = useState([])

    useEffect(()=>{
        getData(`/videos/${id}`, setVideo)
    }, [id])

    useEffect(()=>{
        getData(`/videos?cat_id=${video.cat_id}`, setVideos)
    }, [video])

    useEffect(()=>{
        videosRelacionados(videos)
    }, [videos])

    const videosRelacionados = (videos) =>{
        const videosFiltrados = videos.filter(vid => vid.id !== video.id)
        setRelated(videosFiltrados)
    }

    return <Main>
            <VideoContainer>
                <VideoTitle>{video.titulo}</VideoTitle>
                <MainVideo src={video.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></MainVideo>
                <Descripcion><b>{video.canal}</b><br /><br />{video.descripcion}</Descripcion>
            </VideoContainer>
        <Relacionados>
            <h2>Relacionados</h2>
            {
                related.map(vid => (
                    <Link key={vid.id} to={`/videos/${vid.id}`}>
                        <VideoRelated>
                            <VideoCover src={vid.img} alt="related cover" />
                            <VideoInfo>
                                <h4>{vid.titulo}</h4>
                                <p>{vid.canal}</p>
                            </VideoInfo>
                        </VideoRelated>
                    </Link>
                ))
            }
        </Relacionados>
    </Main>
}
export default Video