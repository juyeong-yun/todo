import React, {useState, useEffect} from 'react';
import { Advice } from './types/Advice';
import { Todo } from './types/ToDo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane, faTrashCan} from '@fortawesome/free-solid-svg-icons';

import checkmark from './public/checkmark.png';
import './App.css';
import './reset.css';

function App() {
  const [checkedItems, setCheckedItems] = useState([]);
  const [todos, setTodos] = useState([]);
  const [newToDo, setNewTodo] = useState('');
  const [clears, setClears] = useState([]);
  const [advice, setAdvice] = useState('');

  return (
    // jsx
      <div className="content">
        <div className='head'>
          <div className='title'>
            <img src='/checkmark.png' alt='' />
            <h2>To Do List</h2>
          </div>
          <p>오늘 당신의 해야만 하는 일은 무엇인가요?</p>
        </div>
        {/*  
        <div className='write'>
          <form onSubmit = {hadelSubmit} >
              <input type='text' maxLength='20'
                  value={newToDo || ''} 
                  onChange={handleChange} 
                  placeholder='해야만 하는 일을 적어주세요!' /> 
              <button type='submit'><FontAwesomeIcon icon={faPaperPlane} /></button>
          </form>
        </div>
      </div>

      <div className='advice'>
        {advice && <span>{advice.message}</span>}
      </div>

      <div className='list'>
        <div className='todo'>
            <h3>List</h3>
            <ul>
            {Array.isArray(todos) && todos?.length > 0 && (
                todos.map((todo, index) => (
                <li key={index}>
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
      */}
  );
}

export default App;
