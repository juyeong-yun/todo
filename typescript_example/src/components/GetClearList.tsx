import React from "react";

interface ClearTodoProps {
    clears :{ todo: string }[];
}

const ClearTodoList: React.FC<ClearTodoProps> = ({clears}) => {
    return(
        <li>
            <input type='checkbox' defaultChecked={true} disabled />
            <span>{clear}</span>
        </li>
    );
};

export default ClearTodoList;