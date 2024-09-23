import React from "react";
import Button from "../Button/Button";
import "./Keypad.css";

const Keypad = ({ handleClick, handleEqual, handleClear, handleAdd }) => (
  <div className="Keypad">
    <Button value="1" onClick={handleClick} />
    <Button value="2" onClick={handleClick} />
    <Button value="3" onClick={handleClick} />
    <Button value="4" onClick={handleClick} />
    <Button value="5" onClick={handleClick} />
    <Button value="6" onClick={handleClick} />
    <Button value="7" onClick={handleClick} />
    <Button value="8" onClick={handleClick} />
    <Button value="9" onClick={handleClick} />
    <Button value="0" onClick={handleClick} />
    <Button value="+" onClick={handleAdd} />
    <Button value="*" onClick={handleClick} />
    <Button value="/" onClick={handleClick} />
    <Button value="=" onClick={handleEqual} />
    <Button value="C" onClick={handleClear} />
  </div>
);

export default Keypad;
