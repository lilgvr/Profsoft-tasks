const array = [1, 16, 23, 2, 25, 14, 32, 3, 90, 24];
const list = {
    A: ["B", "C"],
    B: ["D", "F"],
    C: ["K", "L"],
    D: ["M", "N"],
    E: ["P", "X"],
    F: ["Y", "Z"],
    K: ["C"],
    L: ["C"],
    M: ["D"],
    N: ["D"],
    P: ["E"],
    X: ["E"],
    Y: ["F"],
    Z: ["F"]
};


// 1.1

const inAscendingOrder = array => {
    return array.slice().sort((a, b) => a - b);
}

const inDescendingOrder = array => {
    return array.slice().sort((a, b) => b - a);
}

document.getElementById('arr').innerText = array.toString();
document.getElementById('asc').innerText = inAscendingOrder(array).toString();
document.getElementById('desc').innerText = inDescendingOrder(array).toString();


// 1.2

const pathExist = (list, start, end) => {
    const endKey = Object.keys(list)[Object.values(list).indexOf(end)];

    for (let i = 0; i < start.length; i++) {
        for (let j = 0; j < list[start[i]].length; j++) {
            if (list[start[i]][j] === endKey) return true;
        }
    }

    return false;
}

let selects = document.getElementsByTagName('select');
const getPath = () => {
    let [a, b] = selects;
    document.getElementById('pathResult').innerText = pathExist(list, list[a.value], list[b.value]).toString();
}

for (let select of selects) {
    for (let listKey in list) {
        let opt = document.createElement('option');
        opt.value = listKey;
        opt.innerText = listKey;
        select.appendChild(opt);
    }
}

// 1.3

const search = (array, el) => {
    const res = array.indexOf(el);
    return res === -1 ? null : res;
}

const doSearch = () => {
    let value = document.getElementById('numInput').value;
    let resP = document.getElementById('searchResult');

    if (!value) {
        resP.innerText = null;
        return;
    }
    let x = +value;

    let res = search(array, x);
    if (res !== null) resP.innerText = res;
    else resP.innerText = 'Число не найдено';

}