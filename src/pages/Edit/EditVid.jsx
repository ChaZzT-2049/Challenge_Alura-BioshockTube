import { Container, MainTitle, FormContainer, FormField, Btn, ActionsContainer, BtnIcon } from "../../components/styled"
import FormInput from "../../components/FormInput";
import FormArea from "../../components/FormArea";
import FormSelect from "../../components/FormSelect";

import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { getData, putData } from "../../API/api";

import { MdKeyboardArrowLeft } from "react-icons/md"

const EditVid = (props) =>{
    const navigate = useNavigate()
    const {id} = useParams()
    const {url} = props

    const [titulo, setTitulo] = useState("");
    const [canal, setCanal] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [img, setImg] = useState("");
    const [video, setVideo] = useState("");
    const [cat_id, setCat] = useState("");
    const [codigo, setCodigo] = useState("");

    const [vid, setVid] = useState({})

    const [categories, setCategories] = useState([])
    useEffect(() => {
        getData(url, setCategories)
    }, [url])

    useEffect(() => {
        getData(`/videos/${id}`, setVid)
    }, [id])

    useEffect(() => {
        setTitulo(vid.titulo)
        setCanal(vid.canal)
        setDescripcion(vid.descripcion)
        setImg(vid.img)
        setVideo(vid.video)
        setCat(vid.cat_id)
    }, [vid])

    const editarVideo = (e) => {
        e.preventDefault()
        const Data = {
            titulo,
            canal,
            descripcion,
            img,
            video,
            cat_id
        }
        if(codigo === "ChaZzT2049"){
            putData(`/videos/${id}`, Data).then(response => navigate("/videos"))
        }else{
            alert("Codigo incorrecto")
        }
    }
    return <Container>
        <MainTitle>
            Editar Video
        </MainTitle>

        <ActionsContainer>
            <Link to="/videos" >
                <BtnIcon className="primary"><MdKeyboardArrowLeft/> Volver</BtnIcon>
            </Link>
        </ActionsContainer>

        <form onSubmit={(e) => {editarVideo(e)} }>
            <FormContainer>
                <FormField>
                    <FormInput required={true} label="Titulo" setValue={setTitulo} value={titulo} type="text" name="titulo" id="titulo" placeholder="Ingresa el titulo del video" />
                </FormField>
                <FormField>
                    <FormInput required={true} label="Canal del Autor" setValue={setCanal} value={canal} type="text" name="canal" id="canal" placeholder="Ingresa nombre del canal autor del video" />
                </FormField>
                <FormField>
                    <FormArea required={true} label="Descripción del Video" setValue={setDescripcion} value={descripcion}  name="desc" id="desc" placeholder="Ingresa un breve descripción del video" />
                </FormField>
                <FormField>
                    <FormInput required={true} label="URL de Portada" setValue={setImg} value={img} type="url" name="img" id="img" placeholder="Ingresa el link de imagen de portada" />
                </FormField>
                <FormField>
                    <FormInput required={true} label="URL del video" setValue={setVideo} value={video} type="url" name="vid" id="vid" placeholder="Ingresa el link del video" />
                </FormField>
                <FormField>
                    <FormSelect required={true} options={categories} label="Categoria" setValue={setCat} value={cat_id} name="cat" id="cat" />
                </FormField>
                <FormField>
                    <FormInput required={true} label="Codigo" setValue={setCodigo} value={codigo} type="password" id="code" placeholder="Ingresa el código de validación" />
                </FormField>
                <FormField>
                <Btn className="primary" type="submit">Editar</Btn>
                </FormField>
            </FormContainer>
        </form>
    </Container>
}

export default EditVid