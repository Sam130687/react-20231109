import { RestaurantTabs } from "../../components/restaurantTabs/component";
import { Restaurants } from "../../components/restaurants/component";
import { useState } from 'react';
import { Header } from '../../components/header/component';
import { Footer } from '../../components/footer/component';
import { ThemeProvider } from '../../components/theme/component';

export const RestaurantPage = () => {
    const [selectedRestaurant, setSelectedRestaurant] = useState(-1);

    return (
        <ThemeProvider>
            <Header />
            <RestaurantTabs
                onTabClick={setSelectedRestaurant}
            />
            <Restaurants
                id={selectedRestaurant}
            />
            <Footer/>
        </ThemeProvider>
    )
}