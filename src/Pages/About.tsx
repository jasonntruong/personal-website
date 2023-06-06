// @ts-nocheck
import "../App.scss";

import Card from "../Card.tsx";
import { FadeIn } from "react-slide-fade-in";
import HamburgerMenu from "../HamburgerMenu.tsx";
import NavBar from "../NavBar/NavBar.tsx";
import React from "react";
import cafe from "../imgs/about/cafe.jpg";
import cscu from "../imgs/about/cscu.jpg";
import headshot from "../imgs/about/headshot.jpg";
import keyboard from "../imgs/about/keyboard.jpg";
import { makeLink } from "../Helpers.tsx";

interface Props {
  navbar: NavBar;
  isMobile: boolean;
}

function About({ navbar, isMobile }: Props) {
  const content = (
    <>
      <h1 className="title">About Me</h1>
      <Card
        title="Who's Jason?"
        desc={
          <p>
            {
              "I'm a 20 year old Vietnamese-Canadian Computer Science Co-op student at TMU (formerly Ryerson) from Toronto who's very interested in front-end and app development!"
            }
            <br />
            <br />
            {
              "I build and code a lot of random projects that you should check out on my "
            }
            {makeLink("GitHub", "https://www.github.com")} {":D"}
          </p>
        }
        imgs={[[headshot, "Me :)"]]}
      />
      <Card
        title="Tech Stack"
        desc={
          <p>
            {
              "Programming Languages: Java, Python, TypeScript, Dart, C, C++, JavaScript, SQL"
            }
            <br />
            <br />
            {
              "Frameworks and Tools: React Native, ReactJS, Flutter, Tailwind, Tensorflow Lite, Selenium, Git, Bitbucket, Android Studio, Xcode"
            }
          </p>
        }
      />
      <Card
        title="Hobbies"
        desc={
          <div>
            <p>
              {
                "I'm super into keyboards and have custom built 4 to date. It's a super fun hobby that let's me personalize and customize the tool I use everyday"
              }
            </p>
            <p>
              {
                "I also really enjoy doing work at local cafes. Something about working while drinking an iced americano in a well furnished cafe increases productivity"
              }
            </p>
          </div>
        }
        imgs={[
          [keyboard, "My Keyboard"],
          [cafe, "DAO Cafe"],
        ]}
      />
      <Card
        title="Extracurriculars"
        desc={
          <p>
            {
              "Currently I'm VP Communications on TMU's Computer Science Course Union"
            }
            <br />
            <br />
            {
              "I act as the public relations contact for students and student societies on behalf of the CSCU. I also design promotions and promote for all of our events via our "
            }
            {makeLink("Instagram", "https://www.instagram.com/tmu_cscu")}
            {", "}
            {makeLink("website", "https://www.tmucscu.com")}
            {", and monthly newsletter"}
          </p>
        }
        imgs={[[cscu, "CSCU Pub Night Social"]]}
      />
      <br />
    </>
  );

  if (isMobile) {
    return (
      <div>
        <HamburgerMenu />
        <div className="mobileInfo">{content}</div>
      </div>
    );
  }
  return (
    <div className="row">
      <FadeIn>
        <div className="column2">
          <div className="left-content">{content}</div>
        </div>
      </FadeIn>
      <div className="column">{navbar}</div>
    </div>
  );
}

export default About;