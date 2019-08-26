import React, {useState} from 'react';

const UpDownVote: React.FC<{count?:number;}> = (props) => {
  const [count, setCount] = useState(props.count || 0);
  return (
    <div className="up_down_vote">
      <div className="up_down_vote__arrows">
        <span className="up_down_vote_arrows__up" onClick={()=> setCount(count + 1)}>UP</span>
        <span className="up_down_vote_arrows__down" onClick={()=> setCount(count - 1 >= 0? count - 1: 0)}>DOWN</span>
      </div>
      <span className="up_down_vote__score">{count}</span>
    </div>
  );
}

export default UpDownVote;