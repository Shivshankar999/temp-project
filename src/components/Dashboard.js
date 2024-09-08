import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === ".") {
      const lastChar = expression.slice(-1);
      if (lastChar === "." || /[+\-*/()]/.test(lastChar)) return;
    }
    setExpression((prev) => prev + value);
  };

  const handleClear = () => {
    setExpression("");
    setResult("");
  };

  const handleDelete = () => {
    setExpression((prev) => prev.slice(0, -1));
  };

  const evaluateExpression = () => {
    try {
      // Prevent division by zero
      if (/\/0/.test(expression)) {
        setResult("Error: Invalid input");
        return;
      }

      // eslint-disable-next-line no-eval
      const res = eval(expression);
      setResult(Number.isFinite(res) ? res.toFixed(4) : "Error");
    } catch (error) {
      setResult("Error: Invalid syntax");
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key;

      if (/[0-9]/.test(key)) {
        handleButtonClick(key);
      } else if (key === "+") {
        handleButtonClick("+");
      } else if (key === "-") {
        handleButtonClick("-");
      } else if (key === "*") {
        handleButtonClick("*");
      } else if (key === "/") {
        handleButtonClick("/");
      } else if (key === ".") {
        handleButtonClick(".");
      } else if (key === "(") {
        handleButtonClick("(");
      } else if (key === ")") {
        handleButtonClick(")");
      } else if (key === "Enter") {
        evaluateExpression();
      } else if (key === "Backspace") {
        handleDelete();
      } else if (key === "Escape") {
        handleClear();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [expression]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-300">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4 text-center">Calculator</h3>
        <div className="mb-4">
          <input
            className="border border-black ml-2"
            type="text"
            value={expression}
            readOnly
          />
          <input
            className="border border-black ml-2"
            type="text"
            value={result}
            readOnly
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          <button onClick={handleClear}>C</button>
          <button onClick={handleDelete}>DEL</button>
          <button onClick={() => handleButtonClick("(")}>(</button>
          <button onClick={() => handleButtonClick(")")}>)</button>

          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("/")}>/</button>

          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("*")}>*</button>

          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("-")}>-</button>

          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={() => handleButtonClick(".")}>.</button>
          <button onClick={evaluateExpression}>=</button>
          <button onClick={() => handleButtonClick("+")}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
