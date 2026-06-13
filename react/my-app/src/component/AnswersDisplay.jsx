import { Col, Container, Row, Table } from 'react-bootstrap';
function DisplayTableHeader() {
    return (
        <>

            <thead>
                <tr>
                    <th>User Id</th>
                    <th>Text</th>
                    <th>Date</th>
                    <th>Score</th>
                    <th>Action</th>
                </tr>
            </thead>

        </>
    )
}

function AnswersDisplay({ question }) {
    return (
        <>
            <Table striped bordered hover variant="dark">
                <DisplayTableHeader />
                <tbody>
                    {question.answers.map((ans, index) => (
                    <tr key={index}>
                        <td>{ans.userId}</td>
                        <td>{ans.text}</td>
                        <td>{ans.date.format("YYYY-MM-DD")}</td>
                        <td>{ans.score}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default AnswersDisplay;