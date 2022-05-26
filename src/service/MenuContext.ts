import React, {createContext, Dispatch} from "react";

export interface IMenuState {
    menuOpened: boolean,
    setMenuOpened: (value: boolean) => Dispatch<React.SetStateAction<Boolean>>;
}

const MenuContext = createContext({
    menuOpened: false,
    setMenuOpened: (value: boolean) => {
    }
});

export default MenuContext;