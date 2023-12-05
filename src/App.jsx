import { Provider } from "react-redux";
import { RestaurantPage } from "./pages/restaurant-page/component"
import store from "./redux";
import "./styles/index.css";

export const App = () => {
    return (
        <Provider store={store}>
            <RestaurantPage/>
        </Provider>
    )
}