import React from 'react';

export default function QuizCard({ index, quizDetails, nextQuestion, evalAnswer, optionRef }) {
  return (
    <div className="quiz-card">
      <div className="question">
        <span className="quiz-question">{quizDetails[index]?.clues[0]}</span>
      </div>
      <div className="options">
        <form>
          {quizDetails[index]?.options.map((option, i) => (
            <div className="option-container" key={option}>
              <input
                type="radio"
                id={option}
                name="quiz"
                value={option}
                // ref={()=>{optionRef.current[i]}}
                onChange={(e) => evalAnswer(index, quizDetails[index]?.name, e.target.value)}
              />
              <label htmlFor={option}>
                {`(${String.fromCharCode(65 + i)}) ${option}`}
              </label>
            </div>
          ))}
        </form>
      </div>
      <button className="next-button" onClick={() => nextQuestion(index, quizDetails)}>
        Next &gt;
      </button>
    </div>
  );
}



// import React from 'react'

// export default function QuizCard({index, quizDetails, nextQuestion, evalAnswer}) {
//   return (
//     <div className="quiz-card">
//         <div className="question"> 
//              <span className='quiz-question'>{quizDetails[index]?.clues[0]}</span>
//         </div>
//         <div className="options">
//             <form action="">
//                 <div className="option-container">
//                     <input 
//                         type="radio" 
//                         id={quizDetails[index]?.options[0]} 
//                         name="quiz" 
//                         value={quizDetails[index]?.options[0]}
//                     />

//                     <label htmlFor={quizDetails[index]?.options[0]}
//                     onClick={(e) => {evalAnswer(index, quizDetails[index]?.name, e.target.htmlFor)}}>
//                         {'(A) '+ quizDetails[index]?.options[0]}
//                     </label>
//                 </div>

//                 <div className="option-container">
//                     <input 
//                         type="radio" 
//                         id={quizDetails[index]?.options[1]} 
//                         name="quiz" 
//                         value={quizDetails[index]?.options[1]} 
//                     />

//                     <label htmlFor={quizDetails[index]?.options[1]} 
//                         onClick={(e) => {evalAnswer(index, quizDetails[index]?.name, e.target.htmlFor)}}>
//                         {'(B) '+ quizDetails[index]?.options[1]}
//                     </label>
//                 </div>

//                 <div className="option-container">
//                     <input 
//                         type="radio" 
//                         id={quizDetails[index]?.options[2]} 
//                         name="quiz" 
//                         value={quizDetails[index]?.options[2]} 
//                     />

//                     <label htmlFor={quizDetails[index]?.options[2]} 
//                         onClick={(e) => {evalAnswer(index, quizDetails[index]?.name, e.target.htmlFor)}}>
//                         {'(C) '+ quizDetails[index]?.options[2]}
//                     </label>
//                 </div>

//                 <div className="option-container">
//                     <input 
//                         type="radio" 
//                         id={quizDetails[index]?.options[3]} 
//                         name="quiz" 
//                         value={quizDetails[index]?.options[3]} 
//                     />

//                     <label htmlFor={quizDetails[index]?.options[3]}
//                         onClick={(e) => {evalAnswer(index, quizDetails[index]?.name, e.target.htmlFor)}}>
//                         {'(D) '+ quizDetails[index]?.options[3]}
//                     </label>
//                 </div>
//             </form>
//         </div>
//         <button className='next-button' onClick={(e) => {nextQuestion(index, quizDetails)}}>
//               Next &gt;
//             </button>
//         </div>
//   )
// }
