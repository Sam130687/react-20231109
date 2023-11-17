import { RestaurantNames } from "../../components/restaurant-names/component";
import { RestaurantList } from "../../components/restaurant-list/component";

export const RestaurantPage = ({restaurants}) => {
    return (
        <div>
            <RestaurantNames restaurants={restaurants}/>
            <RestaurantList restaurants={restaurants}/>
        </div>
    )
}