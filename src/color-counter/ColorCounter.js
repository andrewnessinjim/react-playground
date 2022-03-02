import { useEffect, useState } from "react";
import "./colorCounter.css";
import randomColor from "randomcolor";

export default function ColorCounter() {
    const [count, setCount] = useState(0);
    const [countColor, setCountColor] = useState("");
    
    useEffect(() => {
        const color1 = randomColor();
        const color2 = randomColor();
        //setCountColor(`linear-gradient(${color1},${color2})`);
        setCountColor(color1);
    }, [count]); //Missing dependency array would cause an infinite loop

    return (
        <div className="color-counter-container">
            <div className="color-counter-count" style={{color: countColor}}>{count}</div>
            <div className="color-counter-buttons">
                <button onClick={() => setCount(prevCount => --prevCount)}>-</button>
                <button onClick={() => setCount(prevCount => ++prevCount)}>+</button>
            </div>
        </div>
    )
}