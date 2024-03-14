
import PropTypes from 'prop-types';

const SelectedCourse = ({sCourses, CreditHours}) => {
    
    
    return (
        <div className='bg-white min-h-[400px] p-6 rounded-[12px]'>
            <h1 className='text-[#2F80ED] lg:text-lg font-bold text-center'>Credit Hour Remaining {15-CreditHours} hr</h1>
            <hr className='my-4 w-full border-t-[1px] border-[rgba(28,27,27,0.20)]' />
            <h3 className='lg:text-xl text-lg font-bold mb-5'>Course Name</h3>
            <div className='text-[rgba(28,27,27,0.60)] max-w-[242px] flex flex-col gap-2'>
            {
                sCourses.map((sCourse, idx)=><h3 key={idx}>{idx+1} {sCourse.name}</h3>)
            }
            </div>
            <hr className='my-4 w-full border-t-[1px] border-[rgba(28,27,27,0.20)]' />
            <p className='text-[rgba(28,27,27,0.60)] font-medium'>Total Credit Hour : {CreditHours}</p>
            <hr className='my-4 w-full border-t-[1px] border-[rgba(28,27,27,0.20)]' />
            <p className='text-[rgba(28,27,27,0.60)] font-semibold'>Total Price : {
                sCourses.reduce((acc, course) =>{
                    return acc + course.price;
                },0)
            } USD</p>
        </div>
    );
};

SelectedCourse.propTypes = {
    sCourses: PropTypes.array.isRequired,
    CreditHours: PropTypes.number.isRequired
};

export default SelectedCourse;