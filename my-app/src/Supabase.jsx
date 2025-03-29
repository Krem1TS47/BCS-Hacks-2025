import { useEffect, useState } from "react";
import { fetchQuestions } from './actions/fetchQuestions.js'
import { insertQuestion } from './actions/insertQuestion.js'

function Supabase() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    addQuestion();
    getQuestions();
  }, []);

  async function getQuestions() {
    const data = await fetchQuestions();
    console.log(`fetched data: ${JSON.stringify(data, null, 2)}`);
    setQuestions(data);
  }
  async function addQuestion() {
    const questionData = {
      question: "Where is UBC located?",
      answer_1: "Canada",
      answer_2: "US",
      answer_3: "England",
      answer_4: "Australia",
      correct_index: 0
    };
    const newQuestion = await insertQuestion(questionData);
    console.log(`inserted question: ${JSON.stringify(newQuestion, null, 2)}`);
  }

  return (
    <ul>
      {
        questions.map((question) => (
          <li key={question.id}>
            {question.question}
          </li>
        ))
      }
    </ul>
  );
}

export default Supabase;