import React, { useState } from 'react';
// import './index.css';

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

const Assessment_01 = () => {
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [totalScore, setTotalScore] = useState(0);
  const [resultMessage, setResultMessage] = useState('');

  console.log(selectedAnswers,"5555");
  console.log(resultMessage,"666");
  console.log(totalScore,"7777");


  
  const handleOptionChange = (questionIndex, score) => {  
    const newSelectedAnswers = [...selectedAnswers]; 
    console.log(newSelectedAnswers,"newSelectedAnswersnewSelectedAnswers");
    newSelectedAnswers[questionIndex] = score;

    
    setSelectedAnswers(newSelectedAnswers); 
    calculateTotalScore(newSelectedAnswers);
  };
  
  const calculateTotalScore = (answers) => {  
    
    const score = answers.reduce((acc, answer) => acc + (answer || 0), 0);  
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
      return '';
    }
  };

  const handleSubmit = () => {
   
    alert(`Total Score: ${totalScore}`);
  };
  
  return (
    <div style={{backgroundColor:"#edf2f7",display:'flex',flexDirection:'column',alignItems:'center'}} >
      <h1 style={{backgroundColor: '#b6b6b6', padding: '0.875rem', color: '#001dd8', fontSize: '2.25rem',fontWeight: 500,width: '100%',textAlign: 'center'}}>MCQ Assessments</h1>

      

      {questions.map((subquestion, index) => (
        <div style={{marginTop: '1.5rem', color: '#4a5568', fontWeight: 600,maxWidth: '80rem',  width: '91.6667%',  margin: '1rem', padding: '1rem', borderRadius: '0.75rem', border: '2px solid #3b82f6', boxShadow: '0 4px 6px rgba(75, 85, 99, 0.1)',}} key={index}>
          
          <h3 style={{fontSize: '1.25rem', fontWeight: 700, color: '#000000' }}>{subquestion.question}</h3>
          {subquestion.options.map((option, idx) => (
            

            <div key={idx}>
              <label style={{ marginTop: '1px',display: 'inline-block', paddingInlineStart: '0.15rem', cursor: 'pointer'}}>
                <input
                  style={{ marginRight: '0.5rem' }}
                  type="radio"
                  name={`subquestion${index}`}
                  // onChange={(e) => setName(e.target.value)}
                  onChange={() => handleOptionChange(index, option.score)}
                  // checked={selectedAnswers[index] === option.score}
                  selectedAnswers
                />
                {option.text}
              </label>
            </div>
          ))}
        </div>
      ))}


      <h2 style={{backgroundColor: 'white', padding: '0.875rem', color: '#1d4ed8', fontSize: '2.25rem', fontWeight: 500, width: '100%',textAlign: 'center'}}>Total Score: {totalScore}</h2>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'black', marginBottom: '1rem' }}>{resultMessage}</h3>
      <button style={{ backgroundColor: '#3b82f6', color: 'white', fontWeight: 'bold', padding: '0.5rem 1rem', borderRadius: '0.25rem', border: 'none', cursor: 'pointer'}} onClick={handleSubmit}>Submit</button> 
    </div>
  );
};

export default Assessment_01;



// npx webflow devlink publish-library
