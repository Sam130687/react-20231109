import styles from './styles.module.css';
import classnames from 'classnames';
import { Button } from "../button/component";

export const Tab = ({restaurant, onClick, className}) => {
    return (
        <Button
            className={classnames(className, styles.root)}
            onClick={onClick}
        >{restaurant.name}</Button>)
}