import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';

interface getTodoProps {
    todos: { todo: string }[];
    checkedItems :boolean[];
    handleCheckboxChange : (index:number) => void;
    deleteTodo : (index:number) => void;
}

const getTodoList : React.FC<getTodoProps> = ({todos, checkedItems, handleCheckboxChange, deleteTodo}) => {
    return(
            <div className='todo'>
                <h3>List</h3>
                <ul>
                {Array.isArray(todos) && todos?.length > 0 && (
                    todos.map((todo, index) => (
                    <li key={index}>
                        <input type='checkbox' checked={checkedItems[index]}  onClick={() => handleCheckboxChange(index)} />
                        <span>{todo.todo}</span>
                        <button type='submit' onClick={() => deleteTodo(index)}>
                        <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                    </li>
                    )))}
                </ul>
            </div>
    );

};

export default getTodoList;