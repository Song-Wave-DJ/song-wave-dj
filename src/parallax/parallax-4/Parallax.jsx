import { useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/all";
import "./styles.css";

import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";
import { Naviagtion } from "./nav";
import {
  RaveIcon,
  RepaetIcon,
  RequestImageIcon,
  RetroIcon,
} from "../../assets";
import { Button, TextInput } from "../../components";
import { useNavigate } from "react-router-dom";
import { Form } from "antd";
import { fieldSet } from "./fieldsData";

const Main = () => {
  return (
    <>
      <Naviagtion />
      <div className="grid h-screen content-center p-4">
        <h1 className="text-white font-serif font-bold  text-center text-3xl uppercase">
          song wave x resturant
        </h1>
        <p className="text-white mt-4 font-serif  text-center text-l">
          Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit
          nullam nunc justo sagittis suscipit ultrices.
        </p>
      </div>
    </>
  );
};

const DJ = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen p-4 grid content-center">
      <h1 className="text-white font-serif font-bold text-center text-3xl uppercase">
        Our DJ Your Songs
      </h1>

      <ul className="flex gap-7 justify-center my-4 text-xl items-center">
        <li className="text-white ">Request</li>
        <li className="text-white ">Rave</li>
        <li className="text-white ">Repeat</li>
      </ul>
      <div className="flex my-4 items-center w-[80%] md:w-1/2 m-auto justify-center">
        <Button
          label="Change Mood (Request Songs)"
          onClick={() => navigate("/three-hours")}
        />
      </div>
    </div>
  );
};

const Polls = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen p-4 grid content-center">
      <h1 className="text-white font-serif font-bold text-center text-2xl uppercase">
        Fun poll questions help your meetings start with more humor and
        connection. Try out these sample questions that will set a positive tone
        for your team.
      </h1>

      <div className="flex mt-12 items-center w-[80%] md:w-1/2 m-auto justify-center">
        <Button label="Polls" onClick={() => navigate("/polls")} />
      </div>
    </div>
  );
};

const ReqSongs = () => {
  return (
    <div className="h-screen p-4 grid content-center md:flex md:justify-center md:items-center">
      <img
        src={RetroIcon}
        className="animate-spin w-[70%] md:w-[40%] m-auto object-cover"
        alt=""
      />
      <p className="text-white mt-4 font-serif  text-center text-l">
        "Handpick your favorite beat and send it to&nbsp;the&nbsp;DJ!" Suggest
        your favorite songs, from chart-toppers to hidden gems, and let our DJs
        know exactly what gets&nbsp;you&nbsp;moving. "GROOVE ON DEMAND".now
        impress your loved once with thier fav song Tune into Happiness with uh
        fav song and fav place with songwave
      </p>
    </div>
  );
};

const Food = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen p-4 grid content-center">
      <h1 className="text-white font-serif font-bold text-center text-3xl uppercase">
        Don't Play With Fire, Play With Taste.
      </h1>
      <div className="flex my-4 items-center w-[80%] md:w-1/2 m-auto justify-center">
        <Button label="Order Food" onClick={() => navigate("/category")} />
      </div>
    </div>
  );
};

