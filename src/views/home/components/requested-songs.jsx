import { useEffect } from "react";
import { RetroBgIcon, RetroIcon } from "../../../assets";
import "aos/dist/aos.css";
import Aos from "aos";

export const RequestedSongs = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      Aos.init({
        duration: 1000,
        offset: 100,
      });
    });
  }, []);

  return (
    <div
      className="p-4 flex  min-h-screen items-center flex-col md:flex-row"
      style={{
        backgroundImage: `url( ${RetroBgIcon})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        opacity: 0.9,
      }}
    >
      <div className="w-full animate-spin rounded-full p-6 grid items-center h-full">
        <img src={RetroIcon} className="w-full object-cover" alt="" />
      </div>
      <h2
        data-aos="fade-down"
        className="text-center z-10 text-2xl my-5 text-white"
      >
        "Handpick your favorite beat and send it to&nbsp;the&nbsp;DJ!" Suggest
        your favorite songs, from chart-toppers to hidden gems, and let our DJs
        know exactly what gets&nbsp;you&nbsp;moving. "GROOVE ON DEMAND".now
        impress your loved once with thier fav song Tune into Happiness with uh
        fav song and fav place with songwave
      </h2>
    </div>
  );
};
