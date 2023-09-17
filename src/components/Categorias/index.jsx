import { CatTitle, Icon } from "../styled"
import {MdArrowForward} from "react-icons/md"
import styled from "styled-components"
import { VideosCat } from "../VideosCat";

import { Link } from "react-router-dom";
const CatContainer = styled.div`
    margin-bottom: 1rem;
    width: 100%;
`;
const CatTitleCont = styled.div`
    display: flex;
    justify-content: space-between;
    gap: .25rem;
    align-items: center;
    border-bottom: 2px solid ${props => props.color};
`;

export const Categorias = (props) => {
    const { cat, videos } = props
    return <CatContainer id={cat.nombre}>
        <CatTitleCont color={cat.color.toString()}>
            <CatTitle color={cat.color.toString()}>{cat.nombre}</CatTitle>
            <small>{cat.meta}</small>
            <Link to={`/videos`} >
                <Icon><MdArrowForward /></Icon>
            </Link>
        </CatTitleCont>
        <VideosCat
            videos={videos.filter(video => video.cat_id === cat.id)}
        />
    </CatContainer>
}