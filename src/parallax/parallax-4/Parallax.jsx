import { useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/all";
import "./styles.css";

import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";
import { Naviagtion } from "./nav";
import { RetroIcon } from "../../assets";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";

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
