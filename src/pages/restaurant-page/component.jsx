import { RestaurantTabs } from "../../components/restaurantTabs/component";
import { Restaurants } from "../../components/restaurants/component";
import { useState } from 'react';
import { Header } from '../../components/header/component';
import { Footer } from '../../components/footer/component';
import { ThemeProvider } from '../../components/theme/component';

export const RestaurantPage = ({restaurants}) => {
    const [selectedRestaurant, setSelectedRestaurant] = useState(-1);

    if (!restaurants){
        return null;
    }

    const filteredRestaurant = restaurants.filter(
        ({id}) => id === selectedRestaurant
    );

    return (
        <ThemeProvider>
            <Header />
            <RestaurantTabs
                restaurants={restaurants}
                onTabClick={setSelectedRestaurant}
            />
            <Restaurants
                restaurants={filteredRestaurant}
            />
            <Footer/>
        </ThemeProvider>
    )
}