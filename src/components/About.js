import React from "react";
import "./About.css";
import { Particles } from "react-particles-js";
import particleOpt from "./particles";
import itsEric from "./assets/img/EricChen.jpg"; //In React you need to Import photos to get it to render.

function About() {
  return (
    <div class="wrapper">
      <div id="first-content" class="some">
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
        ></link>
        
        <div class="internal">
          <h1> Professional Experience</h1>
          <h3 class="topboi"> Summer 2019 Internship at Viasat</h3>
          <p class="text-style">
            This past summer I got the chance to work at Viasat in Carlsbad,
            California. As a software engineering intern, I worked on
            implementing additional features to simulate SATCOM operations on an
            existing application. This application is an interactive graphical
            user interface that enables clients to manage satellite
            communication lines. Furthermore, my partner and I tackled the
            implementation of a database using SQL Server for the application
            from scratch working in C# and leveraging the entity framework.
          </p>
        </div>
      </div>
      <div id="second-content" class="some">
        <div class="internal">
          <h1>Skills</h1>
          <div class="seperate">
            <i class="devicon-python-plain-wordmark colored"></i>
            <i class="devicon-git-plain-wordmark"></i>
            <i class="devicon-c-plain colored"></i>
            <i class="devicon-csharp-plain colored"></i>
            <i class="devicon-cplusplus-plain colored"></i>
            <i class="devicon-linux-plain colored"></i>
            <i class="devicon-java-plain"></i>
            <i class="devicon-react-original-wordmark colored"></i>
            <i class="devicon-css3-plain-wordmark colored"></i>
            <i class="devicon-visualstudio-plain colored"></i>
          </div>

          <div class="seperate">
            <i class="devicon-html5-plain-wordmark colored"></i>
            <i class="devicon-windows8-original"></i>
            <i class="devicon-apple-original"></i>
            <i class="devicon-pycharm-plain-wordmark"></i>
          </div>
        </div>
      </div>
      <div id="third-content" class="some">
        <div class="internal">
          <h1>Projects</h1>
          <h3 class="topboi"> Dino Runner (In Progress)</h3>
          <p class="text-style"> Work in progress...</p>
        </div>
      </div>
      <Particles className="particles" params={particleOpt} />
    </div>
  );
}

export default About;
