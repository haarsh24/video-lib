import { useState } from "react";
import { isVideoInArray } from "../../utilities/helperFunctions/isVideoInArray";
import { usePlayList} from "../../context/playlistContext";
import { useAuth } from "../../context/authContext";
import { createPlayList } from "../../utilities/apiCalls/playlistModalApiCalls";
import {isVideoAlreadyInPlaylist} from "../../utilities/helperFunctions/isVideoAlreadyInPlaylist";
import {addVideoInPlaylist, removeVideoFromPlaylist} from "../../utilities/apiCalls/playlistApiCalls";

const PlaylistModal = ({ video }) => {
    const [playlistInput, setPlaylistInput] = useState(false)
    console.log(video)
    const { setShowModal, playlists, playListTitle, playListDispatch, playListTitleDispatch } = usePlayList();
    const { authState: { token } } = useAuth();
    console.log(playlists);
    console.log(token);
    const playListTitleHandler = (e) => {
      e.preventDefault();
      
      createPlayList(playListTitle, playListDispatch,token);
      setPlaylistInput(false);
      
    };
    const createListHandler = (e) => {
        e.preventDefault();
      setPlaylistInput(true);
    };
    const checkboxHandler = (e, playlistId) => {
      if (e.target.checked) {
       
        addVideoInPlaylist(video, playlistId, playListDispatch,token);
       
      } else {
        
        removeVideoFromPlaylist(video._id, playListDispatch, playlistId,token);
        
      }
    };
   
  return (
    <>
       <div className="form input-form card-container playlist-container">
        <div className="flex space-around">
          <div className="heading  h3 ">
            <p>Select Playlist</p>
          </div>

          <button className="btn  m1" onClick={() => setShowModal(false)}>
            <span className="material-icons">close</span>
          </button>
        </div>
        
        <ul className="list-spaced list-checkbox fn-size-m">
          
          {playlists.map(({ _id, title }) => (
            <li key={_id}>
              <label className="list-label h4  m1">
                
                <input
                  className="h3 p1"
                    type="checkbox"
                    checked={
                      isVideoAlreadyInPlaylist(playlists, _id, video._id) ??
                      false
                    }
                    id={_id}
                    onChange={(e) => {
                      checkboxHandler(e, _id);
                    }}
                  />
                
                {title}
              </label>
            </li>
          ))}
        </ul>
        {playlistInput && (
          <form className="flex space-around m1" onSubmit={(e) => playListTitleHandler(e)}>
            <input
              className="h4 m1"
              type="text"
              placeholder="create playlist"
              onChange={(e) =>
                playListTitleDispatch({
                  type: "NEW_PLAYLIST_TITLE",
                  payload: e.target.value,
                })
              }
            />
            <button className="btn m1" type="submit">
              CREATE
            </button>
          </form>
        )}
        <button
          className="btn h4 m1"
          onClick={(e) => createListHandler(e)}
        >
          <span className="material-icons h4 ">add</span>
          <span>Creat new playlist</span>
        </button>
      </div>
    </>
  );
};

export { PlaylistModal };
