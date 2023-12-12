import { RestaurantTabs } from "../../components/restaurantTabs/component";
import { Restaurants } from "../../components/restaurants/component";
import { useEffect, useState } from 'react';
import { Header } from '../../components/header/component';
import { Footer } from '../../components/footer/component';
import { ThemeProvider } from '../../components/theme/component';
import { useDispatch } from "react-redux";
import { getRestaurants } from "../../redux/features/restaurants/thunks/get_restaurants";

export const RestaurantPage = () => {
    const [selectedRestaurant, setSelectedRestaurant] = useState(undefined);

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getRestaurants());
    }, []);

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