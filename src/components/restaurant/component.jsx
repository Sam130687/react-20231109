import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

export const Restaurant = ({restaurant}) => {
    return (
        <div id={restaurant.id}>
            <h2>{restaurant.name}</h2>
            <Menu
                restaurant={restaurant}
            />
            <Reviews
                restaurant={restaurant}
            />
        </div>
    )
}