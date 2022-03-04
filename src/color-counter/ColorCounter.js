import { useEffect, useRef, useState } from "react";
import "./colorCounter.css";
import randomColor from "randomcolor";

export default function ColorCounter() {
    const [count, setCount] = useState(0);
    const [countColor, setCountColor] = useState("");
    const counterRangeRef = useRef();

    useEffect(() => {
        setCountColor(randomColor);
        counterRangeRef.current.focus();
    }, [count]); //Missing dependency array would cause an infinite loop, empty array would run the effect only on first render

    return (
        <div className="color-counter-container">
            <div className="color-counter-count" style={{color: countColor}}>{count}</div>
            <div className="color-counter-buttons">
                <button onClick={() => setCount(prevCount => --prevCount)}>-</button>
                <button onClick={() => setCount(prevCount => ++prevCount)}>+</button>
            </div>
            <input ref={counterRangeRef} type="range" onChange={e => setCount(e.target.value)} value={count}/>
        </div>
    )
}