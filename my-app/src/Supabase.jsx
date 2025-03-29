import { useEffect, useState } from "react";
import { fetchQuestions } from './actions/fetchQuestions.js'

function Supabase() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  async function getQuestions() {
    const data = await fetchQuestions();
    console.log(`data: ${JSON.stringify(data, null, 2)}`);
    setQuestions(data);
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