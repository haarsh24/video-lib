import React from 'react'
import { usePlayList } from '../../context/playlistContext';
import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from '../../context/authContext';

const PlaylistInfoCard = ({ image_id, title, deleteButton }) => {
    const { authState: { token } } = useAuth();
    const navigate = useNavigate();
    const { playListDispatch } = usePlayList();
    const { playlistId } = useParams();

    const playlistDeleteHandler = () => {
        deleteButton(playListDispatch, playlistId,token);
        playlistId && navigate("/playlist");
    }
    return (
        <>
            {/* <div className=""> */}
                {/* <div className="">
                    <img
                        src={`https://i.ytimg.com/vi/${image_id}/hq720.jpg`}
                        alt=""
                        className="image-responsive video-card-image"
                        loading="lazy"
                    />
                </div> */}
                <div className=" flex space-between m-tb-1">
                    <div className=" m1">
                        <h4>Playlist Name : {title}</h4>
                       
                </div>
                {deleteButton && <button className="btn  ">
                            <span className="material-icons h4 " onClick={playlistDeleteHandler}> delete </span>
                        </button>}
                </div>
            {/* </div> */}
        </>
    )
}
export { PlaylistInfoCard }