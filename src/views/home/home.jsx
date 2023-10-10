import { Link } from "react-router-dom";
import {
  BackgroundIcon,
  DiskIcon,
  LightIcon,
  RetroBgIcon,
  RetroIcon,
} from "../../assets";

export const Home = () => {
  return (
    <section
      className="bg-black relative max-h-screen"
      style={{
        backgroundImage: `url( ${BackgroundIcon})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex">
        <img
          className="w-full h-screen aspect-video"
          src={"https://media0.giphy.com/media/3oz8xur099boo4N9aU/giphy.gif"}
        />
        <div className="absolute p-4 bg-[#76697a90] aspect-video w-full h-full">
          <h1 className="text-white mt-10 font-serif font-bold  text-center text-6xl uppercase">
            song wave x resturant
          </h1>
          <p className="text-white mt-4 font-serif  text-center text-3xl">
            {" "}
            Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit
            nullam nunc justo sagittis suscipit ultrices.
          </p>
        </div>
      </div>

      {/* DJ */}
      <div
        className="flex flex-col relative "
        style={{
          backgroundImage: `url( ${DiskIcon})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "60vh",
          opacity: 0.9,
        }}
      >
        <div className="flex justify-center flex-col  py-5">
          <h2 className="text-center text-white text-6xl font-bold">
            Our DJ Your Songs
          </h2>
          <ul className="flex gap-7 justify-center text-xl items-center">
            <li className="text-white ">Request</li>
            <li className="text-white ">Rave</li>
            <li className="text-white ">Repeat</li>
          </ul>
          <Link
            to="/three-hours"
            className="absolute bottom-0 w-[75%] right-0 rounded-md p-2 flex cursor-pointer flex-col items-center bg-[#000]"
          >
            <p className="text-white text-2xl font-bold">Change Mood</p>
            <p className="text-white my-2 text-lg font-bold">(Request Song)</p>
          </Link>
        </div>
      </div>
      {/* Retro */}
      <div
        className="p-4 flex  items-center flex-col md:flex-row"
        style={{
          backgroundImage: `url( ${RetroBgIcon})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.9,
        }}
      >
        <div className="w-full h-full">
          <img src={RetroIcon} className="w-full object-cover" alt="" />
        </div>
        <h2 className="text-center text-2xl my-5 text-white">
          "Handpick your favorite beat and send it to&nbsp;the&nbsp;DJ!" Suggest
          your favorite songs, from chart-toppers to hidden gems, and let our
          DJs know exactly what gets&nbsp;you&nbsp;moving. "GROOVE ON
          DEMAND".now impress your loved once with thier fav song Tune into
          Happiness with uh fav song and fav place with songwave
        </h2>
      </div>
      {/* Example */}
      <div
        className="p-4 flex  h-screen flex-col md:flex-row"
        style={{
          backgroundImage: `url( ${LightIcon})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.9,
        }}
      >
        <h1 className="text-5xl font-bold text-white text-center">
          {" "}
          Beat the Blues, Feel Renewed: Your Fav Song,
          Your&nbsp;Happy&nbsp;Brew!
        </h1>
        {/* <div className="">
          <div className="w-full h-96 bg-[#333333]">
            <h1>Request</h1>
          </div>
        </div> */}
      </div>
    </section>
  );
};
