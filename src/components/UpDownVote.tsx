import React, {useState, useEffect} from 'react';

const UpDownVote: React.FC<{score?:number;}> = (props) => {
  const [vote, setVote] = useState(0);
  const score = props.score ? props.score: 0;
  useEffect(() => {

  });
  return (
    <div className="up_down_vote">
      <div className="up_down_vote__arrows">
        <p className={`up_down_vote__arrows__up ${vote === 1? 'active': ''} `} onClick={()=> setVote(1)}>
          <svg version="1.1" x="0px" y="0px" viewBox="0 0 292.362 292.362" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M282.082,195.285L149.028,62.24c-1.901-1.903-4.088-2.856-6.562-2.856s-4.665,0.953-6.567,2.856L2.856,195.285
                C0.95,197.191,0,199.378,0,201.853c0,2.474,0.953,4.664,2.856,6.566l14.272,14.271c1.903,1.903,4.093,2.854,6.567,2.854
                c2.474,0,4.664-0.951,6.567-2.854l112.204-112.202l112.208,112.209c1.902,1.903,4.093,2.848,6.563,2.848
                c2.478,0,4.668-0.951,6.57-2.848l14.274-14.277c1.902-1.902,2.847-4.093,2.847-6.566
                C284.929,199.378,283.984,197.188,282.082,195.285z"/>
            </g>
          </svg>
        </p>
        <p className={`up_down_vote__arrows__down ${vote === -1? 'active': ''} `} onClick={()=> setVote(-1)}>
          <svg version="1.1" x="0px" y="0px" viewBox="0 0 284.929 284.929" xmlns="http://www.w3.org/2000/svg">
            <g>
            <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
              L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
              c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
              c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"/>
            </g>
          </svg>
        </p>
      </div>
      <span className="up_down_vote__score">{score + vote >= 0? score + vote: 0}</span>
    </div>
  );
}

export default UpDownVote;
