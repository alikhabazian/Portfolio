import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./DonateCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import secret from "../../Assets/Projects/SecretAdolf.PNG";
import bilit from "../../Assets/Projects/BilitiBot.PNG";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import DonateCards from "./DonateCards";

// bitcoin bc1qpp5vz7c7thx0g9rc5v36s7cq642zfwkkux687r
// etherum 0x1FbdFC3C41c65C8d2E578f0c0fFa52D0eDbcBA3F
// litcoin ltc1qppsfr3r0zd98k0ed53nzn69ak76rvkmr5m379y
// doge DKzjDgrb39SDfXW7dAh41GMEy95AeGFh8U
function Donate() {
  const bitcoin ="bc1qpp5vz7c7thx0g9rc5v36s7cq642zfwkkux687r";
  const eth = "0x1FbdFC3C41c65C8d2E578f0c0fFa52D0eDbcBA3F";
  
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Welcome to My Personal  <strong className="purple">Donate Page </strong>!
        </h1>
        <h5 style={{ color: "white" }}>
          I appreciate your interest in supporting my endeavors. Your generosity empowers me to pursue my goals and passions.<br/>
          Your contribution, regardless of its size, is a meaningful investment in my journey.
        </h5>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <DonateCards
              imgPath={"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+bitcoin}
              isBlog={false}
              title="Bitcoin"
              description="
It's nearly improbable for individuals to send it to me as a donation but It is first coin has been invented."
              walletAddress="bc1qpp5vz7c7thx0g9rc5v36s7cq642zfwkkux687r"
                // ghLink="https://github.com/alikhabazian/SecretHitler-Flutter"
              // demoLink="https://secretadolf.ir"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+eth}
              isBlog={false}
              title="Ethereum USDC"
              description="It's Ethereum USDC"
              walletAddress={eth}
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://hamibash.com/assets/img/logo.svg"}
              isBlog={false}
              title="Hami bash"
              description="It's iranian page to donate rial coin :)"
              demoLink="https://hamibash.com/secrethitler"
              walletAddress={"https://hamibash.com/secrethitler"}
            
              
            />
          </Col>

          {/*<Col md={4} className="project-card">*/}
          {/*  <ProjectCard*/}
          {/*    imgPath={editor}*/}
          {/*    isBlog={false}*/}
          {/*    title="Editor.io"*/}
          {/*    description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"*/}
          {/*    ghLink="https://github.com/soumyajit4419/Editor.io"*/}
          {/*    demoLink="https://editor.soumya-jit.tech/"              */}
          {/*  />*/}
          {/*</Col>*/}

          {/*<Col md={4} className="project-card">*/}
          {/*  <ProjectCard*/}
          {/*    imgPath={leaf}*/}
          {/*    isBlog={false}*/}
          {/*    title="Plant AI"*/}
          {/*    description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."*/}
          {/*    ghLink="https://github.com/soumyajit4419/Plant_AI"*/}
          {/*    demoLink="https://plant49-ai.herokuapp.com/"*/}
          {/*  />*/}
          {/*</Col>*/}

          {/*<Col md={4} className="project-card">*/}
          {/*  <ProjectCard*/}
          {/*    imgPath={suicide}*/}
          {/*    isBlog={false}*/}
          {/*    title="Ai For Social Good"*/}
          {/*    description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."*/}
          {/*    ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"*/}
          {/*    // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here*/}
          {/*  />*/}
          {/*</Col>*/}

          {/*<Col md={4} className="project-card">*/}
          {/*  <ProjectCard*/}
          {/*    imgPath={emotion}*/}
          {/*    isBlog={false}*/}
          {/*    title="Face Recognition and Emotion Detection"*/}
          {/*    description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.*/}
          {/*    Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."*/}
          {/*    ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"*/}
          {/*    // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here */}
          {/*  />*/}
          {/*</Col>*/}
        </Row>
      </Container>
    </Container>
  );
}

export default Donate;
