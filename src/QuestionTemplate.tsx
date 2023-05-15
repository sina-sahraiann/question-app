import React from 'react'
import questionModel from './Models/questionModel'

interface getAns extends questionModel {
    choiceHandler(isCorrect: boolean): void
}



const QuestionTemplate = ({ answer, choice, quesNum, choiceHandler, title }: getAns) => {

    const clickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        choiceHandler(e.currentTarget.id === answer.toString())
        console.log(e.currentTarget.id === answer.toString());

    }

    return (
        <div className='flex justify-around items-start'>
            <h1 className='px-16 mt-6'>{quesNum + "_" + title}</h1>
            <div className='flex text-white flex-col mx-5'>
                {choice.map(({ number, desc }, index) => (
                    <button className='p-3 text-left rounded-lg hover:-translate-y-1 hover:bg-slate-900 transition-all border-2 border-white mr-4 my-5' id={number.toString()} onClick={clickHandler} key={index + 'choice'}>
                        {number+"_" + desc}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default QuestionTemplate