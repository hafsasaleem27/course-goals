import React from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
    const formSubmitHandler = (event) => {
        event.preventDefault();
        
    };

    const goalInputChangeHandler = () => {

    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className='form-control'>
                <label>Course Goal</label>
                <input type='text' onChange={goalInputChangeHandler} />
            </div>
        </form>
    );
};

export default CourseInput;