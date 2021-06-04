import React, {useState} from 'react';

const Check = () => {
    let [i, j] = useState('출석 확인')
    
    return (
        <div>
            <button onClick={() => { j('출석완료') }}>{ i }</button>
        </div>
    );
};

export default Check;