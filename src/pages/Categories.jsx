import { Container, MainTitle, FlexRow, FormField, Btn, Icon, BtnIcon, ActionsContainer } from "../components/styled"
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
`;
const CardElement = styled.div`
    flex-basis: calc(100% / 6);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 .5rem;
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
`;
const TitleColored = styled.h2`
    border-bottom: 4px solid ${props => props.color};
    width: 100%;
`;

const ModalContainer = styled.div`
    z-index: 5;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
`;
const Modal = styled.section`
    width: 90%;
    max-width: 650px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background: ${({theme}) => theme.surface};
    padding: 1rem;
    border-radius: .5rem;
`;
const ModalTitle = styled(MainTitle)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0;
    align-items: center;
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
            navigate("/messages/eliminar")
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