import React, {useState, useEffect} from 'react';

import './App.css'
import './reset.css'

import checkmark from './images/checkmark.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faL, faPaperPlane, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import { kadvice } from 'kadvice';

function App() {
  const [todos, setTodos] = useState([]);
  const [newToDo, setNewToDo] = useState('');
  const [checkedItems, setCheckedItems] = useState(Array(todos.length).fill(false));
  const [clears, setClears] = useState([]);
  const [advice, setAdvice] = useState('');

  const getAdvice = async() => {
    try{
      const response = await kadvice.getOne();
      setAdvice(response);
      // console.log(response);
    } catch(error) {
      console.error("Error fetching advice:", error);
    }
  };

  useEffect(() => {
    getAdvice();

    // todos 목록이 변경될 때마다 체크 상태 초기화
    setCheckedItems(Array(todos.length).fill(false));
    /**
     * Array(todos.length) : todos 의 길이만큼 새 배열을 생성
     * .fill(false) : 배열의 모든 요소를 false 로 채워 체크박스의 상태를 false 로 만드는 것
     */
  }, [todos]);

  const addToDo = () => {
    if(todos.length >= 7) {
      alert("리스트는 최대 7개까지만 가능합니다.");
      setNewToDo("");
      return;
    }
    
    if(newToDo.trim()){
      // 앞에 배열에 전부 들어갈 수 있도록 처리
      setTodos([...todos, newToDo]);
      setNewToDo("");
    }
  };

  const deleteToDo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const moveClear = (index) => {
    const item = todos[index];
    // 목록에 추가 후 삭제
    setClears([...clears, item]);
    setTodos(todos.filter((_,i) => i !== index))
  };

  // 체크박스를 클릭하면 해당 항목을 체크 상태로 갱신
  const handleCheckboxChange = (index) => {
    // 체크박스 클릭 시 moveClear 함수 호출하여 항목을 clears로 이동
    moveClear(index);
  };

  return (
    <div className='content'>
      <div className='head'>
        <div className='title'>
          <img src={checkmark} alt='' />
          <h2>To Do List</h2>
        </div>
        <p>오늘 당신의 해야만 하는 일은 무엇인가요?</p>
      </div>

      <div className='write'>
        <form onSubmit = {(e) => { e.preventDefault(); addToDo();}} >
          <input type='text' value={newToDo} onChange={(e) => setNewToDo(e.target.value)} 
          placeholder='해야만 하는 일을 적어주세요!' /> 
          <button type='submit'><FontAwesomeIcon icon={faPaperPlane} /></button>
        </form>
      </div>
      
      {/* 한국어 명언 api 를 사용하여 새로고침마다 명언을 새로 불러옴 */}
      <div className='advice'>
        {advice && <span>{advice.message}</span>}
      </div>
      
      <div className='list'>
        <div className='todo'>
        <h3>List</h3>
          <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                  {/* checked : 해당 항목의 체크 상태 */}
                  <input type='checkbox' checked={checkedItems[index]}  onClick={() => handleCheckboxChange(index)} />
                  <span>{todo}</span>
                  <button type='submit' onClick={() => deleteToDo(index)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </li>
            ))}
          </ul>
        </div>
        <div className='clear'>
          <h3>Clear</h3>
          <ul>
            {clears.map((clear, index) => (
                <li key={index}>
                  <input type='checkbox' defaultChecked='true' disabled />
                  <span>{clear}</span>
                </li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default App;
