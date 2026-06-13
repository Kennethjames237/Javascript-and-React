import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row>
          <Col md={4}>
            <h5>My Website</h5>
            <p>
              A simple React application built with React Bootstrap.
            </p>
          </Col>

          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">My Git</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About Me</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: kennyjames237@gmail.com</p>
            <p>Phone: +39 353 461 9036</p>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <div className="text-center">
          © {new Date().getFullYear()} My Website. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;