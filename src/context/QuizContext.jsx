import useFetchAPI from "../Custom Hooks/useFetchAPI";
import { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizContextProvider = (props) => {
    
    const [ind, setInd] = useState(0);
    const {data: quizDetails, isLoading} = useFetchAPI('/db.json'); 
    const [trackAnswer, setTrackAnswer] = useState([])
    const [score, setScore] = useState(0);

    const evalAnswer = (index, name, value) => {
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
        console.log(trackAnswer)
      }
    
      const resetQuiz = () => {
        setTrackAnswer([])
        setScore(0)
        setInd(0)
      }

    const { children } = props;
    // console.log(children)
    return (
    <QuizContext.Provider value={{ind, quizDetails, nextQuestion, evalAnswer, score, resetQuiz, calcScore}}>
        { children }
    </QuizContext.Provider>    
    )
}