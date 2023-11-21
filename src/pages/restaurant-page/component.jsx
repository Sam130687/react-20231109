import { RestaurantTabs } from "../../components/restaurantTabs/component";
import { Restaurants } from "../../components/restaurants/component";
import { useState } from 'react';

export const RestaurantPage = ({restaurants}) => {
    if (!restaurants){
        return null;
    }

    const [selectedRestaurant, setSelectedRestaurant] = useState(-1);

    const filteredRestaurant = restaurants.filter(
        ({id}) => id === selectedRestaurant
    );

    return (
        <div>
            <RestaurantTabs
                restaurants={restaurants}
                onTabClick={setSelectedRestaurant}
            />
            <Restaurants
                restaurants={filteredRestaurant}
            />
        </div>
    )
}