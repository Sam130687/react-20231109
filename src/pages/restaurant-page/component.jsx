import { Restaurants } from "../../components/restaurants/component";
import { useGetRestaurantsQuery } from "../../redux/services/api";
import { useParams } from "react-router-dom";

export const RestaurantPage = () => {
    const { restaurantId } = useParams();
    const { data, isFetching } = useGetRestaurantsQuery(undefined);

    if (isFetching) {
        return "Загрузка.....";
    }

    return (
        <Restaurants
            restaurant={data.find(({ id }) => id === restaurantId)}
        />
    )
}