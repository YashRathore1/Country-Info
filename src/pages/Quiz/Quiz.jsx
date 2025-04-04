import './Quiz.css'
import { useRef, useState } from 'react';
import useFetchAPI from '../../Custom Hooks/useFetchAPI';
import QuizCard from '../../Components/QuizCard/QuizCard';

export default function Quiz() {
  const {data: quizDetails, isLoading} = useFetchAPI('/db.json'); 
  const [score, setScore] = useState(0);
  const [ind, setInd] = useState(0);
  const [trackAnswer, setTrackAnswer] = useState([])

  const evalAnswer = (index, name, value, nextQuestion) => {
    const newData = {
      key: index + 1,
      answer: name,
      userSelection: value
    }

    if(!trackAnswer?.find(item => item.key === (index + 1))){
      setTrackAnswer((prevdata) => ([...prevdata, newData]))
    } else if(trackAnswer?.find(item => item.key === (index + 1))){
      const updatedAnswers = trackAnswer.map(item =>
        item.key === newData.key
          ? { ...item, userSelection: value }
          : item
      );
      setTrackAnswer(updatedAnswers);
    }
  }

  const nextQuestion = (ind, quizDetails)=>{
    if(ind < (quizDetails.length - 1)){
      setInd(ind + 1)
    }else if(ind === (quizDetails.length - 1)){
      setInd(quizDetails.length - 1)
    }
  }

  const calcScore = ()=> {
    let marks = 0;
    trackAnswer.forEach((item)=> {
      if(item.answer == item.userSelection){
        marks = marks + 1
      }
    })
    setScore(marks)
  }

  const resetQuiz = () => {
    setTrackAnswer([])
    setScore(0)
    setInd(0)
  }
  return (
    <div className="quiz-page">
      <div className="heading-container">
        <h1 className='heading'>Play the Quiz to test your knowledge!</h1>
      </div>
      <div className="quiz-container">
        <QuizCard index={ind} quizDetails={quizDetails} nextQuestion={nextQuestion} evalAnswer={evalAnswer} />
        <div className="submit-reset-buttons">
          <button type="submit" className='submit-quiz' onClick={(e) => calcScore()}> SUBMIT </button>
          <button type="reset" className='reset-quiz' onClick={(e) => {resetQuiz()}}> RESET </button>
        </div>

        <div className="score">
          User Score: {score}
        </div>
      </div>
    </div>
  )
}


