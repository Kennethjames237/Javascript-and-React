import { useState, useEffect } from 'react';
import { Table, Button, Container, Row, Col } from 'react-bootstrap';

function AddScore({ onIncrease }) {
    return (
        <Button variant="success" onClick={onIncrease}>
            ⬆️
        </Button>
    );
}

function DeleteAnswer({onDelete}) {
    return (
        <>
            <Button variant="danger" onClick = {onDelete}>
                🗑️
            </Button>
        </>
    )
}

function ModifyAnswer() {
    return (
        <>
            <Button>
                ✍️
            </Button>
        </>
    )
}

function Actions({ onIncrease, onDelete }) {
    return (
        <Row>
            <Col>
                <AddScore onIncrease={onIncrease} />
            </Col>
            <Col>
                <DeleteAnswer onDelete={onDelete}/>
            </Col>
            <Col>
                <ModifyAnswer />
            </Col>


        </Row>
    );
}

function DisplayTableHeader() {
    return (
        <thead>
            <tr>
                <th>User Id</th>
                <th>Text</th>
                <th>Date</th>
                <th>Score</th>
                <th>Action</th>
            </tr>
        </thead>
    );
}

function AnswersDisplay({ question }) {
    const [scores, setScores] = useState(
        question.answers.map((ans) => ans.score)
    );
    const [answers, setAnswers] = useState(question.answers);

    const increaseScore = (index) => {
        setScores((currentScores) => {
            return currentScores.map((score, idx) => {
                if (idx === index) {
                    return score + 1;
                } else {
                    return score;
                }
            });
        });
    };

    const deleteAnswer = (index) => {
        setAnswers(prev =>
            prev.filter((_, idx) => idx !== index)
        );
        
        
};

   
   
    useEffect(() => {
  console.log("Score changed:", answers);
}, [answers]);

   

    return (
        <>
            <h4 className="mb-3">Answers</h4>

            <Table striped bordered hover variant="dark">
                <DisplayTableHeader />

                <tbody>
                    {question.answers.map((ans, index) => (
                        <tr key={index}>
                            <td>{ans.userId}</td>
                            <td>{ans.text}</td>
                            <td>{ans.date.format('YYYY-MM-DD')}</td>
                            <td>{scores[index]}</td>
                            <td>
                                <Actions onIncrease={() => increaseScore(index)} onDelete={() => deleteAnswer(index)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default AnswersDisplay;