import styles from './styles.module.css';
import classnames from 'classnames';

export const Tab = ({children, onClick, className}) => {
    return (
        <button
            className={classnames(className, styles.root)}
            onClick={onClick}
        >{children}</button>)
}