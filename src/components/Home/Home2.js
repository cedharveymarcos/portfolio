import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";

function Home2() {
  useEffect(() => {
    // Load Credly embed script
    const script = document.createElement('script');
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a results-driven <span className="purple">Backend Engineer</span> with expertise in designing and building robust, scalable, and high-performance systems.
              <br />
              <br />
              With a solid foundation in <i><b className="purple">Python and Node.js</b></i>, and hands-on experience with <i><b className="purple">FastAPI, Flask, Django, Express.js, and NestJS</b></i>, I create clean, maintainable, and efficient solutions that power modern applications.
              <br />
              <br />
              I specialize in leveraging <i><b className="purple">AWS cloud services</b></i> to build secure, cloud-ready, and scalable architectures tailored to business needs. I hold <i><b className="purple">AWS Security Champion, AWS Serverless, and Amazon Aurora PostgreSQL</b></i> certifications.
              <br />
              <br />
              My expertise includes building <i><b className="purple">RESTful APIs, microservices, and cloud-native architectures</b></i> with seamless AWS integrations including Lambda, EC2, S3, RDS, and DynamoDB.
            </p>
          </Col>
          <Col md={4} className="certificates-section">
            <div 
              data-iframe-width="150" 
              data-iframe-height="270" 
              data-share-badge-id="308bc22b-672b-4927-b3cf-040423aac6a1" 
              data-share-badge-host="https://www.credly.com"
            />
            
            <div 
              data-iframe-width="150" 
              data-iframe-height="270" 
              data-share-badge-id="60ef8858-936e-4b21-9dda-e70e6f2d5ed7" 
              data-share-badge-host="https://www.credly.com"
            />
            <div 
            data-iframe-width="150"
             data-iframe-height="270" 
             data-share-badge-id="c549d640-79c6-45e7-9652-b370684f2f47" 
             data-share-badge-host="https://www.credly.com"
             />
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
                  href="https://github.com/cedharveymarcos"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
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
