import { Carousel } from "../../@storybook";
import { RequestedMenu, RequestedSongs } from "./components";
import { CommunitiesSection } from "./components/communities";
import { Contacts } from "./components/contact";
import { PollsSection } from "./components/polls";

const contentStyle = {
  margin: 0,
  lineHeight: "160px",
  textAlign: "center",
  background: "#000B10",
};

export const Home = () => {
  return (
    <section className="bg-black ">
      {/* Banner */}
      <div className="h-screen  bg-black !flex  justify-center">
        <h3 className="text-white text-xl w-2/3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries
        </h3>
      </div>

      {/* Requested songs */}
      <RequestedSongs />

      {/* Testimonals */}
      <Carousel>
        <div
          className="min-h-[500px] p-4 bg-black !flex items-center justify-center"
          style={contentStyle}
        >
          {" "}
          <h3 className="text-white text-xl w-2/3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the
          </h3>
        </div>
        <div
          className="min-h-[500px] p-4 bg-black !flex items-center justify-center"
          style={contentStyle}
        >
          <h3 className="text-white text-xl w-2/3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries
          </h3>
        </div>
      </Carousel>

      {/* Menu */}
      <RequestedMenu />

      {/* Polls */}
      <PollsSection />

      {/* Communities */}
      <CommunitiesSection />
      {/* Contact */}
      <Contacts />
    </section>
  );
};
