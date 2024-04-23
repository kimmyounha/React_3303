// useState 함수 불러오기
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const root = ReactDOM.createRoot(document.getElementById("root"))

function SlotMachine ({s1,s2,s3}){
    let congratz = null
    // if (s1 === s2 && s2 === s3) {
    //     congratz = "Congratz!"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    // }
    const highlight = (s1 === "7" && s2 === "7" && s3 === "7")
    return(
        <div>
            <h1>{s1} {s2} {s3}</h1>
            <p style={highlight ? {color: "red"}: null}> {(s1 === s2 && s2 === s3) ? "Congratz!" : null}</p>
        </div>
    )
}

root.render(
    <div><SlotMachine s1="X" s2="Y" s3="Z" />
    <SlotMachine s1="X" s2="X" s3="X" />
    <SlotMachine s1="7" s2="7" s3="7" />
    </div>
)