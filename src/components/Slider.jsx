import React, { useEffect, useState } from "react";

const Slider = () => {
  const [page, setPage] = useState(1);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/questions?page=${page}_&_limit=${1}`)
      .then((res) => res.json())
      .then((res) => {
        setQuestions(res);
      });
  }, [page]);

  return (
    <div data-testid="sliderComponent">
      {questions.map((q) => (
        <div key={q.id}>
          <p>Que : {q.question}</p>
          <p>Ans : {q.answer}</p>
        </div>
      ))}

      <div>
        <button disabled={page === 0} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <button disabled={page === 3} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
