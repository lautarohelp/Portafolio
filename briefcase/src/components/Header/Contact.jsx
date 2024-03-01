import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareGitlab } from "react-icons/fa6";
import "./Contact.css"

export function Contact() {
  return (
    <>
    <ul className="Contact-header">
        <a href="https://github.com/lautarohelp"><FaGithub /></a>
        <a href="www.linkedin.com/in/lautaro-toledo-0a929929a"><FaLinkedin /></a>
        <a href="https://gitlab.com/lautarotoledo391"><FaSquareGitlab /></a>
    </ul>
    </>
  );
}

