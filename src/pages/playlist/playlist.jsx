import { PlaylistCard } from "../../components/plylistCard/playlistCard.jsx";
import { usePlayList } from "../../context/playlistContext"

const Playlist = () => {
    const { playlists } = usePlayList();
    return (
        <>
            <div className="filter-products">
                <div className="">
                        <div className="">
                            {playlists.map(playlist => <PlaylistCard playlist={playlist} key={playlist._id} />)}
                        </div>
                </div>
            </div>
        </>
    )
}

export {Playlist}

