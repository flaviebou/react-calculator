import React from "react";
import './App.css';
import { useState, useEffect } from 'react'

function App() {
const [result, setResult]= useState(0);
const [input,setInput] = useState("");


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
function Handleclick(num){
  setInput((input)=>input+num.toString())
}

const list = [1,2,3,4,5,6,7,8,9,0];
const listItems = list.map((number) => {
  return <button id={number} className="Number" onClick={()=>Handleclick(number)}>{number}</button>
}
)

  return (
    <div className="App">
      <h1>Very simple calculator</h1>
      <p className="Result" style={{border:"1px solid black"}}> {result}</p>
      <p className="Input" style={{border:"1px solid black"}}>{input}</p>
      <div className="numbers">
        {listItems}
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
