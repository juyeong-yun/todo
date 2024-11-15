import React from "react";

interface ClearTodoProps {
    clears :{ todo: string }[];
}

const ClearTodoList: React.FC<ClearTodoProps> = ({clears}) => {
    return(
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
    );
};

export default ClearTodoList;