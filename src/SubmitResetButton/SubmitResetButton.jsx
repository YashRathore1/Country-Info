import { useContext} from 'react'
import { QuizContext } from '../context/QuizContext'

export default function SubmitResetButton() {
    const quizData= useContext(QuizContext)
  return (
    <>
        <div className="submit-reset-buttons">
            <button type="submit" className='submit-quiz' onClick={(e) => quizData.calcScore()}> SUBMIT </button>
            <button type="reset" className='reset-quiz' onClick={(e) => {quizData.resetQuiz()}}> RESET </button>
        </div>

        <div className="score">
            User Score: {quizData.score}
        </div>
    </>
  )
}
