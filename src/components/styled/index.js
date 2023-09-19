import {styled} from "styled-components"

export const Container = styled.div`
    padding: 1rem 2rem;
    background: ${({theme}) => theme.bg};
    color: ${({theme}) => theme.on_bg};
    min-height: 100vh;
    transition: all 300ms ease;
    @media screen and (min-width: 0px) and (max-width: 480px){
        padding: 1rem;
    }
    @media screen and (min-width: 481px) and (max-width: 768px){
        padding: 1rem 1.5rem;
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
    @media screen and (min-width: 481px) and (max-width: 768px){
        width: 80%;
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
    border-radius: .125rem;
    cursor: pointer;
    &.tertiary{
        color: ${({theme})=>theme.on_tertiary};
        background: ${({theme})=>theme.tertiary};
    }
    &:hover{
        outline: 1px solid currentColor;
    }
`;
export const Span = styled.span`
    color: ${({theme})=>theme.on_primary};

    &.tertiary{
        color: ${({theme}) => theme.on_t_container} 
    }
`;

export const Btn = styled.button`
    padding: .5rem 1rem;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    border-radius: .25rem;
    &.primary{
        background: ${({theme}) => theme.primary};
        color: ${({theme}) => theme.on_primary};
    }
    &.error{
        background: ${({theme}) => theme.error};
        color: ${({theme}) => theme.on_error};
    }
`;

export const MainTitle = styled.h1`
    font-weight: bold;
    text-align: center;
    margin: 1rem 0;
`;

export const CatTitle = styled.h2`
    width: max-content;
    background-color: ${props => props.color};
    padding: 1rem;
    color: ${({theme}) => theme.bg};
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const HomeVideo = styled.iframe`
width: 60%;
height: 60vh;
@media screen and (min-width: 0px) and (max-width: 480px){
    width: 100%;
    height: 30vh;
}
@media screen and (min-width: 481px) and (max-width: 768px){
    width: 90%;
    height: 40vh;
}
`;

export const Card = styled.div`
    flex: 1 0 auto;
    width: 25vw;
    height: auto;
    display: flex;
    flex-direction: column;
    background: ${({theme}) => theme.surface};
    box-sizing: border-box;
    color: ${({theme}) => theme.on_bg};
    @media screen and (min-width: 0px) and (max-width: 480px){
        width: 80vw;
        scroll-snap-align: center;
    }
    @media screen and (min-width: 481px) and (max-width: 768px){
        width: 30vw;
    }
`;
export const VideoCover = styled.img`
    width: 100%;
    height: 70%;
    object-fit: contain;
    background: ${({theme}) => theme.p_container};
`;
export const VideoInfo = styled.div`
    padding: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
`;
export const ErrorMessage = styled.span`
    color: ${({theme}) => theme.error};
`;

export const BtnIcon = styled(Btn)`
    display: flex;
    gap: .5rem;
    align-items: center;
`;
export const ActionsContainer = styled.div`
    align-self: flex-start;
    width: min-content;
    margin-bottom: .5rem;
`;

export const ModalContainer = styled.div`
    z-index: 5;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
`;
export const Modal = styled.section`
    width: 90%;
    max-width: 650px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background: ${({theme}) => theme.surface};
    padding: 1rem;
    border-radius: .5rem;
`;
export const ModalTitle = styled(MainTitle)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0;
    align-items: center;
`;