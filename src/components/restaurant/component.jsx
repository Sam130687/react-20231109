import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

export const Restaurant = ({restaurant}) => {
    if (!restaurant){
        return null;
    }

    return (
        <div id={restaurant.id}>
            <h2>{restaurant.name}</h2>
            <Menu
                dishIds={restaurant.menu}
            />
            <Reviews reviewIds={restaurant.reviews}/>
        </div>
    )
}