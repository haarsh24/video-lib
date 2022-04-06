import { usePlayList } from "../../context/playlistContext";
import { Link } from "react-router-dom";
import { deletePlaylist } from "../../utilities/apiCalls/playlistModalApiCalls";
import { useAuth } from "../../context/authContext";
const PlaylistCard = ({playlist}) => {
    const {authState:{token}} = useAuth();
    const { videos, title, _id } = playlist

const { playListDispatch } = usePlayList();
const image_id = videos.length > 0 ? `${videos[0]._id}` : "Sxjo5MySQFI"

const playlistDeleteHandler = () => {
    deletePlaylist(playListDispatch, _id,token);
}
    return (
    <>
    <div className=" flex-column p1">
        <Link to={`/playlist/${_id}`} >
            <div className="">
                <img
                    src={`https://i.ytimg.com/vi/${image_id}/hq720.jpg`}
                    alt=""
                    className="image-responsive video-card-image"
                    loading="lazy"
                />
                <span className="h4 p1">
                    <span className='material-icons'>playlist_play</span>
                    {videos.length}
                </span>
            </div>
        </Link>
        <div className="text-container">
            <div className="text-container-title h4">
                <h4>{title}</h4>
                <button className="btn h6 m-tb-1">
                    <span className="material-icons" onClick={playlistDeleteHandler}> delete </span>
                </button>
            </div>
        </div>
    </div>
        </>
      )
}
export { PlaylistCard };