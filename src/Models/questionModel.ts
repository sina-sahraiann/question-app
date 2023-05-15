interface singleChoice {
  number: number;
  desc: string;
}

export default interface questionModel {
  quesNum: number;
  title: string;
  choice: singleChoice[];
  answer: number;
}
