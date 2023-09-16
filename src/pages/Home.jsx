import {styled} from "styled-components"
import { Container, MainTitle, HomeVideo } from "../components/styled"

import { Categorias } from "../components/Categorias";
import Carrousel from "../components/Carrousel";

import { useState, useEffect } from "react";
import { getData } from "../API/api";

const VideoWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
`;

const Home = (props) =>{
    const {theme, urlVideos, urlCat} = props

    const [videos, setVideos] = useState([]);
    useEffect(() =>{
        getData(urlVideos, setVideos)
    },[urlVideos])

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getData(urlCat, setCategories)
    }, [urlCat])

    return <Container>
        {
            categories.length > 0 ? <Carrousel categories={categories} tema={theme} /> : <h1>Aún no hay categorias</h1>
        }
        <MainTitle>Descubre Bioshock</MainTitle>
        <VideoWrapper>
            <HomeVideo src="https://www.youtube.com/embed/9_KMoUkX_os?si=4cRumfsMjDhom-ss&amp;start=20" title="Descubre Bioshock" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></HomeVideo>
        </VideoWrapper>
        {
            categories.map(cat => ( <Categorias videos={videos} cat={cat} key={cat.id}/> ))
        }
        {
            videos.length === 0 && <h1>Aún no hay videos</h1>
        }
    </Container>
}
export default Home