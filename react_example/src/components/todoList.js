// todoList.js
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';

const TodoList = ({todos, clears, checkedItems, handleCheckboxChange, deleteToDo }) => {
    return(
        <div className='list'>
            <div className='todo'>
                <h3>List</h3>
                <ul>
                {/* todos가 배열임을 보장해야한다. */}
                {Array.isArray(todos) && todos.length > 0 && (
                    todos.map((todo, index) => (
                    <li key={index}>
                        {/* checked : 해당 항목의 체크 상태 */}
                        <input type='checkbox' checked={checkedItems[index]}  onClick={() => handleCheckboxChange(todo.id)} />
                        <span>{todo.todo}</span>
                        <button type='submit' onClick={() => deleteToDo(todo.id)}>
                        <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                    </li>
                    )))}
                </ul>
            </div>
            <div className='clear'>
                <h3>Clear</h3>
                <ul>
                {clears.map((clear, index) => (
                    <li key={index}>
                        <input type='checkbox' defaultChecked='true' disabled />
                        <span>{clear.todo}</span>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;