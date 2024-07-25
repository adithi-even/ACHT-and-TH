import { useState } from 'react'
import Radio from '@mui/material/Radio';


// import './App.css'

const main_questions = [
  {
    question:"1. I have nothing to show for myself?",
    answers :[
      {select:"disagree"},
      {select:"neutral"},
      {select:"agree"}
    ]
  }
]



function Assessment_02() {

  return (
    <>     
    <div className='bg-gray-200 flex flex-col items-center'>
      <h1 className='bg-white p-3.5 text-blue-600 text-4xl font-medium w-full text-center'>MCQ ASSESSMENT</h1>
      <div className='mt-6 text-gray-800 font-semibold max-w-5xl w-11/12 m-4 p-4 rounded-xl border-2 border-blue-700 shadow-gray-600 shadow-md'>
      <h3 className='text-xl font-bold text-black'>1. I have nothing to show for myself.</h3>
      <div>
        <Radio
          // checked={selectedValue === 'a'}
          // onChange={handleChange}
          value="agree"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'A' }}
        />
        <Radio
          // checked={selectedValue === 'b'}
          // onChange={handleChange}
          value="neutral"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'B' }}
        />
        <Radio
          // checked={selectedValue === 'b'}
          // onChange={handleChange}
          value="disagree"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'B' }}
        />
    </div>
      

      </div>

    </div>
    </>
  )
}

export default Assessment_02;

