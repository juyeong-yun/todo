import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';

interface AddTodoProps {
    newTodo : string;
    handleChange : (e : React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit : (e: React.FormEvent<HTMLFormElement>) => void;
}

const AddNewTodo : React.FC<AddTodoProps> = ({newTodo, handleChange, handleSubmit}) => {
    return(
        <div className='write'>
            <form onSubmit = {handleSubmit} >
                <input
                    type='text' value={newTodo || ''} 
                    onChange={handleChange} 
                    placeholder='해야만 하는 일을 적어주세요!'
                    maxLength={20}/> 
                <button type='submit'><FontAwesomeIcon icon={faPaperPlane} /></button>
            </form>
        </div>
    );
};

export default AddNewTodo;