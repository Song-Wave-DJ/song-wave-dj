import { useEffect, useState } from "react";
import { Searching, Title } from "../../components";
import { MusicCard } from "./components/music-card";
import { MusicData } from "./constants";
export const ThreeHours = () => {
  const [reqMusics, setReqMusic] = useState([]);

  async function getAccessToken() {}

  useEffect(() => {
    getAccessToken();
  }, []);

  const handleGetPlayLists = () => {};

  useEffect(() => {
    setTimeout(() => {
      handleGetPlayLists();
    }, 2000);
  }, []);

  const onReqMusic = (id) => {
    setReqMusic((prev) => {
      const preObj = structuredClone(prev);
      const idx = preObj.findIndex((el) => el === id);
      if (idx !== -1) {
        preObj.splice(idx, 1);
      } else {
        preObj.push(id);
      }
      return preObj;
    });
  };

  const onChangeSearch = (e) => {};

  return (
    <div className="py-2 min-h-screen sm:w-[500px] w-full m-auto px-2 relative">
      <div className="flex justify-end my-4 gap-1">
        <Searching
          placeholder="Request here..."
          styles="flex-[.8]"
          onChange={onChangeSearch}
        />
        <button className="p-2 px-6 text-purple-100 text-x rounded-lg bg-gradient-to-r from-purple-600 to-purple-400">
          Request
        </button>
      </div>
      {/* top music */}
      <div className="mt-4">
        <Title label="Top Musics" styles="text-lg" />
        {MusicData.map((item) => (
          <MusicCard
            {...item}
            key={item.id}
            reqMusics={reqMusics}
            onReqMusic={onReqMusic}
          />
        ))}
      </div>
      {/* Recommanded */}
      <div className="mt-4">
        <Title label="Recommendations" styles="text-lg" />
        {MusicData.map((item) => (
          <MusicCard
            {...item}
            key={item.id}
            reqMusics={reqMusics}
            onReqMusic={onReqMusic}
          />
        ))}
      </div>
      {/* Playlist */}
      <div className="mt-4">
        <Title label="Playlists" styles="text-lg" />
        {MusicData.map((item) => (
          <MusicCard
            {...item}
            key={item.id}
            reqMusics={reqMusics}
            onReqMusic={onReqMusic}
          />
        ))}
      </div>
    </div>
  );
};
