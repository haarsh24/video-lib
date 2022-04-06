import { useParams } from "react-router-dom"

const SingleVideoPlayer = () => {
    const  { videoId } = useParams();
    return (
        <> 
            {/* <div className="image-responsive single-video"> */}
            <div>
            <iframe
                class="video-player"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Music X Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
                </iframe>
                </div>
            {/* </div> */}
        </>
    )
}

export { SingleVideoPlayer }
