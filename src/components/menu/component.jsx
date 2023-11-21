import { Dish } from "../dish/component"

export const Menu = ({dishes}) => {
    return (
        <div>
            <h3>Меню</h3>
            {dishes.map((dish) =>
                <Dish dish = {dish} />
            )}
        </div>
    )
}