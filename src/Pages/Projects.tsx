// @ts-nocheck
import "../App.scss";

import Card from "../Card.tsx";
import HamburgerMenu from "../HamburgerMenu.tsx";
import NavBar from "../NavBar/NavBar.tsx";
import React from "react";
import dontspray from "../imgs/projects/dontspray.png";
import github from "../imgs/github.png";
import internals from "../imgs/projects/internals.png";
import microcontroller from "../imgs/projects//microcontroller.png";
import microcontrollers from "../imgs/projects//microcontrollers.png";
import youtube from "../imgs/youtube.png";

interface Props {
  navbar: NavBar;
  isMobile: boolean;
}
function Projects({ navbar, isMobile }: Props) {
  const info = (
    <>
      <h1 className="title">Projects</h1>
      <Card
        title="Don't Spray"
        desc={`First Place Winner at Hack4Pan \n\n Watch the demo below where I presented to content creators like Frying Pan, Ben Awad, OuiMimi, and Cynosurae; and 400+ viewers! \n\n Don't Spray is a robot that aims to make your aim better. If you spray in Valorant or any FPS, you'll be sprayed with water in real life. It'll teach you in a pretty effective and fun way how to tap fire instead of spray bullets. Either get gud or get wet \n\n Uses Arduino hardware and Python`}
        imgs={[
          [dontspray, "The Bot"],
          [internals, "The Internals"],
        ]}
        links={[
          [github, "https://github.com/jasonntruong/Dont-Spray-Hack4Pan"],
          [youtube, "https://www.youtube.com/watch?v=E_7W58FOAwo&t=166s"],
        ]}
      />
      <Card
        title="Coupon Chef"
        desc={`Coupon Chef is a profitable mobile app and my own REST API solution that takes all the groceries on sale in my area and recommends me recipes to cook using those on sale ingredients. This way I not only save by not ordering UberEats, but I also save on everything I cook. A bonus is that I get exposure to new recipes and become a better chef. \n\n Developed using React Native, TypeScript, Python, Selenium, Flask, Spoonacular API, Xcode, and Rasp Pi to host my API`}
        links={[
          [github, "https://github.com/jasonntruong/Coupon-Chef"],
          [youtube, "https://youtu.be/umf6_c1A7Xs"],
        ]}
      />
      <Card
        title="Morning Run"
        desc={`Created a web server and 4 client alarm clock network that turns off when 1 randomly selected, scattered-across-the-room client module is pressed – forcing the user to run around their room each morning and overcome their sleep inertia \n\n Developed using C++, PHP, Python, SQL, HTML, CSS, HTTP Server (deployed on Rasp Pi), Arduino, and ESP32 microcontrollers`}
        imgs={[
          [microcontrollers, "Microcontrollers"],
          [microcontroller, "Single Microcontroller"],
        ]}
        links={[[github, "https://github.com/jasonntruong/Morning-Run"]]}
      />
      <Card
        title="Manga Swiper"
        desc={`I always want to read manga when I'm eating but I can't or my keyboard will get dirty. So I built Manga Swiper. \n\n Using the computer's webcam to view the user's hand, Manga Swiper allows you to read manga via hand gestures \n\n Swipe up: Go to next page \n Swipe left: Go to next chapter \n Swipe right: Go to previous chapter \n\n Built using Python, Open CV2 API for camera control, Mediapipe API for hand tracking, and Pynput to automate the keyboard. \n\n Pro: Now I feel like I have the force when I'm reading`}
        links={[[github, "https://github.com/jasonntruong/Manga-Swiper"]]}
      />

      <br />
    </>
  );

  if (isMobile) {
    return (
      <div>
        <HamburgerMenu />
        <div className="mobileInfo">{info}</div>
      </div>
    );
  }
  return (
    <div className="row">
      <div className="column2">
        <div className="left-content">{info}</div>
      </div>
      <div className="column">{navbar}</div>
    </div>
  );
}

export default Projects;
