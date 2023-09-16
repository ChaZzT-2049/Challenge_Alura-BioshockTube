import {Card, VideoCover, VideoInfo} from "../styled"
export const VideoCard = (props) => {
    const { video } = props
    return <Card>
        <VideoCover src={video.img} alt={video.img} />
        <VideoInfo>
            <h4>{video.titulo}</h4>
            <p>{video.canal}</p>
        </VideoInfo>
    </Card>
}