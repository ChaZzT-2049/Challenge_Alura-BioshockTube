import { CatTitle, Icon } from "../styled"
import {MdArrowForward} from "react-icons/md"
import styled from "styled-components"
import { VideosCat } from "../VideosCat";

const CatContainer = styled.div`
    margin-bottom: 1rem;
    width: 100%;
`;
const CatTitleCont = styled.div`
    display: flex;
    justify-content: space-between;
    gap: .25rem;
    align-items: center;
    border-bottom: 2px solid ${({theme}) => theme.primary};
`;

export const Categorias = () => {
    return <CatContainer>
        <CatTitleCont>
            <CatTitle>Categoria</CatTitle>
            <small>Lorem ipsum dolor sit amet. Lorem, ipsum Lorem ipsum dolor sit amet.</small>
            <Icon><MdArrowForward /></Icon>
        </CatTitleCont>
        <VideosCat />
    </CatContainer>
}