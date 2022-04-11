import { useParams } from "react-router-dom";
import { usePlayList } from "../../context/playlistContext";

const VerticalVideoCard = ({ videos, deleteVideoFrom }) => {
    console.log("vertaical video card")
    const { playListDispatch } = usePlayList();
    const { playlistId } = useParams();

    const videoDeleteHandler = (videoId) => {
        deleteVideoFrom(videoId, playListDispatch, playlistId)
    }
    return (
        <>
            {videos.map(({ _id, title, creator, duration }) =>
                <div className="card-horizontal m1" key={_id}>
                    <div >
                        <img
                            src={`https://i.ytimg.com/vi/${_id}/hq720.jpg`}
                            alt={title}
                            className="image-responsive video-card-image"
                        />
                        
                    </div>
                    <div className="text-container flex-column ">
                        <div className="text-container-title h4 flex space-between">
                            <h4>{title}</h4>
                            
                        </div>
                        <div className="h4">
                            <p>{creator}</p>
                            <span className="h5">{duration}</span>
                        </div>
                        <button className="btn h6 m1">
                                <span className="material-icons"
                                    onClick={() => videoDeleteHandler(_id)}>
                                    delete
                                </span>
                            </button>
                    </div>
                </div>
            )}
        </>
    )
}

export { VerticalVideoCard };