import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))


function TodoApp(props){
    const [todos, setTodos ] = useState([
        { completed: false, text: "리액트 공부하기"},
        { completed: true, text: "스트링 공부하기"},
    ])

    const handleTodoAdd = todo => setTodos(todos => todos.concat(todo))

    return <div>
        <ul>
            {
                todos.map((todo) => {
                    return <li>{todo.text}</li>
                })
            }
        </ul>
        <TodoAdder handleTodoAdd={handleTodoAdd}/>
        
    </div>

}

function TodoAdder({handleTodoAdd}){
        const [ input, setInput] = useState("")
        const handleOnChange = (e) => setInput(e.target.value)

        return <div>
        <input type="text" value={input} onChange={handleOnChange}/>
        <button onClick={() => handleTodoAdd({completed: false, text: input}) }>추가</button>
    </div>
}

//화면에 TodoApp 표시되게 컴포넌트 정의
root.render(<TodoApp/>)