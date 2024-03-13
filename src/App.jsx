
import { useState } from 'react';
import './App.css'
import Contents from './components/Contents/Contents'
import SelectedCourse from './components/SelectedCourse/SelectedCourse'

function App() {
  const [sCourses, setSCourses]=useState([]);
  const handleSelect=(course) =>{
    if(!sCourses.includes(course)){
     setSCourses([...sCourses, course]);
    }
    else{
      alert('Already selected')
    }
  };
  console.log(sCourses);
  return (
    <div className='max-w-[1320px] pt-12 mx-auto'>
      
      <h1 className='text-center text-[32px] font-bold'>Course Registration</h1>
      <div className='flex gap-6'>
        <Contents handleSelect={handleSelect}></Contents>
        <SelectedCourse sCourses={sCourses}></SelectedCourse>
      </div>
    </div>
  )
}

export default App
