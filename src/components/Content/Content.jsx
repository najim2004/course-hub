
import dollarSign from '../../assets/dollar-sign.svg'
import readIcon from '../../assets/Frame.svg'
import PropTypes from 'prop-types';

const Content = ({course, handleSelect}) => {
    const {name, description, photo, price, credit}=course;
    return (
        <div className='p-4 bg-white rounded-[12px]  flex justify-center items-center'>
            <div className='space-y-4'>
            <div className='lg:w-[280px] lg:h-[144px] rounded-lg bg-gray-300'>
                <img className='w-[280px] h-[144px] rounded-lg' src={photo} alt="" />
            </div>
            <h3 className='max-w-[280px] text-lg font-semibold'>{name}</h3>
            <p className='max-w-[280px] text-[rgba(28,27,27,0.60)] text-[14px]'>{description}</p>
            <div className='flex justify-between'>
                <p className='flex items-center gap-3 font-medium text-[rgba(28,27,27,0.60)]'><img className='size-6' src={dollarSign} alt="" />Price : {price}</p>
                <p className='flex items-center gap-3 font-medium text-[rgba(28,27,27,0.60)]'><img className='size-6' src={readIcon} alt="" />Credit : {credit}hr</p>
            </div>
            <button onClick={()=>handleSelect(course)} className='btn w-full lg:w-[280px] h-10 bg-[#2F80ED] text-lg font-semibold rounded-lg text-white'>Select</button>
            </div>
        </div>
    );
};

Content.propTypes = {
    course: PropTypes.object.isRequired,
    handleSelect: PropTypes.func.isRequired
};

export default Content;