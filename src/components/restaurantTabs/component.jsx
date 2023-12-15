import { Tab } from "../Tab/component";
import { useGetRestaurantsQuery } from "../../redux/services/api";
import { Outlet } from "react-router-dom";

export const RestaurantTabs = () => {
    const { data, isFetching } = useGetRestaurantsQuery();

    if (isFetching) {
        return "Идет загрузка. Ожидайте";
    }

    return (
        <div>
            {data.map((restaurant) =>
                <Tab restaurant={restaurant}/>
            )}
            <Outlet/>
        </div>
    )
}