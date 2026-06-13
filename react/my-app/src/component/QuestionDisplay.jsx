import { Container, Row, Col, Alert, Badge } from "react-bootstrap";

function QuestionDisplay({ question }) {
    return (
        <Container className="mt-4">

            {/* 🔥 Answers summary top bar */}
            <Row className="mb-3">
                <Col>
                    <Alert variant="info" className="d-flex justify-content-between align-items-center mb-0">
                        <div>
                            💬 This question has{" "}
                            <strong>{question.answers.length}</strong> answers
                        </div>

                        <Badge bg="primary">
                            User #{question.userId}
                        </Badge>
                    </Alert>
                </Col>
            </Row>

            {/* Question text */}
            <Row>
                <Col>
                    <h4 className="fw-bold">
                        {question.text}
                    </h4>
                </Col>
            </Row>

        </Container>
    );
}

export default QuestionDisplay;