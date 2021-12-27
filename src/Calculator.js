import React, { useState } from 'react'
import './Calculator.css'
function Calculator() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];


    const [txt, setText] = useState("");

    const optrnum = (e)=>{
         
        setText(txt+e.target.innerText);
    }

    const calculate = ()=>{
       try{
        let val = eval(txt);
        setText("");
        setText(val);
       }
       catch(e)
       {
           alert("Complete the expression");
       }
    }

    return (
        <div className="outerbox">
            <input type="text" value={txt}/>
            <button onClick={()=>{setText("")}}>Clear</button>
            <div className="innerbox">
                <div className="leftside">
                    {arr.map((num) => {
                        return (
                            <div className="numbers" onClick={optrnum}>{num}</div>
                        )
                    })}
                </div>
                <div className="rightside">
                    <div className="operators" onClick={optrnum}>+</div>
                    <div className="operators" onClick={optrnum}>-</div>
                    <div className="operators" onClick={optrnum}>*</div>
                    <div className="operators" onClick={optrnum}>/</div>
                    <div className="operators" onClick={calculate}>=</div>
                </div>
            </div>
        </div>
    )
}

export default Calculator
