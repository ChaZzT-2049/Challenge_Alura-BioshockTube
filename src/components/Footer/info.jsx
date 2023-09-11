import styled from "styled-components"
import { FlexColumn, FlexRow, LogoContainer } from "../styled";
import {AiFillHeart, AiFillGithub, AiFillLinkedin, AiFillCode} from "react-icons/ai"
const Info = styled(FlexColumn)`
    z-index: 1;
    align-items: center;
    background: ${({theme}) => theme.p_container};
    padding-top: 0;
    color: ${({theme}) => theme.on_p_container};
    @media screen and (min-width: 0px) and (max-width: 480px){
        padding: 1rem;
    }
`;
const Heart = styled(AiFillHeart)`
    color: ${({theme}) => theme.error};
`;
const Redes = styled(FlexRow)`
    align-self: flex-start;
    flex-wrap: wrap;
    width: 100%;
    padding: 0;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: ${({theme}) => theme.on_p_container};
    .icon-redes{
        font-size: 24px;
    }
    & a{color: inherit}
    @media screen and (min-width: 0px) and (max-width: 480px){
        gap: 0;
        justify-content: space-around;
    }
`;
export const DevInfo = () => {
    return <Info>
        <h3>Desarrollado con <Heart /> por Carlos Eduardo Cortes Fernandez</h3>
        <Redes>
            <LogoContainer><a href="https://github.com/ChaZzT-2049"><AiFillGithub className="icon-redes"/> Github</a></LogoContainer>
            <LogoContainer><a href="https://www.linkedin.com/in/carloseduardowebdev"><AiFillLinkedin className="icon-redes"/>Linkedin</a></LogoContainer>
            <LogoContainer><a href="https://chazzt-2049.github.io/Portafolio/"><AiFillCode className="icon-redes"/>Portafolio</a></LogoContainer>
        </Redes>
    </Info>
}