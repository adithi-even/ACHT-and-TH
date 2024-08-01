import { useState } from 'react'
import Radio from '@mui/material/Radio';
import styles from "./index.css"

// import { FormControlLabel } from '@mui/material/Radio';

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



export default function Assessment_02() {

  const [selectedValue, setSelectedValue] = useState(" ");

  const handleChange =(e) => {
    setSelectedValue(e.target.value);
  }



  return (
    <>     
      <div className='bg-gray-200 flex flex-col items-center'>
        <h1 className='bg-white p-3.5 text-blue-600 text-4xl font-medium w-full text-center'>MCQ ASSESSMENT</h1>
        <div className='mt-6 text-gray-800 font-semibold max-w-5xl w-11/12 m-4 p-4 rounded-xl border-2 border-blue-700 shadow-gray-600 shadow-md'>
        <h3 className='text-xl font-bold text-black'>1. I have nothing to show for myself.</h3>
        <div>
          <Radio
          className='bg-red-500'
            checked={selectedValue === 'agree'}
            onChange={handleChange}
            value="agree"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'Agree' }}
            {...controlProps('c')}
            sx={{
              '& .MuiSvgIcon-root': {
                fontSize: 90,
              },
            }}
          />
          
          <Radio
            checked={selectedValue === 'neutral'}
            onChange={handleChange}
            value="neutral"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'Neutral' }}
          />
          <Radio
            checked={selectedValue === 'disagree'}
            onChange={handleChange}
            name="radio-buttons"
            inputProps={{ 'aria-label': 'Disagree' }}    
          />
  
          
        </div>
        

        </div>

      </div>
    </>
  )
}



// import  as React from 'react';
// import Radio from '@mui/material/Radio';

// export default function SizeRadioButtons() {
//   const [selectedValue, setSelectedValue] = React.useState('a');
//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

//   const controlProps = (item) => ({
//     checked: selectedValue === item,
//     onChange: handleChange,
//     value: item,
//     name: 'size-radio-button-demo',
//     inputProps: { 'aria-label': item },
//   });

//   return (
//     <div>
//       <Radio {...controlProps('a')} size="small" />
//       <Radio {...controlProps('b')} />
//       <Radio
//         {...controlProps('c')}
//         sx={{
//           '& .MuiSvgIcon-root': {
//             fontSize: 28,
//           },
//         }}
//       />
//     </div>
//   );
// }
