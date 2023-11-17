import { Menu } from "../menu/component"

export const MenuList = ({menus}) => {
    return (
        <li>
            Меню
            <ul>
                {menus.map((menu) =>
                    <Menu menu = {menu} />
                )}
            </ul>
        </li>
    )
}