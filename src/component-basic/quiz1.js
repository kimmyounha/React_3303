// useState 함수 불러오기
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const root = ReactDOM.createRoot(document.getElementById("root"))

function Calculator (props){
    const {num1,num2, op} = props
    let result;
    if (op === "+") {
        result = num1 + num2;
    }else{
        result = num1 - num2;
    }

    return(<div>{num1} {op} {num2} = {result}</div>)

}

root.render(
    <div><Calculator num1={1} num2={2} op="+" />
    <Calculator num1={1} num2={2} op="-" /></div>
)