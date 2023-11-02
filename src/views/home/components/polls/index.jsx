import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const PollsSection = () => {
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
      className="h-screen relative "
      style={{
        backgroundImage: `url("https://www.polly.ai/hubfs/Blog%20Images/Illustrations%20(white,%20svg)/Analyzing%20Results%20Fun%201.svg")`,
        backgroundSize: "cover",
      }}
    >
      <div className="bg-[#76697a90] p-4 h-screen  grid content-center">
        <h1
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="text-4xl font-bold text-white text-center"
        >
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
  );
};
