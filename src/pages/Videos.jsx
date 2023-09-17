import { Container, MainTitle, FormField, FlexColumn, FlexRow, Btn, BtnIcon, Icon, ModalContainer, Modal, ModalTitle } from "../components/styled"
import styled from "styled-components"

import {MdClear, MdDelete} from "react-icons/md"

import FormSelect from "../components/FormSelect";
import FormInput from "../components/FormInput";
import { VideoCard } from "../components/VideoCard";

import { useEffect, useState } from "react";
import { getData, deleteData } from "../API/api";

import { Link, useNavigate } from "react-router-dom";

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
    const navigate = useNavigate()
    const {url} = props
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState("")
    const [selectedCat, setSelectedCat] = useState({})
    const [videos, setVideos] = useState([])
    const [modal, setModal] = useState(false)

    const [codigo, setCodigo] = useState("");
    const [eliminar, setEliminar] = useState("");

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

    const showModal = () =>{
        setModal(!modal)
    }
    const DeleteVid = () => {
        if(codigo === "ChaZzT2049"){
            const url = `/videos/${eliminar}`
            deleteData(url)
            setEliminar("")
            setModal(!modal)
            navigate("/messages/eliminar", {state: {mensaje: "Video Eliminado", link: "/videos", action: "Regresar"}})
        }else{
            alert("El código es incorrecto")
        }
    }

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
                    <div key={video.id}>
                        <Link to={`/videos/${video.id}`}>
                            <VideoCard  video={video} />
                        </Link>
                        <FlexRow>
                            <Link to={`/edit/vid/${video.id}`}><Btn className="primary">Editar</Btn></Link>
                            <Btn onClick={() => {showModal(); setEliminar(video.id);}} className="error">Eliminar</Btn>
                        </FlexRow>
                    </div>
                ))
            }
        </VideosCatContainer>
        {
            modal && <ModalContainer>
                <Modal>
                    <ModalTitle>Eliminar Video <Icon onClick={() => {setModal(!modal)}}><MdClear/></Icon></ModalTitle>
                    <p>¿Estas Sguro que deseas eliminar este video?</p>
                    <FormField>
                        <FormInput type="password" required={true} value={codigo} setValue={setCodigo} id="codigo" placeholder="Ingresa el código" label="Código de confirmación"/>
                    </FormField>
                    <BtnIcon onClick={() => {DeleteVid()}} className="error">Eliminar Video <MdDelete/></BtnIcon>
                </Modal>
            </ModalContainer>
        }
    </Container>
}
export default Videos