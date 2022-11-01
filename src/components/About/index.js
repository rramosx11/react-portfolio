import React from "react";
import profileImage from "../../assets/large/rodolforamos2.jpg";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            I am Rodolfo, an aspiring full-stack web developer. I graduated from
            Catawba College with a Business Admintration degree with a minor in
            Information Systems. I am learning full stack to build on my
            background in information system so that I can do what I enjoy
            coding as profession. I'm a team member and adaptive at learning
            resources, which guides me to always be prepared to reach a
            resolution in a group or independently.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
