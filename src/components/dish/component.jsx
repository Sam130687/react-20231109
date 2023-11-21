export const Dish = ({dish}) => {
    if (!dish) {
        return null;
    }

    return (
        <div>
            <div>{dish.name}</div>
        </div>)
}