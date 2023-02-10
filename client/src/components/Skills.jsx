import "./Skills.css";
import {
  FaReact,
  FaBootstrap,
  FaGithub,
  FaPython,
  FaNodeJs,
  FaCss3Alt,
} from "react-icons/fa";
import { SiMysql, SiMongodb, SiJavascript } from "react-icons/si";

function Skills() {
  return (
    <div className="skills-container container-fluid">
      <h1>Skills</h1>
      <div className="skills">
        <p>
          <FaReact />
        </p>
        <p>
          <FaBootstrap />
        </p>
        <p>
          <FaGithub />
        </p>
        <p>
          <SiMysql />
        </p>
        <p>
          <SiMongodb />
        </p>
        <p>
          <SiJavascript />
        </p>
        <p>
          <FaPython />
        </p>
        <p>
          <FaNodeJs />
        </p>
        <p>
          <FaCss3Alt />
        </p>
      </div>
    </div>
  );
}

export default Skills;
