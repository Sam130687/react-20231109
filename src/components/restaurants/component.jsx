import { Restaurant } from "../restaurant/component"

export const Restaurants = ({restaurant}) => {
    if (!restaurant){
        return null;
    };

    return (
        <div>
            <Restaurant
                restaurant = {restaurant}
            />
        </div>
    )
}