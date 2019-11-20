import React, { useState, useEffect } from 'react';

const UpDownVote: React.FC<{ score?: number; }> = (props) => {
    const [vote, setVote] = useState(0)
    const score = props.score ? props.score : 0
    return (
        <div className="up_down_vote">
            <p className={`up_down_vote__arrows__up ${vote === 1 ? 'active' : ''} `} onClick={() => setVote(1)}>
                <svg viewBox="0 0 448 512">
                    <path d="M272 480h-96c-13.3 0-24-10.7-24-24V256H48.2c-21.4 0-32.1-25.8-17-41L207 39c9.4-9.4 24.6-9.4 34 0l175.8 176c15.1 15.1 4.4 41-17 41H296v200c0 13.3-10.7 24-24 24z">
                    </path>
                </svg>
            </p>
            <span className="up_down_vote__score">{score + vote >= 0 ? score + vote : 0}</span>
            <p className={`up_down_vote__arrows__down ${vote === -1 ? 'active' : ''} `} onClick={() => setVote(-1)}>
                <svg viewBox="0 0 448 512">
                    <path d="M176 32h96c13.3 0 24 10.7 24 24v200h103.8c21.4 0 32.1 25.8 17 41L241 473c-9.4 9.4-24.6 9.4-34 0L31.3 297c-15.1-15.1-4.4-41 17-41H152V56c0-13.3 10.7-24 24-24z">
                    </path>
                </svg>
            </p>
        </div>
    );
}

export default UpDownVote
