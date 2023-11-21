import { Tab } from "../Tab/component"

export const RestaurantTabs = ({restaurants, onTabClick}) => {
    return (
        <div>
            {restaurants.map(({name, index}) =>
                <Tab onClick={() => onTabClick(index)} >{name}</Tab>
            )}
        </div>
    )
}