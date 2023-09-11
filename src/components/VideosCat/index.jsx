import { VideoCard } from "../VideoCard"
import { Link } from "react-router-dom";
import styled from "styled-components"

const VideosContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    padding-top: 1rem;
    gap: 1rem;
    overflow-x: scroll;
    scroll-padding-top: .5rem;
    @media screen and (min-width: 0px) and (max-width: 480px){
        gap: .5rem;
        scroll-snap-type: x mandatory;
    }
`;

export const VideosCat = () => {
    return <VideosContainer>
        <Link to="/videos/video"><VideoCard /></Link>
        <Link to="/videos/video"><VideoCard /></Link>
        <Link to="/videos/video"><VideoCard /></Link>
        <Link to="/videos/video"><VideoCard /></Link>
        <Link to="/videos/video"><VideoCard /></Link>
        <Link to="/videos/video"><VideoCard /></Link>
    </VideosContainer>
}