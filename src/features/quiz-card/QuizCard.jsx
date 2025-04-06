import { useContext } from "react";
import { QuizContext } from "../../context/QuizContext";

export default function QuizCard() {
  const quizobj = useContext(QuizContext)
  return (
    <div className="quiz-card">
      <div className="question">
        <span className="quiz-question">{quizobj.quizDetails[quizobj.ind]?.clues[0]}</span>
      </div>
      <div className="options">
        <form>
          {quizobj.quizDetails[quizobj.ind]?.options.map((option, i) => (
            <div className="option-container" key={option}>
              <input
                type="radio"
                id={option}
                name="quiz"
                quizobj={option}
                onChange={(e) => quizobj.evalAnswer(quizobj.ind, quizobj.quizDetails[quizobj.ind]?.name, option)}
              />
              <label htmlFor={option} >
                {`(${String.fromCharCode(65 + i)}) ${option}`}
              </label>
            </div>
          ))}
        </form>
      </div>
      <button className="next-button" onClick={() => quizobj.nextQuestion(quizobj.ind, quizobj.quizDetails)}>
        Next &gt;
      </button>
    </div>
  );
}