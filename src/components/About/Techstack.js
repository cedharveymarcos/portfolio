import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiRedis,
  SiFirebase,
  SiPostgresql,
  SiAmazonaws,
  SiPython,
  SiNodedotjs,
  SiAwslambda,
  SiServerless,
  SiDocker,
  SiSupabase,
  SiGit,
  SiAmazondynamodb,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNodedotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiServerless />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAwslambda />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSupabase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazondynamodb />
      </Col>
    </Row>
  );
}

export default Techstack;
