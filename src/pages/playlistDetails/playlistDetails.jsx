import { useParams } from "react-router-dom";
import { usePlayList } from "../../context/playlistContext";
import { VerticalVideoCard } from "../../components/verticalVideoCard/verticalVideoCard";
import { removeVideoFromPlaylist } from "../../utilities/apiCalls/playlistApiCalls";
import {deletePlaylist} from "../../utilities/apiCalls/playlistModalApiCalls"
import { PlaylistInfoCard } from "../../components/playListInfoCard/playListInfoCard";

const PlaylistDetails = () => {
  const { playlists } = usePlayList();
    const { playlistId } = useParams();
    const data = playlists.find((item) => item._id === playlistId)
    const videos = data.videos;
   
    const image_id = videos.length > 0 ? `${videos[0]._id}` : "Sxjo5MySQFI";

  return (
    <div className='filter-products'>
                <div className="">
                    
                        <div className=''>
                        <PlaylistInfoCard image_id={image_id} title={data.title} deleteButton={deletePlaylist} />
                            <div>
                                <VerticalVideoCard
                                    videos={videos}
                                    deleteVideoFrom={removeVideoFromPlaylist}
                                />
                            </div>
                        </div>
                </div>
            </div>
  );
}

export { PlaylistDetails };