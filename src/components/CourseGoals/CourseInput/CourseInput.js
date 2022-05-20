import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const  [isValid, setIsValid] = useState(true);
    // const [error, setError] = useState('');

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (enteredValue.trim() === '') {
            setIsValid(false);
            // setError('Cannot add empty goal!');
            return;
        }

        props.onAddGoal(enteredValue);
        setEnteredValue('');
    };

    const goalInputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const focusHandler = (event) => {
        setIsValid(true);
    };

    let error = <p>Cannot add empty goal!</p>;

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`form-control ${isValid ? '' : 'invalid'}`}>
                <label >Course Goal</label>
                <input 
                    type='text' 
                    onChange={goalInputChangeHandler} 
                    onFocus={focusHandler}
                    value={enteredValue}
                    // style={{ borderColor: isValid ? '#8b005d' : 'red',
                    //          backgroundColor: isValid ? '#fad0ec' : 'salmon' 
                    //        }}
                />
                {!isValid && error}
            </div>
            <Button type='submit'>Add Course Goal</Button>
        </form>
    );
};

export default CourseInput;