// useState 함수 불러오기
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

function Counter(props){
    const [ count, setCount ] = useState(0) 

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=> {setCount(count + 1)}}>증가</button>
        </div>
    )
}

root.render(<Counter />)