export function* infiniteGenerator(): Generator<number> {
    let i = 0;

    while (1) yield i++;
}

export function formatTime(date: Date | number): string {
    let date1 = new Date(date);

    return `${date1.getHours()}:${date1.getMinutes() < 10 ? '0' + date1.getMinutes() : date1.getMinutes()}`;
}