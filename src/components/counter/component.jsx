import { useEffect, useState } from "react"

export const Counter = ({count=0, step=1, onCounterClick, min=0, max=5}) => {
    const [amount, setAmount] = useState(count);

    useEffect(()=>{onCounterClick(amount)}, [amount]);

    return (
        <div>
            <button onClick={
                () => setAmount(amount > min ? amount - step : 0 )
            }>-</button>
            <span>{count}</span>
            <button onClick={
                () => setAmount(amount < max ? amount + step : 5 )
            }>+</button>
        </div>
    )
}