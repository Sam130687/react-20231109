import { Restaurant } from "../restaurant/component"

export const Restaurants = ({restaurant}) => {
    return (
        <div>
            <Restaurant
                restaurant = {restaurant}
            />
        </div>
    )
}