import React from "react";
import codeQuizImage from "../../assets/small/code-quiz home.png";
import pawfectFriendsImage from "../../assets/small/pawfect-friends.png";
import noteTakerImage from "../../assets/small/Note-Taker Screenshot.png";
import eventFinderImage from "../../assets/small/Event Finder.png";
import weatherDashboardImage from "../../assets/small/Weather Dashboard 2.png";
import playerUpImage from "../../assets/small/player-up.png";
import { VscGithubAlt } from "react-icons/vsc";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://playerup2022.herokuapp.com/">
                {" "}
                <img
                  src={playerUpImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Player Up Website "
                />
              </a>
            </div>

            <div className="job-text">
              <h4>
                Player Up
                <a href="https://github.com/rramosx11/player-up">
                  <VscGithubAlt />
                </a>
              </h4>
              <p>
                Player UP is a social application designed to organize people
                with a similar interest - in this case games of all kinds! A
                user can signup for a user account. When logged in they can
                browse local activities that are available to sign up to
                participate in, sign up for activities, and add an event for
                others to join. This is a MERN stack application composed of a
                REACT front end, MongoDB database, and Node.js/Express.js server
                and API with a GraphQL API built with Apollo Server.
              </p>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://pawfect-friends-app.herokuapp.com">
                {" "}
                <img
                  src={pawfectFriendsImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Pawfect Friends Website "
                />
              </a>
            </div>
            <div className="job-text">
              <h4>
                Pawfect Friends
                <a href="https://github.com/rramosx11/Pawfect-Friends">
                  <VscGithubAlt />
                </a>
              </h4>
              <p>
                A web application that uses Node and Express back end and uses
                both GET and POST routes for creating and adding new social
                media posts or comments so that they display on our templating
                engine Handlebars.js. Application is backed by a MySQL database
                with a Sequelize ORM and protects API keys and sensitive
                information with environment variables and uses user
                authentication (express-session and cookies)
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://rramosx11.github.io/wheres-the-band/ ">
                {" "}
                <img
                  src={eventFinderImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Event Finder Application "
                />
              </a>
            </div>
            <div className="job-text">
              <h4>
                Event Finder
                <a href="https://github.com/rramosx11/wheres-the-band">
                  <VscGithubAlt />
                </a>
              </h4>
              <p>
                Application that uses two server-side APIs (Google Maps
                Directions and Seatgeek) to get directions from the starting
                address to the selected event location.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://rramosx11.github.io/code-quiz/">
                {" "}
                <img
                  src={codeQuizImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Code Quiz "
                />
              </a>
            </div>
            <div className="job-text">
              <h4>
                Code Quiz
                <a href="https://github.com/rramosx11/code-quiz">
                  <VscGithubAlt />
                </a>
              </h4>
              <p>
                A javascript and local storage appliaction that will let you
                take a quiz on basic coding questions.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://lit-brook-89954.herokuapp.com/">
                {" "}
                <img
                  src={noteTakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Note Task"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>
                Note Taker
                <a href="https://github.com/rramosx11/Text-Editor">
                  <VscGithubAlt />
                </a>
              </h4>
              <p>
                An express application that provides the user the ability to add
                new notes, and to delete notes.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://rramosx11.github.io/Weather-Dashboard/">
                {" "}
                <img
                  src={weatherDashboardImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather Dashboard"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>
                Weather Dashboard
                <a href="https://github.com/rramosx11/Weather-Dashboard">
                  <VscGithubAlt />
                </a>
              </h4>
              <p>
                A website that allows the user see the weather outlook for
                multiple cities. The user can enter a city and see a 5-Day
                Forecast. The user can see the temperature, humidity levels,
                wind speed as well as the UV index.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
