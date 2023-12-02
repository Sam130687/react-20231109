import styles from "./styles.module.css";
import { useOrder } from "../order/hook";

export const Header = () => {
    const { forms, setTheme } = useOrder();

    return (
        <div className={styles.root}>
            <button>Заказ</button>
            <button onClick={() =>
                setTheme(forms.theme === "light" ? "dark" : "light")
            }>Смена темы</button>
        </div>)
}