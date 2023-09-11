import { styled } from "styled-components";
import { MdClose } from "react-icons/md";
import {Link} from "react-router-dom";
import logo from "../../assets/img/logo.png"
import { FlexRow, FlexColumn, Logo, LogoContainer, Icon, Span } from "../styled";
const Menu = styled.aside`
    position: fixed;
    z-index: 2;
    top: 0;
    left: ${props => props.sidebar ? '0' : '-25vw'};
    width: 25vw;
    height: 100%;
    background: ${({theme})=>theme.on_p_container};
    color: ${({theme})=>theme.on_primary};
    transition: all 300ms ease-in;
    @media screen and (min-width: 0px) and (max-width: 480px){
        width: 60vw;
        left: ${props => props.sidebar ? '0' : '-60vw'};
    }
`;

const Sidebar = (props) => {
    const { setSidebar, sidebar} = props
    const handleSidebar = () =>{
        setSidebar(!sidebar)
    }
    return <Menu sidebar={sidebar}>
        <FlexRow>
            <LogoContainer>
                <Logo src={logo} />
                <h1>Menu</h1>
            </LogoContainer>
            <Icon color={({theme}) => theme.on_tertiary} bg={({theme}) => theme.tertiary} onClick={handleSidebar}><MdClose /></Icon>
        </FlexRow>
        <FlexColumn>
            <Link onClick={handleSidebar} to="/"><Span color={({theme})=>theme.on_primary}><h3>Principal</h3></Span></Link>
            <Link onClick={handleSidebar} to="/add/video"><Span color={({theme})=>theme.on_primary}><h3>Agregar  Video</h3></Span></Link>
            <Link onClick={handleSidebar} to="/add7cat"><Span color={({theme})=>theme.on_primary}><h3>Nueva Categoria</h3></Span></Link>
            <Link onClick={handleSidebar} to="/categories"><Span color={({theme})=>theme.on_primary}><h3>Categorias</h3></Span></Link>
        </FlexColumn>
    </Menu>
}
export default Sidebar