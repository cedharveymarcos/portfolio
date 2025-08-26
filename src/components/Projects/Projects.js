import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import medihyg from "../../Assets/Projects/medihyg.png";
import recognition from "../../Assets/Projects/recognition.jpg";
import interview from "../../Assets/Projects/interview.png";
import banking from "../../Assets/Projects/banking.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medihyg}
              title="MediHyg Cloud"
              description="Created a comprehensive IoT cloud platform using AWS IoT Core, AWS Lambda function, and Timestream DB. Collects sensor data from multiple devices, processes real-time streams, and provides analytics dashboard with QuickSight integration."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={interview}
              title="AI Interview Assistant"
              description="Built an AI interview assistant using D-ID, OpenAI, and AWS Transcribe. Leveraged AWS serverless services including Lambda, DynamoDB, and S3 for scalable backend infrastructure."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recognition}
              title="Serverless Image Recognition Engine"
              description="Built an image processing system using AWS Step Functions and Lambda. Automatically extracts metadata, detects objects, generates thumbnails, and stores results in DynamoDB. Enables smart image analysis and content discovery."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={banking}
              title="Mobile Banking App"
              description="Worked on a seamless whitelabeled banking backend project using AWS serverless architecture. Built backend services with Lambda, DynamoDB, and API Gateway, integrating third-party financial services including Stripe for secure payment processing and real-time transaction management."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
