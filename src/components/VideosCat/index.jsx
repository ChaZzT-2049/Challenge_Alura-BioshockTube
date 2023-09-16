import { VideoCard } from "../VideoCard"
import { Link } from "react-router-dom";
import styled from "styled-components"


const VideosContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    padding-top: 1rem;
    gap: 1rem;
    overflow-x: scroll;
    height: auto;
    align-items: center;
    overflow-y: hidden;
    scroll-padding-top: .5rem;
    @media screen and (min-width: 0px) and (max-width: 480px){
        gap: .5rem;
        scroll-snap-type: x mandatory;
    }
`;

export const VideosCat = (props) => {
    const { videos } = props

    return <VideosContainer>
        {
            videos.map(video => ( 
                <Link key={video.id} to={`/videos/${video.id}`} ><VideoCard video={video} /></Link>
            ))
        }
        {
            videos.length === 0 && <span>Aún no hay videos</span>
        }
    </VideosContainer>
}