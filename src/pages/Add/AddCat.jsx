import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

import { Container, MainTitle, FormContainer, FormField, Btn, ActionsContainer, BtnIcon } from "../../components/styled"
import {MdKeyboardArrowRight} from "react-icons/md"

import FormInput from "../../components/FormInput";
import FormArea from "../../components/FormArea";

import {postData} from "../../API/api"
import { v4 as uuid } from "uuid";
const AddCat = () =>{
    const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [meta, setMeta] = useState("");
    const [descripcion, setDesc] = useState("");
    const [color, setColor] = useState("#000000");
    const [img, setImg] = useState("");
    const [codigo, setCodigo] = useState("");
    const subirCategoria = (e) => {
        e.preventDefault();
        const Data = {
            id: uuid(),
            nombre,
            meta,
            descripcion,
            color,
            img,
        }
        evaluarData(codigo, Data)
    }
    const evaluarData = (cod, datos) => {
        if(cod === "ChaZzT2049"){
            postData("/categorias", datos)
            navigate("/categories")
        }else{
            alert("El código es incorrecto")
        }
    }
    return <Container>
        <MainTitle>Agregar Categoria</MainTitle>

        <ActionsContainer>
            <Link to="/categories">
                <BtnIcon className="primary">Categorias <MdKeyboardArrowRight/></BtnIcon>
            </Link>
        </ActionsContainer>

        <form onSubmit={(e) => {subirCategoria(e)} }>
            <FormContainer>
                <FormField>
                    <FormInput required={true} value={nombre} setValue={setNombre} label="Nombre" type="text" id="cat" placeholder="Ingresa el nombre de la categoria" />
                </FormField>
                <FormField>
                    <FormInput required={true} value={meta} setValue={setMeta} label="Meta Descripcion" type="text" id="metaDes" placeholder="Ingresa una breve descripción de la categoria" />
                </FormField>
                <FormField>
                    <FormArea required={true} value={descripcion} setValue={setDesc} label="Descripción" id="desc" placeholder="Ingresa una descripción detallada de la categoria" />
                </FormField>
                <FormField>
                    <FormInput required={true} value={color} setValue={setColor} label="Color de la Categoría" type="color" id="color" />
                </FormField>
                <FormField>
                    <FormInput required={true} value={img} setValue={setImg} label="Imagen de Portada" type="url" id="img" placeholder="Ingresa el link de una imagen" />
                </FormField>
                <FormField>
                    <FormInput required={true} value={codigo} setValue={setCodigo} label="Codigo" type="password" id="code" placeholder="Ingresa el código de validación" />
                </FormField>
                <FormField>
                    <Btn className="primary">Agregar</Btn>
                </FormField>
            </FormContainer>
        </form>
    </Container>
}
export default AddCat