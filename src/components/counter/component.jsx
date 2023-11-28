import { useEffect, useState } from "react"

export const Counter = ({count=0, step=1, onCounterClick, min=0, max=5}) => {
    return (
        <div>
            <button onClick={
                () => onCounterClick(count > min ? count - step : min )
            }>-</button>
            <span>{count}</span>
            <button onClick={
                () => onCounterClick(count < max ? count + step : max )
            }>+</button>
        </div>
    )
}