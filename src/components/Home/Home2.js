import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar2.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I have a deep passion for programming and enjoy the challenge of solving puzzles and games.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python, C++, and Dart. </b>
              </i>
              <br />
              <br />
              {/*My fascination lies in the design of Flutter apps, as they seamlessly blend frontend and backend elements.*/}
              My fascination lies in the design of &nbsp;
              <i>
                <b className="purple">Flutter apps </b>
                , as they seamlessly blend frontend and backend elements {" "}<br /><br />
                Additionally, I am venturing into the exciting world of {" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              {/*<br />*/}
              {/*<br />*/}
              {/*Whenever possible, I also apply my passion for developing products*/}
              {/*with <b className="purple">Node.js</b> and*/}
              {/*<i>*/}
              {/*  <b className="purple">*/}
              {/*    {" "}*/}
              {/*    Modern Javascript Library and Frameworks*/}
              {/*  </b>*/}
              {/*</i>*/}
              {/*&nbsp; like*/}
              {/*<i>*/}
              {/*  <b className="purple"> React.js and Next.js</b>*/}
              {/*</i>*/}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/alikhabazian"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/*<li className="social-icons">*/}
              {/*  <a*/}
              {/*    href="https://twitter.com/Soumyajit4419"*/}
              {/*    target="_blank"*/}
              {/*    rel="noreferrer"*/}
              {/*    className="icon-colour  home-social-icons"*/}
              {/*  >*/}
              {/*    <AiOutlineTwitter />*/}
              {/*  </a>*/}
              {/*</li>*/}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ali-khabazian/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/alikhabazian1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
