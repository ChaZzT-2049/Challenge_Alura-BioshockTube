import { Container, MainTitle, HomeVideo, Card, VideoCover, VideoInfo } from "../components/styled"
import styled from "styled-components"
import { Link } from "react-router-dom";

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
    @media screen and (min-width: 0px) and (max-width: 480px){
        width: 100%;
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
    return <Main>
            <VideoContainer>
                <VideoTitle>Titulo de Video</VideoTitle>
                <MainVideo src="https://www.youtube.com/embed/9_KMoUkX_os?si=4cRumfsMjDhom-ss&amp;start=20" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></MainVideo>
                <Descripcion>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas unde in libero similique doloribus?Quas unde in libero similique doloribus? Provident!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas unde in libero similique doloribus?Quas unde in libero similique doloribus? Provident!</Descripcion>
            </VideoContainer>
        <Relacionados>
            <h2>Relacionados</h2>
            <Link to="/videos/video">
                <VideoRelated>
                    <VideoCover src="" alt="related cover" />
                    <VideoInfo>
                        <h2>Video Title</h2>
                        <p>Creador</p>
                    </VideoInfo>
                </VideoRelated>
            </Link>
            <Link to="/videos/video">
                <VideoRelated>
                    <VideoCover src="" alt="related cover" />
                    <VideoInfo>
                        <h2>Video Title</h2>
                        <p>Creador</p>
                    </VideoInfo>
                </VideoRelated>
            </Link>
            <Link to="/videos/video">
                <VideoRelated>
                    <VideoCover src="" alt="related cover" />
                    <VideoInfo>
                        <h2>Video Title</h2>
                        <p>Creador</p>
                    </VideoInfo>
                </VideoRelated>
            </Link>
        </Relacionados>
    </Main>
}
export default Video