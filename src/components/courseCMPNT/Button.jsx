import React from 'react';

function Button(props) {
    return (
        <div>
            <button className={`bg-orange-600 ${props.px} text-white py-2 rounded-md ${props.text}  `}>{props.title}</button>
        </div>
    );
}

export default Button;