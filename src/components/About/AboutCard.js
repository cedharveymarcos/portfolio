import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaGamepad, FaCoffee, FaSeedling } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ced Harvey Marcos </span>
            from <span className="purple"> Cavite City, Philippines.</span>
            <br />
            I am currently working as a <span className="purple">freelancer on Upwork</span>, specializing in backend development and AWS cloud solutions.
            <br />
            I completed my <span className="purple">Bachelor of Science (BS) in Computer Science</span> at{" "}
            <span className="purple">Saint Gregory College of Science and Technology</span> from 2013-2017.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games <FaGamepad /> 
            </li>
            <li className="about-activity">
              <ImPointRight /> Drinking Coffee <FaCoffee />
            </li>
            <li className="about-activity">
              <ImPointRight /> Growing Plants <FaSeedling />
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building robust solutions, one line of code at a time!"{" "}
          </p>
          <footer className="blockquote-footer">Ced Harvey Marcos</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
