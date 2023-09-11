import { MainTitle, Container } from "../components/styled"
import { Link } from "react-router-dom";
import styled from "styled-components";
import cover from "../assets/img/404.jpg"
const ContCover = styled(Container)`
    background: url(${cover}) center no-repeat;
    color: ${({theme}) => theme.on_primary};
    height: 100vh;
`;
const Error404 = () => {
    return <ContCover>
        <MainTitle>
            Parece que te has perdido.
        </MainTitle>
        <Link to="/">Volver al inicio</Link>
    </ContCover>
}
export default Error404