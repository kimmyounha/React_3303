import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

const ComponentWithProps = function(props) {
    console.log(props)
    return <p>{JSON.stringify(props)}</p>
}

function Greeting(props){
    // const name = props.name
    // return <h1>Hello, {name}</h1>
    return <h1>Hello, {props.name}</h1>
}


root.render(<div>
    <Greeting name="John"/>
    <ComponentWithProps value="Hello" />
    <ComponentWithProps value={1} />
    <ComponentWithProps value={{ a: 1, b: "React" }} />
    <ComponentWithProps value={() => { }} />
</div>)