const Example = () => {
  return (
    <div className="p-4 grid content-center min-h-screen">
      <h1 className="text-l font-bold text-white text-center">
        Beat the Blues, Feel Renewed: Your Fav Song, Your Happy Brew!
      </h1>
      <div className="flex justify-center gap-4  mt-2 flex-wrap">
        <div className="w-full md:w-96 p-4 h-56 bg-[#76697ac8] rounded-lg">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold text-white">Request</h1>
            <span className="w-16">
              <img src={RequestImageIcon} alt="" />
            </span>
          </div>
          <p className="text-lg mt-2 text-center text-white">
            Whatever the scale and nature of your projects, our specialists have
            the skills and experience necessary to successfully solve your
            problems.
          </p>
        </div>
        <div className="w-full md:w-96 p-4 h-56 bg-[#76697ac8] rounded-lg">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold text-white">Rave</h1>
            <span className="w-16">
              <img src={RaveIcon} alt="" />
            </span>
          </div>
          <p className="text-lg mt-2 text-center text-white">
            Whatever the scale and nature of your projects, our specialists have
            the skills and experience necessary to successfully solve your
            problems.
          </p>
        </div>
        <div className="w-full md:w-96 p-4 h-56 bg-[#76697ac8] rounded-lg">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold text-white">Repeat</h1>
            <span className="w-16 object-contain">
              <img
                src={RepaetIcon}
                className="h-full w-full object-contain"
                alt=""
              />
            </span>
          </div>
          <p className="text-lg mt-2 text-center text-white">
            Whatever the scale and nature of your projects, our specialists have
            the skills and experience necessary to successfully solve your
            problems.
          </p>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const onFinishContact = () => {};
  return (
    <div className="p-4 h-screen bg-[#76697a84] rounded-lg grid content-center">
      <div className="w-full md:w-96 px-4 m-auto py-6   rounded-lg">
        <h1 className="text-4xl font-bold text-white">Contact Us</h1>
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
  );
};

const Footer = () => {
  return (
    <div className="min-h-screen p-4  flex gap-4 flex-wrap">
      <div className="p-4 py-10 flex gap-10 flex-wrap">
        <div className="md:flex-[.7]">
          <h1 className="text-3xl mb-2 font-bold text-[#F68C1F]">Logo</h1>
          <p className="text-white text-l">
            Whatever the scale and nature of your projects, our specialists have
            the skills and experience necessary to successfully solve your
            problems
          </p>
        </div>
        <div className="">
          <h1 className="text-2xl  font-bold mb-2 text-[#F68C1F]">
            Contact Us
          </h1>
          <p className="text-white text-l">
            <a href="tel:+913333782901">Phone: +91 3333-7829-01</a>
          </p>
          <a href="mailto:example@gmail.com">
            <p className="text-l text-white">Email: example@gmail.com</p>
          </a>
        </div>
        <div className="">
          <h1 className="text-2xl font-bold text-[#F68C1F] mb-2">
            Help Center
          </h1>
          <p className="text-white text-l">Terms and Services</p>
          <p className="text-white text-l">Privacy Policy</p>
        </div>
        <div className="">
          <h1 className="text-2xl font-bold text-[#F68C1F] mb-2">
            Join us on Social Media
          </h1>

          <div className="flex gap-4">
            <a href="#!" className="mt-2" role="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="currentColor"
                style={{
                  color: "#1877f2",
                }}
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>

            <a href="#!" className="mt-2" role="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="currentColor"
                style={{
                  color: "#c13584",
                }}
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a href="#!" className="mt-2" role="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="currentColor"
                style={{
                  color: "#ea4335",
                }}
                viewBox="0 0 24 24"
              >
                <path
                  d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a href="#!" className="mt-2" role="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="currentColor"
                style={{
                  color: "#1da1f2",
                }}
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const gsapInit = () => {
  gsap.registerPlugin(Observer);

  let sections = document.querySelectorAll("section"),
    images = document.querySelectorAll(".bg"),
    outerWrappers = gsap.utils.toArray(".outer"),
    innerWrappers = gsap.utils.toArray(".inner"),
    currentIndex = -1,
    wrap = gsap.utils.wrap(0, sections.length),
    animating;

  gsap.set(outerWrappers, { yPercent: 100 });
  gsap.set(innerWrappers, { yPercent: -100 });

  const gotoSection = (index, direction) => {
    index = wrap(index);
    animating = true;
    let fromTop = direction === -1,
      dFactor = fromTop ? -1 : 1,
      tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => (animating = false),
      });
    if (currentIndex >= 0) {
      gsap.set(sections[currentIndex], { zIndex: 0 });
      tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
        sections[currentIndex],
        { autoAlpha: 0 }
      );
    }
    gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
    tl.fromTo(
      [outerWrappers[index], innerWrappers[index]],
      { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
      { yPercent: 0 },
      0
    ).fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);

    currentIndex = index;
  };

  Observer.create({
    type: "wheel,touch,pointer",
    wheelSpeed: -1,
    onDown: () => !animating && gotoSection(currentIndex - 1, -1),
    onUp: () => !animating && gotoSection(currentIndex + 1, 1),
    tolerance: 10,
    preventDefault: true,
  });

  gotoSection(0, 1);
};

const sections = [
  { title: <Main />, image: image1 },
  { title: <DJ />, image: image2 },
  { title: <ReqSongs />, image: image3 },
  {
    title: <Food />,
    image:
      "https://plus.unsplash.com/premium_photo-1674106347866-8282d8c19f84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: <Polls />,
    image: image3,
  },
  { title: <Example />, image: image1 },
  { title: <Contact />, image: image2 },
  { title: <Footer />, image: image3 },
];

export const ParallaxFour = () => {
  useEffect(() => {
    gsapInit();
  }, []);

  return sections.map((section, idx) => (
    <section key={idx}>
      <div className="outer">
        <div className="inner">
          <div
            className="bg one"
            style={{ backgroundImage: `url(${section.image})` }}
          >
            {section.title}
          </div>
        </div>
      </div>
    </section>
  ));
};
