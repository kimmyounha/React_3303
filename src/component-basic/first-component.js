import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

function Firstcomponent(){
    return <div>First Component</div>
}

function Hellocomponent(){
    return <h1>Hello, world!</h1>
}

root.render(
    <div><Firstcomponent/> <Hellocomponent/></div>
)

