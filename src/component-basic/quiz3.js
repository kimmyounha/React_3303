// useState 함수 불러오기
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const root = ReactDOM.createRoot(document.getElementById("root"))

function DatePrinter({year,month,day}){
    return(
        <div>
            <h2>{year}/{month}/{day}</h2>
        </div>
    )
}

function Rectangle(props){
    //스타일을 적용하여 사각 박스(div)를 그려주는 컴포넌트 작성
    // 100px x 100px 사이즈의 빨간색 사각 박스가 그려짐
    const mystyle = {
        backgroundColor: props.color,
        width: props.width,
        height: props.height
    };

    return(
        <div style={mystyle}>사각형</div>
    )

}

function Weather(props){
    // -∞ ~ 0 : 추움 (파란색)
    // 1 ~ 5 : 쌀쌀 (파란색)
    // 6 ~ 26 : 보통
    // 27 ~ ∞ : 더움 (주황색)
    let temperature ="";
    let color = "blue"

    if (props.temperature <= 0){
        temperature = "추움";
    }else if (props.temperature <= 5){
        temperature = "쌀쌀";
    }else if (props.temperature <= 26){
        temperature = "보통";
        color = "yellow";
    }else{
        temperature = "더움";
        color = "orange";
    }
    return(
        <div style={{background: color}}>{props.city} {temperature}</div>
    )
}

function Repeater(props){
    let arr = [];
    for(let i = 0; i < props.repeat; i++){
        arr.push(props.text);
    }
    return (
        <ul>
            {arr.map(text => <li>{text}</li>)}
        </ul>
    )
    /*
    for(let i = 0; i < props.repeat; i++){
        arr.push(<li>{props.text}</li>);
    }
    return (
        <ul>
            {arr}
        </ul>
    )*/
}

function ColorList(props){
// 빨, 노, 파가 배경색인 div가 출력되도록 코드 작성
// (div는 반드시 사이즈가 있어야 표시되므로 width 100px, height 100px로 설정)
// (당연히 배열의 색상이나 사이즈가 바뀔 수 있음)
    let arr = [];
    for (let i = 0; i < props.colors.length; i++) {
        arr.push(props.colors[i]);
    }
    return(
        <div>
            {arr.map(item => <div style={{width: 100, height: 100, backgroundColor: item}}></div>)}
        </div>
    )
}

root.render(
    <div>
        <DatePrinter year="2024" month="3" day="29"/>
        <Rectangle width="100px" height="100px" color="#FF0000"/>
        <Weather city="Seoul" temperature={26}/>
        <Repeater text="Hello" repeat={5} />
        <ColorList colors={["#FF0000", "#00FF00", "#0000FF", "#0000FF"]} />
    </div>
)
