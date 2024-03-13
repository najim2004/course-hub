
import PropTypes from 'prop-types';

const SelectedCourse = ({sCourses}) => {
    
    return (
        <div className='bg-white w-[312px] min-h-[400px] p-6 rounded-[12px]'>
            <h1 className='text-[#2F80ED] text-lg font-bold text-center'>Credit Hour Remaining 7 hr</h1>
            <hr className='my-4 w-full border-t-[1px] border-[rgba(28,27,27,0.20)]' />
            <h3 className='text-xl font-bold'>Course Name</h3>
            <div className='text-[rgba(28,27,27,0.60)] max-w-[242px]'>
            {
                sCourses.map((sCourse, idx)=><h3 key={idx}>{idx+1} {sCourse.name}</h3>)
            }
            </div>
            <hr className='my-4 w-full border-t-[1px] border-[rgba(28,27,27,0.20)]' />
            <p className='text-[rgba(28,27,27,0.60)] font-medium'>Total Credit Hour : 13</p>
            <hr className='my-4 w-full border-t-[1px] border-[rgba(28,27,27,0.20)]' />
            <p className='text-[rgba(28,27,27,0.60)] font-semibold'>Total Price : 48000 USD</p>
        </div>
    );
};

SelectedCourse.propTypes = {
    sCourses: PropTypes.array.isRequired
};

export default SelectedCourse;