import { useContext } from "react";
import { QuizContext } from "../../Pages/Context/QuizContext";

export default function QuizCard() {
  const QuizObj = useContext(QuizContext)
  return (
    <div className="quiz-card">
      <div className="question">
        <span className="quiz-question">{QuizObj.quizDetails[QuizObj.ind]?.clues[0]}</span>
      </div>
      <div className="options">
        <form>
          {QuizObj.quizDetails[QuizObj.ind]?.options.map((option, i) => (
            <div className="option-container" key={option}>
              <input
                type="radio"
                id={option}
                name="quiz"
                QuizObj={option}
                onChange={(e) => QuizObj.evalAnswer(QuizObj.ind, QuizObj.quizDetails[QuizObj.ind]?.name, e.target.QuizObj)}
              />
              <label htmlFor={option} >
                {`(${String.fromCharCode(65 + i)}) ${option}`}
              </label>
            </div>
          ))}
        </form>
      </div>
      <button className="next-button" onClick={() => QuizObj.nextQuestion(QuizObj.ind, QuizObj.quizDetails)}>
        Next &gt;
      </button>
    </div>
  );
}