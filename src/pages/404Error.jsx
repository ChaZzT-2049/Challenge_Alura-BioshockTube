import { MainTitle, Container, Span } from "../components/styled"
import { Link } from "react-router-dom";
import styled from "styled-components";
import cover from "../assets/img/404.jpg"
const ContCover = styled(Container)`
    background: url(${cover}) no-repeat center / cover;
    color: ${({theme}) => theme.on_primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 0;
    height: 80vh;
`;
const TitleCover = styled(MainTitle)`
    background: ${({theme}) => theme.primary};
    padding: .5rem;
    &.link{background: ${({theme}) => theme.secondary};}
`;
const Error404 = () => {
    return <ContCover>
        <TitleCover>
            Parece que te has perdido.
        </TitleCover>
        <TitleCover className="link"><Link to="/"><Span color={({theme}) => theme.on_primary}>Volver al inicio</Span></Link></TitleCover>
    </ContCover>
}
export default Error404