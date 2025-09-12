import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import medihyg from "../../Assets/Projects/medihyg.png";
import recognition from "../../Assets/Projects/recognition.jpg";
import interview from "../../Assets/Projects/interview.png";
import banking from "../../Assets/Projects/banking.png";
import coincodex from "../../Assets/Projects/06.jpg";
import picnic from "../../Assets/Projects/08.jpg";
import wordpress from "../../Assets/Projects/01.jpg";
import restaurant from "../../Assets/Projects/03.jpg";
import sport from "../../Assets/Projects/05.jpg";
import casino from "../../Assets/Projects/09.jpg";
import gameFi from "../../Assets/Projects/10.jpg";
import dapp from "../../Assets/Projects/11.jpg";
import vinci from "../../Assets/Projects/13.jpg";
import openUnited from "../../Assets/Projects/14.jpg";
import nwo from "../../Assets/Projects/nwo.png";

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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coincodex}
              title="Coincodex Expo App"
              description="Our journey began in the realm of ideas, where imagination meets the unmet needs of our target users. In this crucial ideation phase, we focused on conceptualizing an app that would not only solve a specific problem but also offer a delightful experience."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={picnic}
              title="Picnic Ecommerce React Native App"
              description="With a solid concept in hand, we transitioned to designing an app that prioritizes user experience (UX) above all. This phase was characterized by crafting intuitive interfaces and engaging interactions that make using the app not just easy, but also enjoyable."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wordpress}
              title="WordPress Website"
              description="This project provides high-quality and customizable WordPress solutions specifically designed to meet the needs of eLearning and eCommerce businesses, enabling them to create and manage their online platforms effectively."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              title="Restaurant Laravel Website"
              description="A pivotal aspect of our website development was integrating a dynamic menu and a robust online ordering system. We meticulously digitized our menu, highlighting our dishes with high-quality imagery and descriptive text to entice and inform."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sport}
              title="Sports Django Website with AWS"
              description="This foundational stage was about dreaming big and setting ambitious goals, envisioning a digital space that would not only inform and engage but also inspire and connect with users on a deeper level."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={casino}
              title="Casino Website"
              description="This stage was marked by a commitment to clean, efficient code and the integration of dynamic features and functionalities that enhanced user interaction and satisfaction. We prioritized loading speed, cross-browser compatibility, and mobile responsiveness, ensuring a flawless user experience across all devices."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gameFi}
              title="Cyop GameFi Website"
              description="Content is the soul of our website, and we dedicated ourselves to crafting compelling narratives that resonate with our audience. This phase was about more than just writing text; it was about storytelling."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dapp}
              title="Spookeletons DApp"
              description="We meticulously curated content that educates, entertains, and enlightens, bringing our brand's story to life in a way that fosters connections and encourages engagement. Through a combination of written content, visuals, and multimedia, we aimed to create a rich, immersive experience for our users."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vinci}
              title="Vinci Software"
              description="This critical phase ensured that our website not only looked wonderful but also performed exceptionally under various conditions. Feedback from real users was invaluable, guiding final adjustments before the grand unveiling."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={openUnited}
              title="OpenUnited Website"
              description="This website offers a vast array of courses across disciplines, from technology and business to arts and humanities, all designed to empower you with new skills and insights. Whether you're looking to advance your career, explore new interests, or simply expand your knowledge base, our expert-led tutorials and interactive learning tools are here to guide you every step of the way"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nwo}
              title="NWO Meme Token on XRP"
              description="From groundbreaking projects to collaborative endeavors, this portfolio is not just a reflection of my professional journey but an invitation to explore the possibilities of what we can achieve together."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
