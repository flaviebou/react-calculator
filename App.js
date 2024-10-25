import React from "react";
import './App.css';
import { useState, useEffect } from 'react'

function App() {
const [result, setResult]= useState(0);
const [input,setInput] = useState("");

function one(){
    setInput((input)=>input+"1")
}

function two(){
  setInput((input)=>input+"2")
}

function three(){
  setInput((input)=>input+"3")
}

function four(){
  setInput((input)=>input+"4")
}

function five(){
  setInput((input)=>input+"5")
}
function six(){
  setInput((input)=>input+"6")
}

function seven(){
  setInput((input)=>input+"7")
}

function eight(){
  setInput((input)=>input+"8")
}

function nine(){
  setInput((input)=>input+"9")
}

function zero(){
  setInput((input)=>input+"0")
}

function add(){
  setResult((result)=>result + Number(input));
  setInput("")
}

function minus(){
  setResult((result)=>result-Number(input));
  setInput("")
}

function times(){
  setResult((result)=>Number(input)*result);
  setInput("")
}

function divided(){
  setResult((result)=>result / Number(input));
  setInput("")
}

function clear(){
  setInput("")
}

function reset(){
  setInput("");
  setResult(0)
}
  return (
    <div className="App">
      <h1>Very simple calculator</h1>
      <p className="Result" style={{border:"1px solid black"}}> {result}</p>
      <p className="Input" style={{border:"1px solid black"}}>{input}</p>
      <div className="numbers">
        <button id="1" className="Number" onClick={one}>1</button>
        <button id="2" className="Number" onClick={two}>2</button>
        <button id="3" className="Number" onClick={three}>3</button>
        <button id="4" className="Number" onClick={four}>4</button>
        <button id="5" className="Number" onClick={five}>5</button>
        <button id="6" className="Number" onClick={six}>6</button>
        <button id="7"className="Number" onClick={seven}>7</button>
        <button id="8" className="Number" onClick={eight}>8</button>
        <button id="9" className="Number" onClick={nine}>9</button>
        <button id="0" className="Number" onClick={zero}>0</button>
      </div>
      <div className="operations">
        <button id="plus" className="Operations" onClick={add}>Add</button>
        <button id="minus" className="Operations" onClick={minus}>Minus</button>
        <button id="times" className="Operations" onClick={times}>Multiply</button>
        <button id="divided" className="Operations"onClick={divided}>Divide</button>
        <button id="clear" className="Operations" onClick={clear}>Clear</button>
        <button id="reset" className="Operations" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
