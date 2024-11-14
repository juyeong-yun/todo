import React, {useState, useEffect, FormEvent, ChangeEvent} from 'react';
import { Todo } from './types/Todo';
import { Advice } from './types/Advice';
import { getOneAdvice } from './utils/getAdvice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane, faTrashCan} from '@fortawesome/free-solid-svg-icons';

import './App.scss';
import './reset.css';

function App() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newToDo, setNewTodo] = useState<string>('');
  const [clears, setClears] = useState<Todo[]>([]);
  const [advice, setAdvice] = useState<Advice|undefined>(undefined);

  useEffect(() => {
    const fetchAdvice = async ()=> {
      const oneAdvice = await getOneAdvice();
      setAdvice(oneAdvice);
    } 
    fetchAdvice();

  },[]);
  
  function handleChange(e : ChangeEvent<HTMLInputElement>): void {
    setNewTodo(e.target.value);
  }

  function hadleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    
    if(newToDo.trim()){
      const addNewToDo : Todo = {
        todo : newToDo, date : new Date()
      };

      setTodos([...todos, addNewToDo]);
      setNewTodo('');
    }
  }

  function deleteToDo(index:number): void {
    setTodos(todos.filter((_, i) => i !== index));
  }

  function handleCheckboxChange(index: number): void {
    moveClear(index);
  }
  
  function moveClear(index:number) : void {
    const item = todos[index];

    setClears([...clears, item]);
    setTodos(todos.filter((_,i) => i !== index));

    setCheckedItems(new Array(todos.length).fill(false));
    // fill()은 배열에서만 사용할 수 있다.
  }

  return (
  <div className="content">
    <div className='head'>
      <div className='title'>
        <img src='/checkmark.png' alt='icon' />
        <h2>To Do List</h2>
      </div>
      <p>오늘 당신의 해야만 하는 일은 무엇인가요?</p>
    </div>
        
    <div className='write'>
      <form onSubmit = {hadleSubmit} >
          <input 
              type='text' value={newToDo || ''} 
              onChange={handleChange} 
              placeholder='해야만 하는 일을 적어주세요!'
              maxLength={20}/> 
          <button type='submit'><FontAwesomeIcon icon={faPaperPlane} /></button>
      </form>
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
                  <input type='checkbox' checked={checkedItems[index]}  onClick={() => handleCheckboxChange(index)} />
                  <span>{todo.todo}</span>
                  <button type='submit' onClick={() => deleteToDo(index)}>
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
                  <input type='checkbox' defaultChecked={true} disabled />
                  <span>{clear.todo}</span>
              </li>
          ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
