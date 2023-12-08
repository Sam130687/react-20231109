import { useSelector } from "react-redux";
import { Tab } from "../Tab/component";
import { selectRestaurantIds } from "../../redux/features/restaurants/selectors";

export const RestaurantTabs = ({onTabClick}) => {
    const restaurants = useSelector(selectRestaurantIds);
    return (
        <div>
            {restaurants.map((restaurantId) =>
                <Tab id={restaurantId} onClick={() => onTabClick(restaurantId)}/>
            )}
        </div>
    )
}