// TodoInput.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const TodoInput = ({addNewToDo, newToDo, setNewToDo}) =>{
    const hadelSubmit = (e) => {
        e.preventDefault(); 
        addNewToDo();
    };

    const handleChange = (e) => {
        setNewToDo(e.target.value);
    };

    return(
        <form onSubmit = {hadelSubmit} >
            <input type='text' 
                value={newToDo || ''} 
                onChange={handleChange} 
                placeholder='해야만 하는 일을 적어주세요!' /> 
            <button type='submit'><FontAwesomeIcon icon={faPaperPlane} /></button>
        </form>
    );
};

export default TodoInput;