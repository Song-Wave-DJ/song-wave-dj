import { Link } from "react-router-dom";
import {
  BackgroundIcon,
  DiskIcon,
  LightIcon,
  RequestImageIcon,
  RetroBgIcon,
  RetroIcon,
} from "../../assets";

export const Home = () => {
  return (
    <section
      className="bg-black relative overflow-y-auto"
      style={{
        backgroundImage: `url( ${BackgroundIcon})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        maxHeight: "calc(100vh - 4rem)",
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
        className="flex flex-col h-screen relative "
        style={{
          backgroundImage: `url( ${DiskIcon})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.9,
        }}
      >
        <div className="flex justify-center flex-col p-4">
          <h2 className="text-center text-white text-6xl font-bold">
            Our DJ Your Songs
          </h2>
          <ul className="flex gap-7 justify-center text-xl items-center">
            <li className="text-white ">Request</li>
            <li className="text-white ">Rave</li>
            <li className="text-white ">Repeat</li>
          </ul>
          <div className="flex mt-20 items-center bg-[#000] w-full md:w-1/2 m-auto justify-center">
            <Link
              to="/polls"
              className="rounded-md px-10 p-4 flex cursor-pointer flex-col items-center "
            >
              <p className="text-white text-2xl font-bold">Request Songs</p>
            </Link>
          </div>
        </div>
      </div>
      {/* Retro */}
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
        <div className="w-full grid items-center h-full">
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
      {/* Food */}
      <div
        className="flex relative  flex-col justify-center  h-screen"
        style={{
          backgroundImage: `url("https://plus.unsplash.com/premium_photo-1674106347866-8282d8c19f84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`,
          backgroundSize: "cover",
        }}
      >
        <div className="bg-[#76697a90] h-screen p-4 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            Don't Play With Fire, Play With Taste.
          </h1>
          <div className="flex mt-20 bg-[#000] w-full md:w-1/2 m-auto items-center justify-center">
            <Link
              to="/category"
              className="rounded-md  p-4 flex cursor-pointer flex-col items-center"
            >
              <p className="text-white text-2xl font-bold">Order Food</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Polls */}
      <div
        className="h-screen relative"
        style={{
          backgroundImage: `url("https://www.polly.ai/hubfs/Blog%20Images/Illustrations%20(white,%20svg)/Analyzing%20Results%20Fun%201.svg")`,
          backgroundSize: "cover",
        }}
      >
        <div className="bg-[#76697a90] p-4 h-screen flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            Fun poll questions help your meetings start with more humor and
            connection. Try out these sample questions that will set a positive
            tone for your team.
          </h1>
          <div className="flex mt-20 items-center bg-[#000] w-full md:w-1/2 m-auto justify-center">
            <Link
              to="/polls"
              className="rounded-md px-10 p-4 flex cursor-pointer flex-col items-center "
            >
              <p className="text-white text-2xl font-bold">Polls</p>
            </Link>
          </div>
        </div>
      </div>
      {/* Example */}
      <div
        className="p-4 flex justify-center min-h-screen flex-col"
        style={{
          backgroundImage: `url( ${LightIcon})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.9,
        }}
      >
        <h1 className="text-5xl font-bold text-white text-center">
          Beat the Blues, Feel Renewed: Your Fav Song, Your Happy Brew!
        </h1>
        <div className="flex justify-center gap-4  mt-9 flex-wrap">
          <div className="w-full md:w-96 p-4 h-96 bg-[#76697ac8] rounded-lg">
            <div className="flex justify-between">
              <h1 className="text-4xl font-bold text-white">Request</h1>
              <span className="w-28">
                <img src={RequestImageIcon} alt="" />
              </span>
            </div>
            <p className="text-lg mt-8 text-center text-white">
              Whatever the scale and nature of your projects, our specialists
              have the skills and experience necessary to successfully solve
              your problems.
            </p>
          </div>
          <div className="w-full md:w-96 p-4 h-96 bg-[#76697ac8] rounded-lg">
            <div className="flex justify-between">
              <h1 className="text-4xl font-bold text-white">Rave</h1>
              <span className="w-28">
                <img src={RequestImageIcon} alt="" />
              </span>
            </div>
            <p className="text-lg mt-8 text-center text-white">
              Whatever the scale and nature of your projects, our specialists
              have the skills and experience necessary to successfully solve
              your problems.
            </p>
          </div>
          <div className="w-full md:w-96 p-4 h-96 bg-[#76697ac8] rounded-lg">
            <div className="flex justify-between">
              <h1 className="text-4xl font-bold text-white">Repeat</h1>
              <span className="w-28 object-contain">
                <img
                  src={RequestImageIcon}
                  className="h-full w-full object-contain"
                  alt=""
                />
              </span>
            </div>
            <p className="text-lg mt-8 text-center text-white">
              Whatever the scale and nature of your projects, our specialists
              have the skills and experience necessary to successfully solve
              your problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
