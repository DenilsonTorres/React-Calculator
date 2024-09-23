import React, { useState } from "react";
import Display from "./components/Display/DIsplay";
import Keypad from "./components/Keypad/Keypad";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleAdd = (value) => {
    setInput(input + value);
  };

  const handleEqual = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Erro");
    }
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };
  return (
    <div className="calculator">
      <Display input={input} result={result} />

      <Keypad
        handleClick={handleClick}
        handleEqual={handleEqual}
        handleClear={handleClear}
        handleAdd={handleAdd}
      />
    </div>
  );
}

export default App;
