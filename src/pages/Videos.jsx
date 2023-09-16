import { Container, MainTitle, FormField, FlexColumn, FlexRow, Btn } from "../components/styled"
import styled from "styled-components"

import FormSelect from "../components/FormSelect"
import { VideoCard } from "../components/VideoCard";

import { useEffect, useState } from "react";
import { getData } from "../API/api";

const Category = styled(FlexColumn)`
    padding: 0;
    align-items: flex-start;
    gap: 2rem;
    margin-bottom: 2rem;
`;

const VideosCatContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
`;
const Videos = (props) => {
    const {url} = props
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState("")
    const [selectedCat, setSelectedCat] = useState({})
    const [videos, setVideos] = useState([])

    useEffect(()=>{
        getData(url, setCategories)
    }, [url])

    useEffect(()=>{
        VideosCat(category)
    }, [category])

    const VideosCat = (id) => {
        if(id.length > 0){
            const cat = categories.filter(cat => cat.id === id)
            setSelectedCat(cat[0])
        }
    }
    useEffect(() =>{
        getData(`/videos?cat_id=${selectedCat.id}`, setVideos)
    }, [selectedCat])

    return <Container>
        <MainTitle>Videos en BioshockTube</MainTitle>
        <Category>
            <FormField>
                <FormSelect options={categories} value={category} setValue={setCategory} placeholder="Selecciona una Categoría" label="Categoría" id="cat" />
            </FormField>
            <h2>Videos de {selectedCat.nombre}: {videos.length}</h2>
        </Category>
        <VideosCatContainer>
            {
                videos.map(video => (
                    <div>
                        <VideoCard key={video.id} video={video} />
                        <FlexRow>
                            <Btn className="primary">Editar</Btn>
                            <Btn className="error">Eliminar</Btn>
                        </FlexRow>
                    </div>
                ))
            }
        </VideosCatContainer>
    </Container>
}
export default Videos