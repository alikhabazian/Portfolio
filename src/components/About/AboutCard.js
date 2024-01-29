import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ali Khabazian </span>
            from <span className="purple"> Isfahan, Iran.</span>
            {/*<br />*/}
            {/*I am currently employed as a software developer at Juspay.*/}
            <br />

            I earned my bachelor's degree in computer engineering from Isfahan University of Technology. Currently, I am pursuing a Master of Science in Artificial Intelligence at Sharif University.
            <br />
            <br />
            {/*Apart from coding, */}
            some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Puzzle Games
            </li>
            {/*<li className="about-activity">*/}
            {/*  <ImPointRight /> Writing Tech Blogs*/}
            {/*</li>*/}
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/*<p style={{ color: "rgb(155 126 172)" }}>*/}
          {/*  "Strive to build things that make a difference!"{" "}*/}
          {/*</p>*/}
          {/*<footer className="blockquote-footer">Soumyajit</footer>*/}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
