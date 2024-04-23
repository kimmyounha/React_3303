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
    

}


root.render(
    <div>
        <DatePrinter year="2024" month="3" day="29"/>
        <Rectangle width="100px" height="100px" color="#FF0000"/>
        <Weather city="Seoul" temperature={26}/>
    </div>
)
