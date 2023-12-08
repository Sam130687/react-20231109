import { useSelector } from "react-redux";
import { Restaurant } from "../restaurant/component"
import { selectRestaurantById } from "../../redux/features/restaurants/selectors";

export const Restaurants = ({id}) => {
    const filteredRestaurant = useSelector((state) => selectRestaurantById(state, id));

    return (
        <div>
            <Restaurant
                restaurant = {filteredRestaurant}
            />
        </div>
    )
}