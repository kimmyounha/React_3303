import ReactDOM from 'react-dom'
const root = ReactDOM.createRoot(document.getElementById("root"))

//1.
const element = <h1>Hello, world!!</h1>
const element1 = <p>Hello, world22</p>

//2. 
let num = 100
let s = 'string'

const element2 = <h1>2. {num} {s}</h1>

//3.
let myNumber = 3
function isEven(num) { return num % 2 === 0 }

//4. 
const users = [
    { name: "John", isKorean: false },
    { name: "철수", isKorean: true },
    { name: "영희", isKorean: true },
    { name: "Sally", isKorean: false }
    ]

const userList = (
    <ul>
        {
            users.map(item => {
                return <li>{(item.isKorean? "안녕하세요." : "Welcome.") + item.name}</li>
            })
        }
    </ul>
)

function MyHeader(){
    const mystyle = {
        color: "yellow",
        fontSize: "20px"
    }
    return(
        <div>
            <p style={mystyle}>Hello!</p>
        </div>
    )
}

root.render(<div>
    {element}
    {element1}
    {element2}
    {
        isEven(myNumber) && <h3>짝수는 사용할 수 없습니다.</h3>
    }
    {
        isEven(myNumber) ? <h1>짝수입니다.</h1> : <h1>홀수입니다.</h1>
    }
    {userList}
    <MyHeader/>
</div>)