import { useState } from 'react'
import './App.css'
import { questionList } from './services/questionData'
import QuestionTemplate from './questionTemplate'





function App() {

  const [score, setScore] = useState(0)
  const [currentQuiz, setCurrentQuiz] = useState(1)
  const [quizList, setQuizList] = useState(questionList)
  const quiz = quizList.filter((quiz => quiz.quesNum === currentQuiz))


  const clickQuiz = (isCorrect: boolean) => {

    if (isCorrect) {
      setScore(score + 1)
    }

    setCurrentQuiz(currentQuiz + 1)
    console.log(score);

  }

  return (
    <>
      <div className='h-screen bg-slate-600 flex justify-center items-center'>
        <div className='bg-gray-800 text-white rounded-xl'>
          {
            currentQuiz < 4 ?
              quiz.map(({ answer, choice, quesNum, title }) => (
                <QuestionTemplate
                  answer={answer}
                  choice={choice}
                  quesNum={quesNum}
                  title={title}
                  choiceHandler={clickQuiz}
                />
              )) :
              <h1 className='text-2xl p-10'>your score is {score}</h1>
          }
        </div>
      </div>
    </>
  )
}

export default App
