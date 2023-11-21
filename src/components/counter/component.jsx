export const Counter = ({count=0, onCounterClick}) => {
    return (
        <div>
            <button onClick={
                () => onCounterClick(count > 0 ? count - 1 : 0 )
            }>-</button>
            <span>{count}</span>
            <button onClick={
                () => onCounterClick(count < 5 ? count + 1 : 5 )
            }>+</button>
        </div>
    )
}