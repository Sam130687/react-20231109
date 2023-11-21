import { RestaurantTabs } from "../../components/restaurantTabs/component";
import { Restaurants } from "../../components/restaurants/component";

export const RestaurantPage = ({restaurants}) => {
    return (
        <div>
            <RestaurantTabs restaurants={restaurants}/>
            <Restaurants restaurants={restaurants}/>
        </div>
    )
}