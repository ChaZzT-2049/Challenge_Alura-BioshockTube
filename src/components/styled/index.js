import {styled} from "styled-components"

export const Container = styled.div`
    padding: 1rem 2rem;
    background: ${({theme}) => theme.bg};
    color: ${({theme}) => theme.on_bg};
    flex-grow: 1;
    transition: all 300ms ease;
    @media screen and (min-width: 0px) and (max-width: 480px){
        padding: 1rem;
    }
`;

export const FlexRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
`;
export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
`;
export const FormContainer = styled(FlexColumn)`
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0;
    width: 60%;
    margin: 0 auto;
    @media screen and (min-width: 0px) and (max-width: 480px){
        width: 100%;
        margin: 0;
    }
`;
export const FormField = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 100%;
    & label{
        font-size: 1.3rem;
        transition: all 200ms linear;
        cursor: pointer;
    }
    &:focus-within label{
        padding-left: 1rem;
        color: ${({theme}) => theme.on_t_container};
    }
`;
export const Input = styled.input`
    padding: 1rem;
    font-size: 1rem;
    border: none;
    background: ${({theme}) => theme.surface};
    color: ${({theme}) => theme.on_surface};
    border-bottom: 3px solid transparent;
    outline: none;
    &[type="color"]{
        width: 100%;
        height: 3rem;
        padding: .5rem 1rem;
        border-color: ${({theme}) => theme.bg};
    }
    &::placeholder{
        color: ${({theme}) => theme.on_surface};
    }
    &:focus{
        border-bottom: 3px solid ${({theme}) => theme.on_t_container};
    }
`;
export const TxtArea = styled(Input)`
    resize: none;
    height: 125px;
`;
export const Select = styled.select`
    padding: 1rem;
    font-size: 1rem;
    border: none;
    background: ${({theme}) => theme.surface};
    color: ${({theme}) => theme.on_surface};
    border-bottom: 3px solid transparent;
    outline: none;
    &::placeholder{
        color: ${({theme}) => theme.on_surface};
    }
    &:focus{
        border-bottom: 3px solid ${({theme}) => theme.on_t_container};
    }
    &.optionItem:hover{
        background: ${({theme}) => theme.t_container};
    }
`;
export const Logo = styled.img`
    height: 1.5rem;
`;
export const LogoContainer = styled.div`
display: flex;
align-items: center;
gap: .25rem;
`;

export const Icon = styled.i`
    font-size: 24px;
    display: flex;
    align-items: center;
    width: min-content;
    color: ${props => props.color};
    background: ${props => props.bg};
    border-radius: .125rem;
    cursor: pointer;
    &:hover{
        outline: 1px solid ${props => props.color};
    }
`;
export const Span = styled.span`
    color: ${props => props.color};
`;

export const Btn = styled.button`
    padding: .5rem 1rem;
    background: ${props => props.bg};
    color: ${props => props.color};
    border: none;
    font-size: 1rem;
    cursor: pointer;
    border-radius: .25rem;
`;

export const MainTitle = styled.h1`
    font-weight: bold;
    text-align: center;
    margin: 1rem 0;
`;

export const CatTitle = styled.h2`
    width: min-content;
    background-color: ${({theme}) => theme.primary};
    padding: 1rem;
    color: ${({theme}) => theme.on_primary};
`;

export const HomeVideo = styled.iframe`
width: 60%;
height: 60vh;
@media screen and (min-width: 0px) and (max-width: 480px){
    width: 100%;
    height: 30vh;
}
`;

export const Card = styled.div`
    flex: 1 0 auto;
    width: 20vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    background: ${({theme}) => theme.surface};
    color: ${({theme}) => theme.on_bg};
    @media screen and (min-width: 0px) and (max-width: 480px){
        width: 80vw;
        height: 25vh;
        scroll-snap-align: center;
    }
`;
export const VideoCover = styled.img`
    flex-grow: 1;
    background: ${({theme}) => theme.p_container};
`;
export const VideoInfo = styled.div`
    padding: 1rem;
`;