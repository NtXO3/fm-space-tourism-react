import React from 'react';

const TopBar = ({ index, para }) => {
    return (
        <div className="top__bar">
            <span className="top__bar--index">{index}</span>
            <p className="top__bar--para">{para}</p>
        </div>
    );
}

export default TopBar;
