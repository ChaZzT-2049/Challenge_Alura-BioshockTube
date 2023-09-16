import styled from "styled-components"
import { BtnIcon, MainTitle } from "../../components/styled"

import { MdArrowBack } from "react-icons/md"

import { Link } from "react-router-dom"

const MessageContainer = styled.div`
    z-index: 5;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.99)
;`
const Alert = styled.div`
    background: ${({theme}) => theme.surface};
    max-width: 600px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border-radius: .5rem;
`;
const MEliminar = () => {
    return <MessageContainer>
        <Alert>
            <MainTitle>
                Categoria Eliminada
            </MainTitle>
            <Link to="/categories"><BtnIcon className="primary"><MdArrowBack/> Ver Categorías</BtnIcon></Link>
        </Alert>
    </MessageContainer>
}

export default MEliminar