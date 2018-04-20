 // question page//
// const quizContainer = document.getElementById('quiz');
// const resultsContainer = document.getElementById('results');
// const submitButton = document.getElementById('submit');

// function buildQuiz(){}
 // let q1 = document.querySelector('p.question1');
 // q1.innerHTML = document.write(questions[0].question);

function getQuestions(){


  let question = [
    {
      question : 'Who is left?',
      answers   : [
        'Mike',
        'Rodney',
        'Sam',
      ],
      correct_answer : '1'
    },
    {
      question : 'Who is right?',
      answers   : [
        'Bob',
        'Mark',
        'Saul'
      ],
      correct_answer : '0'
    }
  ];

  return question;

}

// function scoreQuiz(quiz_questions,answers){
//     for (variable of answers) {
//       if(correct){
//         total_correct ++1;
//       }
//     }
//   }



let questions = getQuestions();
//create html
let question_counter = 1;
for (q of questions) {
   $('form').append('<p>'+ q.question +' </p>');


  for (answer of q.answers) {
      $('form').append('<input type="radio" name="question_'+ question_counter +'" value="2">' + answer + '  ');
   }

   // for i = 1;
   // function question_counter(){
   //   return i++;

 }

   // question_counter++;


//  let questions = getQuestions();
// //create html
// let question_counter = 1;
// for (q of questions) {
//
//
//     $('form').append('<p>'+ q.question  +' </p>');
//
//
//     for (answer of q.answers) {
//        $('form').append('<input type="radio" name="question_'+ question_counter +'" value="2">' + answer + '  ');
//     }
//
//
//     question_counter++;
// }
//
// $('form').submit(function(answer)){
//   answer event.preventDefault();
//   get.answers = $( this ).serializeArray;
//   for (users_answer of answers){
//     ('the user answered: ');
//     console.log (answer.value);
//   }
// }
