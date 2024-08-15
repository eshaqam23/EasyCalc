import React, { useState } from 'react';
import Screen from './Screen';

function Buttons () {
    const [ input1, setInput1 ] = useState(0);
    const [ isInput1, setIsInput1 ] = useState(false);

    const [ input2, setInput2 ] = useState(0);
    const [ isInput2, setIsInput2 ] = useState(false);

    const [ operator, setOperator ] = useState("+");
    const [ isOperator, setIsOperator ] = useState(false);

    const [ equal, setEqual ] = useState(0);
    const [ isEqual, setIsEqual ] = useState(false);

    const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const numberDisplay = numList.map(num => {
        return (
            <div className="button" id={"num"+ num}><button onClick={() => {
                if (!isOperator) {
                    setInput1(prev => (prev * 10) + num);
                }
                else {
                    setInput2(prev => (prev * 10) + num);
                    setIsInput2(true);
                }
            }}><p>{num}</p></button></div>
        );
    });

    const operatorList = ["+", "-", "x", "/"];
    const operatorDisplay = operatorList.map((op, index) => {
        return (
            <div className="op" id={"op" + index}><button onClick={e => {
                if (!isOperator) {
                    setOperator(op);
                    setIsOperator(true);
                    setIsInput1(true);
                }
                document.querySelectorAll(".op button p").forEach(e => {
                    e.style.color = "black";
                });
                e.target.style.color = "skyblue";
            }}><p>{op}</p></button></div>
        );
    });

    const equals = "=";
    const equalsDisplay = () => {
        function calculate () {
            let output = 0;
            if(operator === "+") {
                output = input1 + input2;
            }
            else if(operator === "-") {
                output = input1 - input2;
            }
            else if(operator === "x") {
                output = input1 * input2;
            }
            else if(operator === "/") {
                output = input1 / input2;
            }
            return output;
        }
        return (
            <div id="equals"><button onClick={() => {
                if(!isEqual) {
                    setInput1(calculate);
                    setIsInput1(true);
                    setInput2(0);
                    setIsInput2(false);
                    setOperator("+");
                    setIsOperator(false);
                }
                document.querySelectorAll(".op button p").forEach(e => {
                    e.style.color = "black";
                });
            }}><p>Calculate</p></button></div>
        );
    }

    const clear = "AC";
    const clearDisplay = () => {
        return (
            <div id="clear"><button onClick={() => {
                setInput1(0);
                setIsInput1(false);
                setInput2(0);
                setIsInput2(false);
                setOperator("+");
                setIsOperator(false);
                setEqual(0);
                setIsEqual(false);
                document.querySelectorAll(".op button p").forEach(e => {
                    e.style.color = "black";
                });
            }}><p>{clear}</p></button></div>
        );
    }

    return (
        <main>
            <Screen isInput1={isInput1} input1={input1} isInput2={isInput2} input2={input2} isOperator={isOperator} operator={operator} equal={equal} />
            {numberDisplay}
            {operatorDisplay}
            {equalsDisplay()}
            {clearDisplay()}
        </main>
    );
}

export default Buttons;