import PropTypes from 'prop-types';
import Content from '../Content/Content';
import { useState } from 'react';
import { useEffect } from 'react';

const Contents = ({handleSelect}) => {
    const [Courses, setCourses] =useState([]);
    useEffect(() =>{
        fetch('courses.json')
        
            .then(res => res.json())
    
            .then(data => setCourses(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                Courses.map((course, idx) => (
                    <Content key={idx} course={course} handleSelect={handleSelect}></Content>
                ))
            }
        </div>
    );
};

Contents.propTypes = {
    handleSelect: PropTypes.func.isRequired
};

export default Contents;