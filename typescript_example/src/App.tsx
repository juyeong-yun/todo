import React, {useState, useEffect, FormEvent, ChangeEvent} from 'react';
import { Todo } from './types/Todo';
import { Advice } from './types/Advice';
import { getAdvice } from './utils/getAdvice';
import GetOneAdvice  from './components/GetOneAdvice';
import AddNewTodo from './components/AddNewTodo';
import GetTodoList from './components/GetTodoList';
import GetClearList from './components/GetClearList';
// import PropsEx from './components/PropsEx';

import './scss/App.scss';
import './css/reset.css';

function App() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [clears, setClears] = useState<Todo[]>([]);
  const [advice, setAdvice] = useState<Advice|null>(null);

  useEffect(() => {
    const fetchAdvice = () => {
      const adviceData = getAdvice();
      console.log(adviceData);
      setAdvice(adviceData);
    };
    
    fetchAdvice();
  },[]);
  
  function handleChange(e : ChangeEvent<HTMLInputElement>): void {
    setNewTodo(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    
    if(newTodo.trim()){
      const addNewTodo : Todo = {
        todo : newTodo, date : new Date()
      };
      setTodos([...todos, addNewTodo]);
      setNewTodo('');
    }
  }

  function deleteTodo(index:number): void {
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
        
        <AddNewTodo newTodo={newTodo} handleChange={handleChange} handleSubmit={handleSubmit} />
        
        <GetOneAdvice advice={advice} />

        <div className='list'>
          <GetTodoList 
          todos={todos}
          checkedItems= {checkedItems} 
          handleCheckboxChange= {handleCheckboxChange} 
          deleteTodo ={deleteTodo}
          />
          {/* props 이해를 돕기위한 예제 사용  */}
          {/* <PropsEx todo="Learn TypeScript" isCompleted={false} /> */}
          <GetClearList clears={clears} />
      </div>
    </div>
  );
}

export default App;
