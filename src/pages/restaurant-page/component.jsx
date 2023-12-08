import { RestaurantTabs } from "../../components/restaurantTabs/component";
import { Restaurants } from "../../components/restaurants/component";
import { useState } from 'react';
import { Header } from '../../components/header/component';
import { Footer } from '../../components/footer/component';
import { ThemeProvider } from '../../components/theme/component';
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/features/restaurants/selectors";

export const RestaurantPage = () => {
    const [selectedRestaurant, setSelectedRestaurant] = useState(-1);

    const filteredRestaurant = useSelector((state) => selectRestaurantById(state, selectedRestaurant));

    return (
        <ThemeProvider>
            <Header />
            <RestaurantTabs
                onTabClick={setSelectedRestaurant}
            />
            <Restaurants
                restaurant={filteredRestaurant}
            />
            <Footer/>
        </ThemeProvider>
    )
}