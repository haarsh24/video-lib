import { PlaylistCard } from "../../components/plylistCard/playlistCard.jsx";
import { usePlayList } from "../../context/playlistContext"
import { Explore } from "../../components/explore/explore.jsx";

const Playlist = () => {
    const { playlists } = usePlayList();
    return (
        <>
            {playlists == 0 ? <Explore /> :
            <div className="filter-products">
                <div className="">
                    <div className="">
                        {playlists.map(playlist => <PlaylistCard playlist={playlist} key={playlist._id} />)}
                    </div>
                </div>
            </div>}
        </>
    )
}

export {Playlist}

