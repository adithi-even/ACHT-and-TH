import React, { useState } from 'react';
import './index.css';

const questions = [
  {
    question: "What is the capital of France?",
    options: [
      { text: "Paris", score: 40 },
      { text: "London", score: 20 },
      { text: "Berlin", score: 30 },
      { text: "Madrid", score: 40 }
    ]
  },
  {
    question: "What is the capital of France?",
    options: [
      { text: "Paris", score: 30 },
      { text: "London", score: 90 },
      { text: "Berlin", score: 30 },
      { text: "Madrid", score: 80 }
    ]
  },
  {
    question: "What is the capital of France?",
    options: [
      { text: "Paris", score: 50 },
      { text: "London", score: 20 },
      { text: "Berlin", score: 30 },
      { text: "Madrid", score: 40 }
    ]
  },
  {
    question: "What is the capital of France?",
    options: [
      { text: "Paris", score: 50 },
      { text: "London", score: 20 },
      { text: "Berlin", score: 30 },
      { text: "Madrid", score: 40 }
    ]
  },
  {
    question: "What is the capital of France?",
    options: [
      { text: "Paris", score: 70 },
      { text: "London", score: 20 },
      { text: "Berlin", score: 30 },
      { text: "Madrid", score: 40 }
    ]
  }
];

const Assessment = () => {
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));///  //initial value of the selected answer is set to null for each question
  const [totalScore, setTotalScore] = useState(0);///
  const [resultMessage, setResultMessage] = useState('');///

  console.log(selectedAnswers,"5555");
  console.log(resultMessage,"666");
  console.log(totalScore,"7777");


  
  const handleOptionChange = (questionIndex, score) => {   //The function is responsible for updating the selected answer for a specific question and recalculating the total score.
    const newSelectedAnswers = [...selectedAnswers];  //... is a spread operator which creates the copy of the array "selectedAnswer"  , and spread operator ensures that we dont mutate the original array, which is important for state management 
    newSelectedAnswers[questionIndex] = score;  //we are storing the score of the option the user selected  of the respected question inside newSelectedAnswers // After Selection // If a user selects an answer for the first question, "selectedAnswers" might update to:// [selectedScore, null, null] // e.g., [10, null, null]
    // This means the user selected the first question with a score of 10, while the other two remain unanswered.
    console.log(newSelectedAnswers,"newSelectedAnswersnewSelectedAnswers");
    
    setSelectedAnswers(newSelectedAnswers); //we are telling React to update the selectedAnswers state with the new array newSelectedAnswers //calculateTotalScore is a function
    calculateTotalScore(newSelectedAnswers);
  };
  
  const calculateTotalScore = (answers) => {  
    //total score calculation , total 150/200 3 correct correct answer
    const score = answers.reduce((acc, answer) => acc + (answer || 0), 0);  //0 after the comma is  the initial value for the accumulator
    setTotalScore(score);
    const totalres= getResultMessage(score)
    setResultMessage(totalres);

  };
  
  const getResultMessage = (score) => {
    if (score >= 0 && score <= 100) {
      return 'Good';
    } else if (score > 100 && score <= 200) {
      return 'Very Good';
    } else if (score > 200 && score <= 300) {
      return 'Excellent';
    } else {
      return 'Please select the Answers and TRy Again';
    }
  };

  const handleSubmit = () => {
   
    alert(`Total Score: ${totalScore}`);
  };
  
  return (
    <div className='bg-gray-200 flex flex-col items-center'>
      <h1 className="bg-white p-3.5 text-blue-600 text-4xl font-medium w-full text-center">MCQ Assessment</h1>

      {questions.map((subquestion, index) => (
        // console.log(subquestion,"que" , index),//subquestion is "what is the capital of france?" and index is the index of question in questions i.e., length is 5 there a re 5 questions


        <div className='mt-6 text-gray-800 font-semibold max-w-5xl w-11/12 m-4 p-4 rounded-xl border-2 border-blue-700 shadow-gray-600 shadow-md' key={index}>
          
          <h3 className='text-xl font-bold text-black'>{subquestion.question}</h3>
          {subquestion.options.map((option, idx) => (
            // console.log(subquestion.question,"ss"),

            <div key={idx}>
              <label className='mt-px inline-block ps-[0.15rem] hover:cursor-pointer'>
                <input
                  className='mr-2'
                  type="radio"
                  name={`subquestion${index}`}
                  // onChange={(e) => setName(e.target.value)}
                  onChange={() => handleOptionChange(index, option.score)}
                  checked={selectedAnswers[index] === option.score}
                />
                {option.text}
              </label>
            </div>
          ))}
        </div>
      ))}


      <h2 className="bg-white p-3.5 text-blue-600 text-4xl font-medium w-full text-center">Total Score: {totalScore}</h2>
      <h3 className="text-xl font-bold text-black mb-4">{resultMessage}</h3>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>Submit</button> 
    </div>
  );
};

export default Assessment;