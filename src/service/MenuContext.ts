import React, {createContext, Dispatch} from "react";

export interface IMenuContext {
    menuOpened: boolean,
    setMenuOpened: () => Dispatch<React.SetStateAction<Boolean>>;
}

const MenuContext = createContext({
    menuOpened: false,
    setMenuOpened: (value: boolean) => {}
});

export default MenuContext;