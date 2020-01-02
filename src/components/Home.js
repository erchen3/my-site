import React from "react";
import "./Home.css";
import { SocialIcon } from "react-social-icons";
import { Particles } from "react-particles-js";
import particleOpt from "./particles";
function Home() {
  return (
    <div>
      <header classname="the-header">
        <div id="container">
          <h1 id="my-name"> Eric Chen </h1>
          <a
            id="about-me"
            href="/about"
            rel="noreferrer noopener"
          >
            About
          </a>

          <a
            id="resume"
            href="https://drive.google.com/open?id=1OpC0M5UlqRIEM-e1wG0wUAv6j3JDFFz5"
            rel="noreferrer noopener"
            target="_blank"
          >
            Resume
          </a>
          <SocialIcon
            id="linkedin"
            url="https://www.linkedin.com/in/eric-chen415/"
          />
          <SocialIcon id="github" url="https://github.com/erchen3" />
        </div>
      </header>
      <Particles className="particles" params={particleOpt} />
    </div>
  );
}

export default Home;
