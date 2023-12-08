import { Tab } from "../Tab/component"

export const RestaurantTabs = ({restaurants, onTabClick}) => {
    return (
        <div>
            {restaurants.map(({name, id}) =>
                <Tab
                    onClick={() => onTabClick(id)}
                >{name}</Tab>
            )}
        </div>
    )
}