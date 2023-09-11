import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Pathway Gothic One', sans-serif;
        margin: 0;
        padding: 0;
        text-decoration: none;
    }
    html{
        min-height: 100%;
    }
    h1{font-size: 1.75rem;}
    h2{font-size: 1.5rem;}
    h3{font-size: 1.25rem;}
    p{font-size: 1rem;}
    small{font-size: .875rem}
    body{
        min-height: 100%;
    }
    #root{
        min-height: 100%;
        display: flex;
        flex-direction: column;
        font-size: 1rem;
    }
`;
export default GlobalStyle