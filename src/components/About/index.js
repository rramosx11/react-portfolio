// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Aspiring Full Stack Web Developer</p>
      <hr />
      <img
        className="my-pic"
        // src={process.env.PUBLIC_URL + ""}
        alt="Rodolfo Ramos"
      />
      <p className="content is-italic mt-4">
        I am Rodolfo, a corporate worker learning full stack web development to
        build off my background in information system so that I do what I enjoy
        doing as a profession.
      </p>
      <p className="content">
        I always act as a team member and am quite adaptive at learning
        resources, which guides allows me to always be prepared to reach a
        resolution in a group or independently.
      </p>
    </div>
  );
}

export default About;
