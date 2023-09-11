import logoL from "../../assets/img/logo-light.png"
import logoD from "../../assets/img/logo-dark.png"
import {styled} from "styled-components"
import { Logo, FlexColumn, CatTitle } from "../styled"
const SlideLeft = styled(FlexColumn)`
    flex-basis: 60%;
`;
const SlideImg = styled.img`
    flex-basis: 40%;
    background: ${({theme}) => theme.primary};
`;
const SlideTitle = styled(CatTitle)`
    align-self: center;
    border-radius: .25rem;
    margin: 1rem 0;
`;
export const Slide = (props) => {
    return <>
        <SlideLeft>
            {props.tema ? <Logo src={logoD} /> : <Logo src={logoL}/>}
            <SlideTitle>Categoria</SlideTitle>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, officiis. Lorem ipsum dolor sit amet.</p>
        </SlideLeft>
        <SlideImg src="" alt="categoria" />
    </>
}
