import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiDocker } from "react-icons/di";
import {
    SiVisualstudiocode,
    SiPostman,
    SiSlack,
    SiVercel,
    SiMacos, SiAndroidstudio,
    SiLinux,
    SiQt,
    SiMapbox,
    SiDocker,
    SiDjango,
    SiPytorch,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiQt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMapbox />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
      </Col>
    </Row>
  );
}

export default Toolstack;
