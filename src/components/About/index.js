// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Aspiring Full Stack Web Developer</p>
      <br />
      <img
        className="my-pic"
        // src={process.env.PUBLIC_URL + "/rodolforamos2.jpg"}
        alt="Rodolfo Ramos"
      />
      <p className="content is-italic mt-4">
        I am Rodolfo, a corporate worker, learning full stack to build on my
        background in information system so that I can do what I enjoy doing as
        a profession.
      </p>
      <p className="content">
        I'm a team member and adaptive at learning resources, which guides me to
        always be prepared to reach a resolution in a group or independently.
      </p>
    </div>
  );
}

export default About;
