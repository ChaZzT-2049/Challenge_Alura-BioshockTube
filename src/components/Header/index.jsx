import React, { useState, useEffect } from "react";
import { getData } from "../../API/api";
import { Link, useNavigate } from "react-router-dom";

import { styled } from "styled-components";
import {Logo, LogoContainer, Icon, FlexRow, Btn, Span} from "../styled"

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
            opacity: ${(props) => props.opacity};
            display: ${(props) => props.display};
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
const SearchContainer = styled.div`
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
        gap: ${(props) => props.gap};
        flex-grow: ${(props) => props.grow};
        padding: ${(props) => props.padding};
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
        flex-grow: ${(props) => props.grow};
        opacity: ${(props) => props.grow};
    }
`;
const SearchResults = styled.div`
    position: fixed;
    top: 3.5rem;
    left: 0;
    height: 30vh;
    width: 60%;
    margin: 0 20%;
    padding: 1rem;
    background: ${({theme}) => theme.surface};
    border-radius: 0 0 .5rem .5rem;
    display: flex;
    flex-direction: column;
    gap: .25rem;
    @media screen and (min-width: 0px) and (max-width: 480px){
        margin: 0;
        width: 100%;
        border-radius: 0;
        height: 50vh;
    }
`;
const Result = styled.span`
    padding: .5rem;
    cursor: pointer;
    &:hover{
        background: ${({theme}) => theme.bg};
    }
`;
const Topbar = (props) => {
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState(false);
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])
    const { setSidebar, sidebar, url} = props

    const [videos, setVideos] = useState([]);
    useEffect(() =>{
        getData(url, setVideos)
    },[url])

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
        showSearch && setSearch("")
        showSearch && setResults([])
    }
    const searchVideo = (e) =>{
        const query = e.target.value.toLowerCase()
        setSearch(e.target.value)
        const queryresults = videos.filter((video) => video.titulo.toLowerCase().includes(query))
        setResults(queryresults)
    }

    const redirectResult = (id) => {
        navigate(`/videos/${id}`); 
        handleSearchBar()
    }

    return <Header opacity={showSearch ? "0" : "1"} display={showSearch ? "none" : "block"}>
        <HeaderActions>
            <Icon onClick={handleSidebar}><MdMenu/></Icon>
            <Link to="/">
                <LogoContainer>
                    <Logo src={logo} /><Span className="tertiary"><h1>Tube</h1></Span>
                </LogoContainer>
            </Link>
        </HeaderActions>
        <SearchContainer grow={showSearch ? "1" : "0"} gap={showSearch ? ".5rem" : "0"} padding={showSearch ? ".125rem .5rem" : "0"}>
                <InputSearch 
                    onChange={(e) => searchVideo(e)} 
                    value={search} 
                    onFocus={handleSearchBar} 
                    id="inputSearch" 
                    grow={showSearch ? "1" : "0"} 
                    type="text" 
                    placeholder="Buscar Videos"
                />
                <Icon onClick={handleSearchBar}>{showSearch ? <MdClose/> : <MdOutlineSearch />}</Icon>
                {showSearch && 
                    <SearchResults>
                        <h3>Resultados: {results.length} </h3>
                        {
                            results.map((result) => { return <Result onClick={() => {redirectResult(result.id)}} key={result.id}>{result.titulo}</Result>})
                        }
                    </SearchResults>
                }
        </SearchContainer>
        <HeaderActions>
            <Link className="add" to="/add/video"><Btn className="primary">Nuevo Video</Btn></Link>
        </HeaderActions>
        <Icon onClick={handleTheme}>{props.theme ? <MdLightMode/> : <MdDarkMode />}</Icon>
    </Header>
}
export default Topbar