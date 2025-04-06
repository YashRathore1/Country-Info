import './Quiz.css'
import { useRef, useState } from 'react';
import useFetchAPI from '../../Custom Hooks/useFetchAPI';
import QuizCard from '../quiz-card/QuizCard';
import { QuizContext, QuizContextProvider } from '../../context/QuizContext';
import SubmitResetButton from '../../SubmitResetButton/SubmitResetButton';

// const quizData = userContext()
export default function Quiz() {
  return (
    // <QuizContext.Provider value={{ind, quizDetails, nextQuestion, evalAnswer}}>
    <QuizContextProvider>
      <div className="quiz-page">
        <div className="heading-container">
          <h1 className='heading'>Play the Quiz to test your knowledge!</h1>
        </div>
        <div className="quiz-container">
          <QuizCard />
          <SubmitResetButton />
        </div>
      </div>
    </QuizContextProvider>
  )
}


