import React from 'react';
import VideoCart from './VideoCart';

const Table: React.FC = (props) => {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div className="table">
            {a.map(() => (<VideoCart />))}
        </div>
    );
}

export default Table;