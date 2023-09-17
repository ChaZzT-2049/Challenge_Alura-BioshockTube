import { Container, MainTitle, FormContainer, FormField, Btn, BtnIcon, ActionsContainer } from "../../components/styled"

import FormInput from "../../components/FormInput"
import FormArea from "../../components/FormArea"

import {MdKeyboardArrowLeft} from "react-icons/md"

import { getData, putData } from "../../API/api"

import { useParams, useNavigate, Link } from "react-router-dom"
import { useEffect, useState } from "react"

const EditCat = () =>{
    const navigate = useNavigate();
    const [categoria, setCategoria] = useState({});
    const [nombre, setNombre] = useState("");
    const [meta, setMeta] = useState("");
    const [descripcion, setDesc] = useState("");
    const [color, setColor] = useState("");
    const [img, setImg] = useState("");
    const [codigo, setCodigo] = useState("")
    const {id} = useParams()
    let url = `/categorias/${id}`

    useEffect(() => {
        getData(url, setCategoria)
    }, [url])

    useEffect(() => {
        setNombre(categoria.nombre)
        setMeta(categoria.meta)
        setDesc(categoria.descripcion)
        setColor(categoria.color)
        setImg(categoria.img)
    }, [categoria])

    const editarCategoria = (e) => {
        e.preventDefault()
        const Data = {
            nombre,
            meta,
            descripcion,
            color,
            img
        }
        if(codigo === "ChaZzT2049"){
            putData(url, Data).then(response => navigate("/categories"))
        }else{
            alert("Codigo incorrecto")
        }
    }
    return <Container>
        <MainTitle>Editar Categoria {categoria.nombre}</MainTitle>
        
        <ActionsContainer>
            <Link to="/categories" >
                <BtnIcon className="primary"><MdKeyboardArrowLeft/> Volver</BtnIcon>
            </Link>
        </ActionsContainer>

        <form onSubmit={(e) => {editarCategoria(e)}}>
            <FormContainer >
                <FormField>
                    <FormInput 
                        placeholder="Editar nombre" type="text" label="Cambiar Nombre" id="nombre"
                        required={true} value={nombre} setValue={setNombre}
                    />
                </FormField>
                <FormField>
                    <FormInput 
                        placeholder="Editar meta descripcion" type="text" label="Cambiar Meta Descripción" id="meta"
                        required={true} value={meta} setValue={setMeta}
                    />
                </FormField>
                <FormField>
                    <FormArea
                        placeholder="Editar descripción" label="Cambiar Descripción" id="desc"
                        required={true} value={descripcion} setValue={setDesc}
                    >
                    </FormArea>
                </FormField>
                <FormField>
                    <FormInput 
                        placeholder="Editar Color" type="color" label="Cambiar color de Categoría" id="color"
                        required={true} value={color} setValue={setColor}
                    />
                </FormField>
                <FormField>
                    <FormInput 
                        placeholder="Editar portada" type="url" label="Cambiar link de portada" id="img"
                        required={true} value={img} setValue={setImg}
                    />
                </FormField>
                <FormField>
                    <FormInput 
                        placeholder="Ingresar Código" type="password" label="Escribe el código de acceso" id="code"
                        required={true} value={codigo} setValue={setCodigo}
                    />
                </FormField>
                <FormField>
                    <Btn className="primary">Editar Categoria {categoria.nombre}</Btn>
                </FormField>
            </FormContainer>
        </form>
    </Container>
}
export default EditCat