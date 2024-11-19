import React from 'react';
import { Advice } from '../types/Advice';

// advice의 구조를 정의하는 타입
interface AdviceProps {
    advice: Advice|null;
}

const GetOneAdvice:React.FC<AdviceProps> = ({advice}) => {
    if (!advice){
        return(
            <div className='advice'>
                <span></span>
            </div>
        );
    }
    return(
        <div className='advice'>
            <span>{advice.message}</span>
        </div>
    );
};

export default GetOneAdvice;