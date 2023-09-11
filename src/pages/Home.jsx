import { Container, MainTitle, HomeVideo } from "../components/styled"
import { Categorias } from "../components/Categorias";
import Carrousel from "../components/Carrousel";
import {styled} from "styled-components"
const VideoWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
`;

const Home = (props) =>{
    const {theme} = props
    return <Container>
        <Carrousel tema={theme} />
        <MainTitle>Descubre Bioshock</MainTitle>
        <VideoWrapper>
            <HomeVideo src="https://www.youtube.com/embed/9_KMoUkX_os?si=4cRumfsMjDhom-ss&amp;start=20" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></HomeVideo>
        </VideoWrapper>
        <Categorias />
        <Categorias />
        <Categorias />
    </Container>
}
export default Home