import React, { useState } from "react";
import { styled } from "styled-components";
import {Logo, LogoContainer, Icon, FlexRow, Btn, Span} from "../styled"
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png"
import { MdMenu, MdLightMode, MdDarkMode, MdOutlineSearch, MdClose } from "react-icons/md"
const Header = styled.header`
    z-index: 1;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    gap: 1rem;
    height: 3.5rem;
    background: ${({theme}) => theme.t_container};
    color: ${({theme}) => theme.on_t_container};
    @media screen and (min-width: 0px) and (max-width: 480px){
        gap: .5rem;
        & a{
            transition: all 200ms ease;
            padding: .0625rem 0;
            opacity: ${(props) => props.showSearch ? "0" : "1"};
            display: ${(props) => props.showSearch ? "none" : "block"};
        }
    }
`;
const HeaderActions = styled(FlexRow)`
    gap: .5rem;
    padding: 0;
    @media screen and (min-width: 0px) and (max-width: 480px){
        &:has(.add){
            display: none;
        }
    }
`;
const SearchContainer = styled.form`
    display: flex;
    align-items: center;
    flex-grow: 1;
    padding: .5rem;
    border-radius: .5rem;
    gap: .5rem;
    background: ${({theme}) => theme.surface};
    transition: all 200ms ease-in;
    &:focus-within{
        outline: 1px solid ${({theme}) => theme.on_t_container};
    }
    @media screen and (min-width: 0px) and (max-width: 480px){
        gap: ${(props) => props.showSearch ? ".5rem" : "0"};
        flex-grow: ${(props) => props.showSearch ? "1" : "0"};
        padding: ${(props) => props.showSearch ? ".125rem .25rem" : "0"};
    }
`;

const InputSearch = styled.input`
    padding: 0;
    flex-grow: 1;
    border: none;
    outline: none;
    background: ${({theme}) => theme.surface};
    color: ${({theme}) => theme.on_surface};
    font-size: 1rem;
    transition: all 200ms ease-in;
    @media screen and (min-width: 0px) and (max-width: 480px){
        width: 0;
        flex-grow: ${(props) => props.showSearch ? "1" : "0"};
        opacity: ${(props) => props.showSearch ? "1" : "0"};
    }
`;
const SearchResults = styled.div`
    position: fixed;
    top: 3.5rem;
    left: 0;
    height: auto;
    width: 60%;
    margin: 0 20%;
    padding: 1rem;
    background: ${({theme}) => theme.surface};
    border-radius: 0 0 .5rem .5rem;
    @media screen and (min-width: 0px) and (max-width: 480px){
        margin: 0;
        width: 100%;
        border-radius: 0;
    }
`;
const Topbar = (props) => {
    const [showSearch, setShowSearch] = useState(false);
    const { setSidebar, sidebar} = props
    const handleTheme = () =>{
        props.setTheme(!props.theme)
    }
    const handleSidebar = () =>{
        setSidebar(!sidebar)
    }

    const handleSearchBar = () =>{
        setShowSearch(!showSearch)
        const input = document.querySelector("#inputSearch");
        showSearch ? input.blur() : input.focus()
    }

    return <Header showSearch={showSearch}>
        <HeaderActions>
            <Icon onClick={handleSidebar}><MdMenu/></Icon>
            <Link to="/">
                <LogoContainer>
                    <Logo src={logo} /><Span color={({theme}) => theme.on_t_container} ><h1>Tube</h1></Span>
                </LogoContainer>
            </Link>
        </HeaderActions>
        <SearchContainer showSearch={showSearch}>
                <InputSearch onFocus={handleSearchBar} onBlur={handleSearchBar} id="inputSearch" showSearch={showSearch} type="text" placeholder="Buscar Videos" />
                <Icon onClick={handleSearchBar}>{showSearch ? <MdClose/> : <MdOutlineSearch />}</Icon>
                {showSearch && 
                    <SearchResults>
                        <h3>Resultados:</h3>
                    </SearchResults>
                }
        </SearchContainer>
        <HeaderActions>
            <Link className="add" to="/add/video"><Btn bg={({theme}) => theme.primary} color={({theme}) => theme.on_primary}>Nuevo Video</Btn></Link>
        </HeaderActions>
        <Icon onClick={handleTheme}>{props.theme ? <MdLightMode/> : <MdDarkMode />}</Icon>
    </Header>
}
export default Topbar