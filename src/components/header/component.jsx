import styles from "./styles.module.css";
import { useTheme } from "../theme/hook";

export const Header = () => {
    const { toggleTheme } = useTheme();

    return (
        <div className={styles.root}>
            <button>Заказ</button>
            <button onClick={toggleTheme}>Смена темы</button>
        </div>)
}