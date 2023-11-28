import { Counter } from "../counter/component";
import { useState } from 'react';

export const Dish = ({dish}) => {
    const [count, setCounter] = useState(0);

    if (!dish) {
        return null;
    }

    return (
        <div>
            <div>{dish.name}</div>
            <Counter
                count={count}
                step={1}
                onCounterClick={setCounter}
                min={0}
                max={5}/>
        </div>)
}