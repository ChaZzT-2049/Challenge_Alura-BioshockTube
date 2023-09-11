import {Card, VideoCover, VideoInfo} from "../styled"
export const VideoCard = () => {
    return <Card>
        <VideoCover src="" alt="video cover" />
        <VideoInfo>
            <h2>Video Title</h2>
            <p>Creador</p>
        </VideoInfo>
    </Card>
}