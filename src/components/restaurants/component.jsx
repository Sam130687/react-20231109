import { Restaurant } from "../restaurant/component"

export const Restaurants = ({id}) => {
    if (!id){
        return null;
    };

    return (
        <div>
            <Restaurant
                restaurantId = {id}
            />
        </div>
    )
}