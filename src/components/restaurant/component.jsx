import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/features/restaurants/selectors";

export const Restaurant = ({restaurantId}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));

    return (
        <div id={restaurant.id}>
            <h2>{restaurant.name}</h2>
            <Menu
                restaurantId={restaurantId}
            />
            <Reviews
                restaurantId={restaurantId}
            />
        </div>
    )
}