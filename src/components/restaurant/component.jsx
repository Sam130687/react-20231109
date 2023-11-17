import { MenuList } from "../menu-list/component";
import { ReviewList } from "../review-list/component";

export const Restaurant = ({restaurant}) => {
    return (
        <ul id={restaurant.id}>
            <li>{restaurant.name}</li>
            <MenuList menus={restaurant.menu}/>
            <ReviewList reviews={restaurant.reviews}/>
      </ul>
    )
}