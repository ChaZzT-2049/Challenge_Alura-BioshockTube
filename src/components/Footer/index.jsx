import styled from "styled-components"
import { Link } from "react-router-dom";
import { Btn,Logo } from "../styled";
import logoL from "../../assets/img/logo-light.png"
import logoD from "../../assets/img/logo-dark.png"
const Footer = styled.footer`
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    background: ${({theme}) => theme.p_container};
    .add{display: none;}
    @media screen and (min-width: 0px) and (max-width: 480px){
        position: sticky;
        bottom: 0;
        .add{display: flex;}
    }
`;

export const Bottombar = (props) =>{
    return <Footer>
        {props.theme ? <Logo src={logoD}/> : <Logo src={logoL}/>}
        <Link className="add" to="/add/video"><Btn className="primary">Nuevo Video</Btn></Link>
    </Footer>
}