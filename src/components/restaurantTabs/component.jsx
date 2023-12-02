import { Tab } from "../Tab/component"
import { useOrder } from "../order/hook";
import styles from "./styles.module.css";

export const RestaurantTabs = ({restaurants, onTabClick}) => {
    const { forms, setAddress } = useOrder();

    return (
        <div>
            {restaurants.map(({name, id}) =>
                <Tab
                    className={forms.theme === "light" ? styles.blackButton : styles.lightButton}
                    onClick={() => onTabClick(id)}
                >{name}</Tab>
            )}
        </div>
    )
}