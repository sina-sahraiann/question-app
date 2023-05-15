import questionModel from "../Models/questionModel";

export const questionList: questionModel[] = [
  {
    quesNum : 1,
    title: "first question",
    answer: 2,
   choice: [
    {number: 1, desc: 'apple'},
    {number: 2, desc: 'onion'},
    {number: 3, desc: 'orange'},
    {number: 4, desc: 'strawberry'}
   ]
  },
  {
    quesNum : 2,
    title: "third question",
    answer: 2,
   choice: [
    {number: 1, desc: 'ahmad'},
    {number: 2, desc: 'sina'},
    {number: 3, desc: 'reza'},
    {number: 4, desc: 'mmd'}
   ]
  },
  {
    quesNum : 3,
    title: "fourth question",
    answer: 2,
   choice: [
    {number: 1, desc: 'shiraz'},
    {number: 2, desc: 'tehran'},
    {number: 3, desc: 'ghom'},
    {number: 4, desc: 'tabriz'}
   ]
  },
];
