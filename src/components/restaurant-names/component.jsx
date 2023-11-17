import { RestaurantName } from "../restaurant-name/component"

export const RestaurantNames = ({restaurants}) => {
    return (
        <div>
            {restaurants.map((restaurant) =>
                <RestaurantName restaurant = {restaurant} />
            )}
        </div>
    )
}