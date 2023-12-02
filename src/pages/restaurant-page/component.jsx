import { RestaurantTabs } from "../../components/restaurantTabs/component";
import { Restaurants } from "../../components/restaurants/component";
import { useState } from 'react';
import { Header } from '../../components/header/component';
import { Footer } from '../../components/footer/component';
import { OrderProvider } from '../../components/order/component';

export const RestaurantPage = ({restaurants}) => {
    const [selectedRestaurant, setSelectedRestaurant] = useState(-1);

    if (!restaurants){
        return null;
    }

    const filteredRestaurant = restaurants.filter(
        ({id}) => id === selectedRestaurant
    );

    return (
        <OrderProvider>
            <Header />
            <RestaurantTabs
                restaurants={restaurants}
                onTabClick={setSelectedRestaurant}
            />
            <Restaurants
                restaurants={filteredRestaurant}
            />
            <Footer/>
        </OrderProvider>
    )
}