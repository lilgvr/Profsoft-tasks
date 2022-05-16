export function* infiniteGenerator(): Generator<number> {
    let i = 0;

    while (1) yield i++;
}