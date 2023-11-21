import { Counter } from "../counter/component";
import { useState } from 'react';

export const Dish = ({dish}) => {
    if (!dish) {
        return null;
    }

    const [count, setCounter] = useState(0);

    return (
        <div>
            <div>{dish.name}</div>
            <Counter count={count} onCounterClick={setCounter}/>
        </div>)
}