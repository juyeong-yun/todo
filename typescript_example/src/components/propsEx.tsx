// props 이해하기 위한 예제 파일
// 컴포넌츠 파일이름은 무조건 대문자로 시작해야 한다.

import React from "react";

// 타입 정의
interface TodoProps{
    todo : string;
    isCompleted : boolean;
}


// 함수형 컴포넌트 정의
const PropsEx: React.FC<TodoProps> = ({todo, isCompleted}) => {
    return (
        <div>
            <input type="checkbox" checked={isCompleted} readOnly />
            <span>{todo}</span>
        </div>
    );
}

export default PropsEx;