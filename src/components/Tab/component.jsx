import styles from './styles.module.css';
import classnames from 'classnames';
import { Button } from "../button/component";
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/features/restaurants/selectors';

export const Tab = ({id, onClick, className}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    return (
        <Button
            className={classnames(className, styles.root)}
            onClick={onClick}
        >{restaurant.name}</Button>)
}