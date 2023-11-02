import { Link, useLocation, useNavigate } from "react-router-dom";
import { BackgroundIcon } from "../../assets";
import { Button, TextInput } from "@/components";
import { Form } from "antd";
import { fieldSet } from "./fieldsData";
import "./style.css";
import { useEffect, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { RequestedSongs } from "./components/requested-songs";
import { RequestedMenu } from "./components/requested-menu";
import { DJSongs } from "./components/dj";
import { PollsSection } from "./components/polls";
import { Example } from "./components/example";
// ..
export const Home = () => {
  const { search = "" } = useLocation();

  const restaurantId = useMemo(
    () => localStorage.getItem("restaurantId") ?? search?.split("?")[1],
    [search]
  );

  const tableId = useMemo(
    () => localStorage.getItem("tableId") ?? search?.split("=")[2],
    [search]
  );

  const naviagte = useNavigate();

  useEffect(() => {
    if (!restaurantId || !tableId) return naviagte("/");
    localStorage.setItem("restaurantId", restaurantId?.trim());
    localStorage.setItem("tableId", tableId?.trim());
  }, [naviagte, restaurantId, tableId]);

  const onFinishContact = (paylaod) => {};

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section className=" bg-black home overflow-y-auto">
      <div
        className="relative overflow-y-auto"
        style={{
          backgroundImage: `url( ${BackgroundIcon})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="grid content-center">
          <img
            className="w-full h-screen aspect-video"
            src={"https://media0.giphy.com/media/3oz8xur099boo4N9aU/giphy.gif"}
          />
          <div className="absolute p-4 bg-[#76697a90] aspect-video w-full h-full">
            <h1
              data-aos="fade-down"
              className="text-white mt-10 font-serif font-bold  text-center text-6xl uppercase"
            >
              song wave x resturant
            </h1>
            <p
              data-aos="zoom-in"
              className="text-white mt-4 font-serif  text-center text-3xl"
            >
              Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit nullam nunc justo sagittis suscipit ultrices.
            </p>
          </div>
        </div>

        {/* DJ */}
        <DJSongs />
        {/* Retro */}
        <RequestedSongs />
        {/* Food */}
        <RequestedMenu />

        {/* Polls */}
        <PollsSection />

        {/* Example */}
        <Example />

        {/*Contact Us  */}
        <div className="p-4">
          <div className="w-full md:w-96 px-4 m-auto py-6 min-h-96 bg-[#76697a84] rounded-lg">
            <h1 className="text-4xl text-center font-bold text-white">
              Contact Us
            </h1>
            <Form
              name="add-waiter"
              requiredMark={false}
              layout="vertical"
              onFinish={onFinishContact}
              key={Math.random()}
            >
              <TextInput name="name" {...fieldSet.name} />
              <TextInput name="email" {...fieldSet.email} />
              <TextInput name="phone" {...fieldSet.phone} />

              <Form.Item>
                <div className="flex justify-between  mt-4 gap-4 w-full">
                  <Button label="Save" styles="flex-1" />
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="min-h-60 p-4  bg-[#76697a84] flex gap-4 flex-wrap">
          <div className="mt-5">
            <h1 className="text-4xl mb-2 font-bold text-gray-200 ">
              Song Wave
            </h1>
            <p className="text-white text-lg">
              Whatever the scale and nature of your projects, our specialists
              have the skills and experience necessary to successfully solve
              your problems
            </p>
          </div>
          <div className="mt-5">
            <h1 className="text-4xl font-bold text-gray-200">Contact Us</h1>
            <p className="text-white text-lg">
              <a href="tel:+913333782901">Contact: +91 3333-7829-01</a>
            </p>
            <a href="mailto:example@gmail.com">
              <p className="text-white text-lg">Email: example@gmail.com</p>
            </a>
          </div>
          <div className="mt-5">
            <h1 className="text-4xl font-bold text-gray-200">Help Center</h1>
            <p className="text-white text-lg">Terms and Services</p>
            <p className="text-white text-lg">Privacy Policy</p>
          </div>
        </div>
      </div>
      {/* Footer */}
    </section>
  );
};
