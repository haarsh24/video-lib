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
                <div className="card-horizontal" key={_id}>
                    <div className="">
                        <img
                            src={`https://i.ytimg.com/vi/${_id}/hq720.jpg`}
                            alt={title}
                            className="image-responsive video-card-image"
                        />
                        <span className="">{duration}</span>
                    </div>
                    <div className="text-container flex p1">
                        <div className="text-container-title h4">
                            <h4>{title}</h4>
                            <button className="btn h4">
                                <span className="material-icons"
                                    onClick={() => videoDeleteHandler(_id)}>
                                    delete
                                </span>
                            </button>
                        </div>
                        <div className="text-container-desc">
                            <p>{creator}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export { VerticalVideoCard };