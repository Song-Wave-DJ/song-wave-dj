import { useEffect, useLayoutEffect, useState } from "react";
import { Title, Button } from "@/components";
import { MusicCard } from "./components/music-card";
import { MusicData } from "./constants";
import { useNavigate } from "react-router-dom";

export const ThreeHours = () => {
  const [reqMusics, setReqMusic] = useState([]);
  const navigation = useNavigate();

  useLayoutEffect(() => {
    const resturantId = localStorage.getItem("resturantId");
    const tableId = localStorage.getItem("tableId");

    if (!resturantId || !tableId) return navigation("/");
    navigation(`?resturantId=${resturantId}&tableId=${tableId}`);
  }, [navigation]);

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

  const onSubmitMusicReq = () => {
    navigation("/sign-up");
  };

  return (
    <div className="bg-black w-full">
      <div className="py-2 min-h-screen sm:w-[500px] w-full m-auto px-2 relative">
        <div className="flex justify-end my-4 gap-1">
          <div className="border border-none flex items-center  p-2 flex-1 bg-[#242424] rounded-lg">
            <input
              type="text"
              className="bg-[#242424] w-full text-white outline-none"
              placeholder="Search & Request here..."
              onChange={onChangeSearch}
            />
          </div>

          <Button
            htmlType="button"
            onClick={onSubmitMusicReq}
            label="Request"
            styles="flex-[.2] border-none  !bg-[#242424] "
          />
        </div>
        {/* top music */}
        <div className="my-6">
          <Title label="Recommended Songs" styles="text-lg text-white " />
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
          <Title label="Songs" styles="text-lg text-white" />
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
    </div>
  );
};
