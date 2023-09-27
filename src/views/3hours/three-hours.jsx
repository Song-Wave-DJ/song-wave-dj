import { useState } from "react";
import { Title } from "../../components";
import { MusicCard } from "./components/music-card";
import { MusicData } from "./constants";

export const ThreeHours = () => {
  const [reqMusics, setReqMusic] = useState([]);

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

  return (
    <div className="py-2 min-h-screen sm:w-[500px] w-full m-auto px-2 relative">
      {/* top music */}
      <div className="mt-4">
        <Title label="Top Musics" styles="text-lg" />
        {MusicData.map((item) => (
          <MusicCard
            {...item}
            kye={item.id}
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
            kye={item.id}
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
            kye={item.id}
            reqMusics={reqMusics}
            onReqMusic={onReqMusic}
          />
        ))}
      </div>
    </div>
  );
};
