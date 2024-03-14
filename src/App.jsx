
import { useState } from 'react';
import './App.css'
import Contents from './components/Contents/Contents'
import SelectedCourse from './components/SelectedCourse/SelectedCourse'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [sCourses, setSCourses] = useState([]);
  const [CreditHours, setCreditHours] = useState(0);
  const handleSelect = (course) => {
    const totalCredit = CreditHours + course.credit;
    if (!sCourses.includes(course) && totalCredit <= 15) {
      setSCourses([...sCourses, course]);
      setCreditHours(totalCredit);
      toast.success("Successfully Added !");

    }
    else {
      if (sCourses.includes(course)) {
        toast.warn('Already selected')
      } else {
        toast.warn('Only 15 credit allowed!');

      }
    }
  };
  console.log(CreditHours);
  return (
    <div className='max-w-[1320px] lg:pt-12 mx-auto p-5 lg:p-0'>

      <h1 className='text-center text-[32px] mb-8 font-bold'>Course Registration</h1>
      <div className='flex flex-col lg:flex-row gap-6'>
        <Contents handleSelect={handleSelect}></Contents>
        <SelectedCourse sCourses={sCourses} CreditHours={CreditHours}></SelectedCourse>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
