import logoL from "../../assets/img/logo-light.png"
import logoD from "../../assets/img/logo-dark.png"
import {styled} from "styled-components"
import { Logo, FlexColumn, CatTitle } from "../styled"
const SlideLeft = styled(FlexColumn)`
    width: 50%;
    @media screen and (min-width: 0px) and (max-width: 480px){
        width: 100%;
    }
`;
const SlideImg = styled.img`
    width: 50%;
    object-fit: cover;
    background: ${({theme}) => theme.primary};
    @media screen and (min-width: 0px) and (max-width: 480px){
        width: 100%;
        height: 50%;
    }
`;
const SlideTitle = styled(CatTitle)`
    align-self: center;
    border-radius: .25rem;
    margin: 1rem 0;
    color: ${({theme}) => theme.bg};
    @media screen and (min-width: 0px) and (max-width: 480px){
        margin: .5rem 0;
        padding: .5rem;
    }
`;
export const Slide = (props) => {
    const {cat} = props
    return <>
        <SlideLeft>
            {props.tema ? <Logo src={logoD} /> : <Logo src={logoL}/>}
            <SlideTitle color={cat.color.toString()}><a href={`#${cat.nombre}`}>{cat.nombre}</a></SlideTitle>
            <p>{cat.descripcion}</p>
        </SlideLeft>
        <SlideImg src={cat.img} alt={cat.nombre} />
    </>
}
