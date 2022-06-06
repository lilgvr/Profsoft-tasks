export function* infiniteGenerator(): Generator<number> {
    let i = 0;

    while (1) yield i++;
}

export const formatTime = (date: Date | number): string => {
    let date1 = new Date(date);

    return `${date1.getHours()}:${date1.getMinutes() < 10 ? '0' + date1.getMinutes() : date1.getMinutes()}`;
}

export const changeMenuState = (menuOpened: boolean, setMenuOpened: (value: boolean) => void) => {
    if (!menuOpened) document.body.classList.add('no-scroll');
    else document.body.classList.remove('no-scroll');
    setMenuOpened(!menuOpened);
}