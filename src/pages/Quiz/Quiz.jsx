import './Quiz.css'
import { useRef, useState } from 'react';
import useFetchAPI from '../../hooks/useFetchAPI';
import QuizCard from '../../components/QuizCard';

export default function Quiz() {
  const {data: quizDetails, isLoading} = useFetchAPI('/db.json'); 
  const [score, setScore] = useState(0);
  const [ind, setInd] = useState(0);
  const [trackAnswer, setTrackAnswer] = useState([])
  const optionRef = useRef([]);

  const evalAnswer = (index, name, value) => {
    const data = {
      key: index + 1,
      answer: name,
      userSelection: value
    }

    setTrackAnswer((prevdata) => ([...prevdata, data]))
  }


  const nextQuestion = (ind, quizDetails)=>{
    if(ind < (quizDetails.length - 1)){
      setInd(ind + 1)
    }else if(ind === (quizDetails.length - 1)){
      setInd(quizDetails.length - 1)
    }
  }

  return (
    <div className="quiz-page">
      <div className="heading-container">
        <h1 className='heading'>Play the Quiz to test your knowledge!</h1>
      </div>
      <div className="quiz-container">
        <QuizCard index={ind} quizDetails={quizDetails} nextQuestion={nextQuestion} evalAnswer={evalAnswer} optionRef={optionRef}/>
        <div className="submit-reset-buttons">
          <button type="submit" className='submit-quiz' onClick={(e) => {}}> SUBMIT </button>
          <button type="reset" className='reset-quiz' onClick={(e) => {}}> RESET </button>
        </div>

        {/* <div className="score">
          {score}
        </div> */}
      </div>
    </div>
  )
}


