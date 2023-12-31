import { Container, MainTitle, FlexRow, FormField, Btn, Icon, BtnIcon, ActionsContainer, ModalContainer, Modal, ModalTitle } from "../components/styled"
import styled from "styled-components"

import FormInput from "../components/FormInput";

import {MdDelete, MdClear, MdAdd} from "react-icons/md"

import { useState, useEffect } from "react";
import { getData, deleteData } from "../API/api";

import { Link, useNavigate } from "react-router-dom";

const Atributos = styled(FlexRow)`
    padding: 0;
    justify-content: flex-start;
    border: 2px solid ${({theme}) => theme.outline};
    border-radius: .5rem;
    & h2{
        flex-basis: calc(100% / 6);
        border: 2px solid ${({theme}) => theme.outline};
        padding: 1rem;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        &:hover{
            background: ${({theme}) => theme.surface};
        }
    }
    & h2:first-child{
        border-radius: .4rem 0 0 .4rem
    }
    & h2:last-child{border-radius: 0 .4rem .4rem 0}
    @media screen and (min-width: 0px) and (max-width: 480px){
        display: none;
    }
    @media screen and (min-width: 481px) and (max-width: 768px){
        display: none;
    }
`;

const CatsContainer = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
`;

const CategoryCard = styled.div`
    display: flex;
    height: 20vh;
    border: 2px solid ${({theme}) => theme.outline};
    border-radius: .5rem;
    margin: 1rem 0;
    @media screen and (min-width: 0px) and (max-width: 480px){
        flex-direction: column;
        height: max-content;
    }
    @media screen and (min-width: 481px) and (max-width: 768px){
        flex-direction: column;
        height: max-content;
        width: 48%;
        gap: .5rem;
    }
`;
const CardElement = styled.div`
    flex-basis: calc(100% / 6);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 .5rem;
    &:has(p){align-items: flex-start; overflow-y: auto;}
    &:has(img){
        background: ${({theme}) => theme.surface};
        border-radius: .5rem 0 0 .5rem;
        padding: 0;
    }
    & img{
        width: 100%;
        border-radius: .5rem 0 0 .5rem;
        object-fit: cover;
        align-self: flex-start;
        height: 100%;
    }
    @media screen and (min-width: 0px) and (max-width: 480px){
        justify-content: flex-start;
        padding: .25rem .5rem;
        &:last-child{
            padding-bottom: .5rem;
        }
        & a{width:100%;}
        & button{
           width: 100%;
           align-self: flex-start;
        }
        &:has(img){
            background: ${({theme}) => theme.surface};
            padding: 0;
            border-radius: .5rem .5rem 0 0;
        }
        & img{
            border-radius: .5rem .5rem 0 0;
        }
    }
    @media screen and (min-width: 481px) and (max-width: 768px){
        & button, & a{
           width: 100%;
           align-self: flex-start;
        }
        &:has(img){
            background: ${({theme}) => theme.surface};
            padding: 0;
            border-radius: .5rem .5rem 0 0;
        }
        & img{
            border-radius: .5rem .5rem 0 0;
        }
        &:last-child{
            padding-bottom: .5rem;
        }
        & p{overflow-y: hidden}
    }
`;
const TitleColored = styled.h2`
    border-bottom: 4px solid ${props => props.color};
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;
const Categories = (props) => {
    const navigate = useNavigate()
    const {urlCat} = props
    const [categories, setCategories] = useState([]);
    const [modal, setModal] = useState(false)
    const [eliminar, setEliminar] = useState("");

    const [codigo, setCodigo] = useState("");


    useEffect(() => {
        getData(urlCat, setCategories)
    }, [urlCat])

    const showModal = () =>{
        setModal(!modal)
    }
    const DeleteCat = () => {
        if(codigo === "ChaZzT2049"){
            const url = `${urlCat}/${eliminar}`
            deleteData(url)
            setEliminar("")
            setModal(!modal)
            navigate("/messages/eliminar", {state: {mensaje: "Categoria Eliminada", link: "/categories", action: "Regresar"}})
        }else{
            alert("El código es incorrecto")
        }
    }
    return <Container>
        <MainTitle>Categorias en BioshockTube</MainTitle>
        <ActionsContainer>
            <Link to="/add/cat">
                <BtnIcon className="primary">Agregar <MdAdd /></BtnIcon>
            </Link>
        </ActionsContainer>
        <Atributos>
            <h2>Imagen</h2>
            <h2>Categoria</h2>
            <h2>Descripcion</h2>
            <h2>Meta Descripcion</h2>
            <h2>Editar</h2>
            <h2>Eliminar</h2>
        </Atributos>
        <CatsContainer>
        {
            categories.map(cat => (
                
                    <CategoryCard key={cat.id}>
                        <CardElement><img src={cat.img} alt={cat.nombre} /></CardElement>
                        <CardElement><TitleColored color={cat.color.toString()}>{cat.nombre}</TitleColored></CardElement>
                        <CardElement><p>{cat.descripcion}</p></CardElement>
                        <CardElement><small>{cat.meta}</small></CardElement>
                        <CardElement><Link to={`/edit/cat/${cat.id}`} ><Btn className="primary">Editar</Btn></Link></CardElement>
                        <CardElement><Btn onClick={() => {showModal(); setEliminar(cat.id);}} className="error">Eliminar</Btn></CardElement>
                    </CategoryCard>
            ))
        }
        </CatsContainer>
        {
            categories.length === 0 && <div><h1>Aun no hay categorias </h1> <Link to="/add/cat">Añade una categoria</Link></div>
        }
        {
            modal && <ModalContainer>
                <Modal>
                    <ModalTitle>Eliminar Categoria <Icon onClick={() => {setModal(!modal)}}><MdClear/></Icon></ModalTitle>
                    <p>¿Estas Sguro que deseas eliminar la categoria?</p>
                    <FormField>
                        <FormInput type="password" required={true} value={codigo} setValue={setCodigo} id="codigo" placeholder="Ingresa el código" label="Código de confirmación"/>
                    </FormField>
                    <BtnIcon onClick={() => {DeleteCat()}} className="error">Eliminar Categoria <MdDelete/></BtnIcon>
                </Modal>
            </ModalContainer>
        }
    </Container>
}
export default Categories