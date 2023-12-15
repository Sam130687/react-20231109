import { Provider } from "react-redux";
import { NotFoundPage } from "./pages/not-found-page/component";
import store from "./redux";
import "./styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main-page/component";
import { Layout } from "./components/layout/component";
import { RestaurantTabs } from "./components/restaurantTabs/component";
import { RestaurantPage } from "./pages/restaurant-page/component";
import { Menu } from "./components/menu/component";
import { Reviews } from "./components/reviews/component";

export const App = () => {
    return (
        <Provider store={store}>
            <Layout>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<MainPage/>}/>
                        <Route path="restaurants" element={<RestaurantTabs/>}>
                            <Route index element={<div>Необходимо выбрать ресторан</div>}/>
                            <Route path=":restaurantId" element={<RestaurantPage/>}>
                                <Route path="menu" element={<Menu/>} />
                                <Route path="reviews" element={<Reviews/>}/>
                            </Route>
                        </Route>
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </BrowserRouter>
            </Layout>
        </Provider>
    )
}