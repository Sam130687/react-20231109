import { RestaurantTabs } from "../../components/restaurantTabs/component";
import { Restaurants } from "../../components/restaurants/component";
import { useState } from 'react';
import { Header } from '../../components/header/component';
import { Footer } from '../../components/footer/component';
import { ThemeProvider } from '../../components/theme/component';
import { useGetRestaurantsQuery } from "../../redux/services/api";

export const RestaurantPage = () => {
    const [selectedRestaurant, setSelectedRestaurant] = useState(undefined);

    const { data, isFetching, isLoading, refetch } = useGetRestaurantsQuery(undefined);

    if (isFetching) {
        return "Загрузка.....";
    }

    return (
        <ThemeProvider>
            <Header />
            <RestaurantTabs
                onTabClick={setSelectedRestaurant}
            />
            {selectedRestaurant || "Выберите ресторан"}
            <Restaurants
                restaurant={data.find(({ id }) => id === selectedRestaurant)}
            />
            <Footer/>
        </ThemeProvider>
    )
}