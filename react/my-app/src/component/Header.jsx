import { Container, Navbar } from "react-bootstrap";

function Header() {
    return (
        <Navbar bg="primary" variant="dark" className="py-3">
            <Container className="d-flex justify-content-center">
                <Navbar.Brand className="text-center fw-bold fs-4">
                    A simple list of questions and answers
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;