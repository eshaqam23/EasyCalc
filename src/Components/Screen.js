import React, { useState } from 'react';

function Screen (props) {
    if(props.isOperator && props.isInput2) {
        return (
            <div className="screen">
                <p>{props.input2}</p>
            </div>
        );
    }
    else if (props.isOperator) {
        return (
            <div className="screen">
                <p>{props.input1}</p>
            </div>
        );
    }
    return (
        <div className="screen">
            <p>{props.input1}</p>
        </div>
    );
    
}

export default Screen;