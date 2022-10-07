import React from "react";
import '../styles/Keypoad.css'
import Button from "./Button";
import { DisplayContext } from "../contexts/DisplayContext";
import * as math from "mathjs";
import { useContext } from "react";
import Display from "./Display";

function Keypoad() {
  const { setResult, calc, setCalc } =useContext(DisplayContext);
  const addToCalc = (val) => {
    setCalc((calc) => [...calc, val]);
  };

  const calculateResult = () => {
    const input = calc.join("");
    setResult(math.evaluate(input));
  };

  const resetInput = () => {
    setCalc("");
    setResult("");
  };
  const deleteToCalc = () => setCalc(calc.slice(0,-1))

  return (
    <div className="show-btn">
        <Display  />
      <div className="row">
        <Button symbol="AC" onClick={resetInput} bg="goldenrod"/>
        <Button symbol="C" onClick={deleteToCalc} bg="goldenrod" />
        <Button symbol="%" onClick={addToCalc} bg="goldenrod"/>
        <Button symbol="/" onClick={addToCalc} bg="goldenrod"/>
      </div>
      <div className="row">
        <Button symbol="7" onClick={addToCalc} />
        <Button symbol="8" onClick={addToCalc} />
        <Button symbol="9" onClick={addToCalc} />
        <Button symbol="*" onClick={addToCalc} bg="goldenrod"/>
      </div>
      <div className="row">
        <Button symbol="4" onClick={addToCalc} />
        <Button symbol="5" onClick={addToCalc} />
        <Button symbol="6" onClick={addToCalc} />
        <Button symbol="-" onClick={addToCalc} bg="goldenrod"/>
      </div>
      <div className="row">
        <Button symbol="1" onClick={addToCalc} />
        <Button symbol="2" onClick={addToCalc} />
        <Button symbol="3" onClick={addToCalc} />
        <Button symbol="+" onClick={addToCalc} bg="goldenrod"/>
      </div>
      <div className="endeRow">
        <Button symbol="0" onClick={addToCalc} />
        <Button symbol="." onClick={addToCalc} />
        <Button symbol="=" onClick={calculateResult} bg="goldenrod"/>
      </div>
    </div>
  );
}

export default Keypoad;
