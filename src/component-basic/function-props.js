import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

const ChildWithFunctionProp = props => <div>{props.children()}</div>

root.render(
    <ChildWithFunctionProp>
        {/* 그려야 할 내용을 반환하는 함수를 children을 통해서 전달 */}
        {() => <div>Function Prop</div>}
    </ChildWithFunctionProp>
)