export const Counter = ({count=0, step=1, onCounterClick, min=0, max=5}) => {
    return (
        <div>
            <button onClick={
                () => onCounterClick(count > min ? count - step : 0 )
            }>-</button>
            <span>{count}</span>
            <button onClick={
                () => onCounterClick(count < max ? count + step : 5 )
            }>+</button>
        </div>
    )
}