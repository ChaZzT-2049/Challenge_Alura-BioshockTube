import { styled } from "styled-components";
import { MdClose } from "react-icons/md";
import {Link} from "react-router-dom";
import logo from "../../assets/img/logo.png"
import { FlexRow, FlexColumn, Logo, LogoContainer, Icon, Span } from "../styled";
const Menu = styled.aside`
    position: fixed;
    z-index: 2;
    top: 0;
    left: ${props => props.sidebarpc};
    width: 25vw;
    height: 100%;
    background: ${({theme})=>theme.on_p_container};
    color: ${({theme})=>theme.on_primary};
    transition: all 300ms ease-in;
    @media screen and (min-width: 0px) and (max-width: 480px){
        width: 60vw;
        left: ${props => props.sidebarmov};
    }
    @media screen and (min-width: 481px) and (max-width: 768px){
        width: 40vw;
        left: ${props => props.sidebartab};
    }
`;

const Sidebar = (props) => {
    const { setSidebar, sidebar} = props
    const handleSidebar = () =>{
        setSidebar(!sidebar)
    }
    return <Menu sidebarpc={sidebar ? '0' : '-25vw'} sidebarmov={sidebar ? '0' : '-60vw'} sidebartab={sidebar ? '0' : '-40vw'}>
        <FlexRow>
            <LogoContainer>
                <Logo src={logo} />
                <h1>Menu</h1>
            </LogoContainer>
            <Icon className="tertiary" onClick={handleSidebar}><MdClose /></Icon>
        </FlexRow>
        <FlexColumn>
            <Link onClick={handleSidebar} to="/"><Span><h3>Principal</h3></Span></Link>
            <Link onClick={handleSidebar} to="/add/video"><Span><h3>Agregar  Video</h3></Span></Link>
            <Link onClick={handleSidebar} to="/videos"><Span><h3>Videos</h3></Span></Link>
            <Link onClick={handleSidebar} to="/add/cat"><Span><h3>Nueva Categoria</h3></Span></Link>
            <Link onClick={handleSidebar} to="/categories"><Span><h3>Categorias</h3></Span></Link>
        </FlexColumn>
    </Menu>
}
export default Sidebar