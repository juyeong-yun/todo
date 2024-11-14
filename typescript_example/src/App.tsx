import React, {useState} from 'react';

import './App.css';
import './reset.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane, faTrashCan} from '@fortawesome/free-solid-svg-icons';

import checkmark from './images/checkmark.png';

function App() {
  return (
    <div className="content">
      <div className='head'>
        <div className='title'>
          <img src={checkmark} alt='' />
          <h2>To Do List</h2>
        </div>
        <p>오늘 당신의 해야만 하는 일은 무엇인가요?</p>
      </div>

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
          {/* todos가 배열임을 보장해야한다. */}
          {Array.isArray(todos) && todos?.length > 0 && (
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
}

export default App;
