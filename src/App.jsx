import { RestaurantPage } from "./pages/restaurant-page/component"

import "./styles/index.css";

export const App = ({restaurants}) => {
    return <RestaurantPage restaurants = {restaurants} />
}