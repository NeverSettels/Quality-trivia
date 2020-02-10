import { Quiz } from "../src/quiz";


describe('Quiz', () => {
	test('should instantiate empty quiz object', () => {
    let compare = {
      questions: [],
      score: 0,
      answers: [],
      timer: 30000
    }
		let quiz  =new Quiz();
		expect(quiz).toEqual( compare );
  });
});

//global
let quiz = new Quiz();
  quiz.answers = ["Michael Keaton", "George Clooney", "Val Kilmer"]

  quiz.questions = [
    {
      correct_answer: "Michael Keaton",
      incorrect_answers: [
        "George Clooney",
        "Val Kilmer",
        "Adam West"
      ]
    }, 
    {
      correct_answer: "John John",
      incorrect_answers: [
        "George Clooney",
        "Val Kilmer",
        "Adam West"
      ]
    }, 
    {
      correct_answer: "Billy Bill",
      incorrect_answers: [
        "George Clooney",
        "Val Kilmer",
        "Adam West"
      ]
    }
  ];

describe('setScore', () => {
  

  test('should update score by 1', () => {
    quiz.setScore();
    expect(quiz.score).toEqual(1);
  });


  describe('shuffleAnswers', () => {
    quiz.shuffleAnswers();
    test('should check the length of quiz.questions[0].shuffled.length is 4', () => {
      expect(quiz.questions[0].shuffled.length).toEqual(4);
    });
  });

});

