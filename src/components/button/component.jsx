import styles from "./styles.module.css";
import classnames from 'classnames';
import { useTheme } from "../theme/hook";
import { DARK_THEME, LIGHT_THEME } from "../theme/constants";

export const Button = ({children, onClick, disabled, className}) => {
    const { theme } = useTheme();

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={classnames(className, {
                [styles.lightButton]: theme === LIGHT_THEME,
                [styles.blackButton]: theme === DARK_THEME,
            })}
        >
            {children}
        </button>
    )
}