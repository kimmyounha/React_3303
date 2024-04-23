import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

// 화면에 "TODOapp" 표시되게 컴포런트 정의
function TodoApp(props) {
    const [todos, setTodos] = useState([
        { completed: false, text: "리엑트공부하기" },
        { completed: true, text: "스트링공부하기" },
    ])

    // Q) handleTODOAdd 함수를 정의하고 
    // 새로운 todo객체를 받아서 todos에 추가할 수 있도록 하기
    // (setTodos를 써야 할 거시고 concat도 써야할 것)
    // function handleTodoAdd (todo){return setTodos(todos => todos.concat(todo));}
    // const handleTodoAdd = todo => setTodos(todos => todos.concat(todo)); //이전 것을 받아 concat 한것 
    const handleTodoAdd = todo => setTodos(todos.concat(todo)); //이전 것을 받아 concat 한것 

    // handleTodoRemove 함수를 추가하고, 그함수에는 제거할 위치 (index 정보)를 주면 해당 위치에 있는 할일 객체를 제거 filter써야 되고 , filter((item, index) => ...)
    const handleTodoRemove = i => setTodos(todos.filter((todo, idx) => i !== idx))

    //handleTodoStatusToggle 함수를 만들고 index를 받아서 map을 써서 해당 index에 있는 completed 상태를 토글(true => false, false => true)
    const handleTodoStatusToggle = i => setTodos(todos.map((item, index) => {
        if(i === index){
            item = { ...item, completed: !item.completed}
        }
        return item
    }))

    function TodoAdder({ handleTodoAdd }) {
        const [input, setinput] = useState("")
        const handleonChange = (e) => setinput(e.target.value)

        return <div>
            <input type='text' value={input} onChange={handleonChange} />
            {/* 버튼을 클릭하면 completed가 false인 할 일 이 추가되게 ((text)는 어디서 받지??) */}
            <button onClick={
                () => {
                    if (!(input.trim().length > 0)) {
                        alert("정상적으로 입력 하세요")
                    } else {
                        handleTodoAdd({ completed: false, text: input })
                        setinput("")
                    }
                }
            }>버튼</button>
        </div>
    }

    function TodoItem({todo, index, handleTodoRemove, handleTodoStatusToggle}){
        return <li><span onClick={() => handleTodoStatusToggle(index)} style={todo.completed?{textDecoration:"line-through"} : null }>{todo.text}</span> <button onClick={() => handleTodoRemove(index)}>X</button></li>
    }

    function TodoList({ todos, handleTodoRemove, handleTodoStatusToggle }) {
        return <ul>
            {
                todos.map((todo, index) => {
                    //컴포넌트로 분리
                    // return <li>{todo.text}</li>
                    return <TodoItem todo = {todo} handleTodoRemove={handleTodoRemove} index={index} handleTodoStatusToggle={handleTodoStatusToggle}/>
                })
            }
        </ul>
    }

    return <div>
        {/* <ul>
            {
                todos.map((todo) => {
                    return <li>{todo.text}</li>
                })
            }
        </ul> */}
        <TodoList todos={todos} 
        handleTodoRemove ={handleTodoRemove } handleTodoStatusToggle={handleTodoStatusToggle}/>
        { /* handleTodoAdd컴포넌트 만들기 */}
        <TodoAdder handleTodoAdd={handleTodoAdd} />
    </div>;
}

root.render(<TodoApp />)