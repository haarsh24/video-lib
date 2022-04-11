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
            <div className="">
                <div className="">
                    <img
                        src={`https://i.ytimg.com/vi/${image_id}/hq720.jpg`}
                        alt=""
                        className="image-responsive video-card-image"
                        loading="lazy"
                    />
                </div>
                <div className="text-container">
                    <div className="text-container-title">
                        <h4>{title}</h4>
                        {deleteButton && <button className="btn">
                            <span className="material-icons" onClick={playlistDeleteHandler}> delete </span>
                        </button>}
                    </div>
                </div>
            </div>
        </>
    )
}
export { PlaylistInfoCard }