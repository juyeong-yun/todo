// src/service/dbService.js

export const getTodos = async() => {
    const res = await fetch ('http://localhost:4000/api/todos/getList', {
        method:'GET',
        headers: {'Content-Type': 'application/json'},
    });

    return res.json();
};

export const addTodo = async(newToDo, date)=> {
    const res = await fetch('http://localhost:4000/api/todos/add', {
        method : 'POST',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify({
            todo: newToDo,
            date: date,
        }),
    });

    if (!res.ok){
        throw new Error('Failed to fetch todo data');
    }

    return res.json();
};

export const updateClear = async(id)=> {
    console.log('dbService: ', id);
    const res = await fetch(`http://localhost:4000/api/clear/toClear/${id}`, {
        method : 'PUT',
        headers : {'Content-Type': 'application/json'},
    });

    if (!res.ok){
        throw new Error('Failed to change todo clear');
    }

    return res.json();
};