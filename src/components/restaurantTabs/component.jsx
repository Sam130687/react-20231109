import { Tab } from "../Tab/component";
import { useGetRestaurantsQuery } from "../../redux/services/api";

export const RestaurantTabs = ({onTabClick}) => {
    const { data, isFetching } = useGetRestaurantsQuery();

    if (isFetching) {
        return "Идет загрузка. Ожидайте";
    }

    return (
        <div>
            {data.map((restaurant) =>
                <Tab restaurant={restaurant} onClick={() => onTabClick(restaurant.id)}/>
            )}
        </div>
    )
}