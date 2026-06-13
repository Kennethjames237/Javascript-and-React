import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Answer, Question } from '../../../Dates.js'
import Footer from './component/Footer.jsx'
import Header from './component/Header.jsx'
import QuestionDisplay from './component/QuestionDisplay.jsx';
import AnswersDisplay from './component/AnswersDisplay.jsx';
import './App.css'

function App() {
  const q1 = new Question("How long is this exercise?", 1, "2026-02-27");
  q1.addAnswer(new Answer("too much by 2", 2, "2026-02-27"));
  q1.addAnswer(new Answer("10 minutes", 3, "2026-02-27"));
  q1.addAnswer(new Answer("10 minutes", 3, "2026-02-27"));
  q1.addAnswer(new Answer("10 minutes", 3, "2026-02-27"));

  const q2 = new Question("What is your level in english?", 2, "2026-02-27");
  q2.addAnswer(new Answer("Good", 2, "2026-02-27"));
  q2.addAnswer(new Answer("bad", 3, "2026-02-27"));
  q2.addAnswer(new Answer("average", 3, "2026-02-27"));


  const [question, setQuestion] = useState(q1);

  return (
    <div className="d-flex flex-column min-vh-100">

      <Header />

      <Container className="flex-grow-1">
     
      <QuestionDisplay question={question} />
      <AnswersDisplay question={question} />

     <Button onClick={() => setQuestion(q1)} variant="info">
        Question 1
      </Button>

      <Button onClick={() => setQuestion(q2)} variant="info">
        Question 2
      </Button>

      </Container>

      <Footer />
    </div>
  )
}

export default App
