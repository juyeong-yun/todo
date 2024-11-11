import React from 'react';

const Advice = ({advice}) => {
    return(
        //  한국어 명언 api 를 사용하여 새로고침마다 명언을 새로 불러옴
        <div className='advice'>
            {advice && <span>{advice.message}</span>}
        </div>
    );
}

export default Advice;