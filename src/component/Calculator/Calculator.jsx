
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Calculator.css";
// import { FaRegSquare, FaRegWindowMinimize, FaRegWindowMaximize, FaRegWindowClose } from "react-icons/fa";

function Calculator() {
  const [inputValue, setInputValue] = useState("");
  const [prevInputValue, setPrevInputValue] = useState("");
  const [operation, setOperation] = useState("");

  const handleInput = (event) => {
    setInputValue(inputValue + event.target.value);
  };

  const handleOperation = (event) => {
    setPrevInputValue(inputValue);
    setInputValue("");
    setOperation(event.target.value);
  };

  const handleCalculate = () => {
    let result;
    switch (operation) {
      case "+":
        result = parseFloat(prevInputValue) + parseFloat(inputValue);
        break;
      case "-":
        result = parseFloat(prevInputValue) - parseFloat(inputValue);
        break;
      case "*":
        result = parseFloat(prevInputValue) * parseFloat(inputValue);
        break;
      case "/":
        result = parseFloat(prevInputValue) / parseFloat(inputValue);
        break;
      default:
        return;
    }
    setInputValue(result.toString());
  };

  const handleClear = () => {
    setInputValue("");
    setPrevInputValue("");
    setOperation("");
  };

  return (
    <div>
    <div>
      <h1 className="titlec">Calculator</h1>  
    </div>
    <div className="calculator">
      <div className="window">
        {/* <div className="title">
        </div> */}
        <div className="content">
          <div className="calculator-screen">
            <input type="text" value={inputValue} readOnly />
          </div>
          <div className="calculator-keys">
            <button onClick={handleClear} className="calculator-key key-clear">
              C
            </button>
            <button onClick={handleOperation} value="/" className="calculator-key key-divide">
              ÷
            </button>
            <button onClick={handleInput} value="7" className="calculator-key">
              7
            </button>
            <button onClick={handleInput} value="8" className="calculator-key">
              8
            </button>
            <button onClick={handleInput} value="9" className="calculator-key">
              9
            </button>
            <button onClick={handleOperation} value="*" className="calculator-key key-multiply">
              x
            </button>
            <button onClick={handleInput} value="4" className="calculator-key">
              4
            </button>
            <button onClick={handleInput} value="5" className="calculator-key">
              5
            </button>
            <button onClick={handleInput} value="6" className="calculator-key">
              6
            </button>
            <button onClick={handleOperation} value="-" className="calculator-key key-subtract">
              -
            </button>
            <button onClick={handleInput} value="1" className="calculator-key">
              1
            </button>
            <button onClick={handleInput} value="2" className="calculator-key">
              2
            </button>
            <button onClick={handleInput} value="3" className="calculator-key">
              3
            </button>
            <button onClick={handleOperation} value="+" className="calculator-key key-add">
              +
            </button>
            <button onClick={handleInput} value="0" className="calculator-key key-zero">
              0
            </button>
            <button onClick={handleInput} value="." className="calculator-key">
              .
            </button>
            <button onClick={handleCalculate} className="calculator-key key-equals">
              =
            </button>
          </div>
        </div>
        </div>
      </div>
      </div>
  );
}

export default Calculator;