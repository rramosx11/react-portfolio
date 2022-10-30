import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <h2>Made by Rodolfo Ramos ©</h2>
      <p>
        <ul>
          <a href="https://github.com/rramosx11">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;
