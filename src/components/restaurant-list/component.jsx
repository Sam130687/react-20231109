import { Restaurant } from "../restaurant/component"

export const RestaurantList = ({restaurants}) => {
    return (
        <div>
            {restaurants.map((restaurant) =>
                <Restaurant restaurant = {restaurant} />
            )}
        </div>
    )
}