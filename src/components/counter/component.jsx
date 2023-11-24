import { useEffect, useState } from "react"

export const Counter = ({count=0, step=1, onCounterClick, min=0, max=5}) => {
    const [amount, setAmount] = useState(count);

    useEffect(()=>{onCounterClick(amount)}, [amount]);

    return (
        <div>
            <button onClick={
                () => setAmount(count > min ? count - step : 0 )
            }>-</button>
            <span>{count}</span>
            <button onClick={
                () => setAmount(count < max ? count + step : 5 )
            }>+</button>
        </div>
    )
}