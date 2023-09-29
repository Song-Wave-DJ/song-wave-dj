import { useEffect, useState } from "react";
import { Searching, Title } from "../../components";
import { MusicCard } from "./components/music-card";
import { MusicData } from "./constants";
import axios from "axios";
export const ThreeHours = () => {
  const [reqMusics, setReqMusic] = useState([]);
  const [access_token, setAccess_token] = useState("");
  const CLIENT_ID = "356d2f2756854911a211e9fe80fea7e4";
  const CLIENT_SECRET = "6b06965854e142749b46530fbbf0d3c3";
  const accessToken =
    "BQBr6_3zdOva53Qdzevx8GRdICdkVnh36K03GJ20VIa72bEspq6dii0sbqFA4bXfT7QMwn9B6v2FopHTKLS2-9rzkeTkESDQbIvOn4788rAv2YdneEQ";
  async function getAccessToken() {
    try {
      const authParameters = {
        grant_type: "client_credentials",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      };

      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        null,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          params: authParameters,
        }
      );

      if (response.status === 200) {
        console.log(response.data.access_token);
        setAccess_token(response.data.access_token);
      } else {
        throw new Error("Failed to obtain access token");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    getAccessToken();
  }, []);

  const handleGetPlayLists = () => {
    const playlist_id = "37i9dQZF1DZ06evO2hP9DO";
    axios
      .get(`https://api.spotify.com/v1/playlists/${playlist_id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + access_token,
        },
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

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
      <div className="flex justify-end my-4 gap-4">
        <Searching styles="flex-[.6]" onChange={onChangeSearch} />
        <button className="p-2 px-4 text-purple-100 text-x rounded-full bg-gradient-to-r from-purple-600 to-purple-400">
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
