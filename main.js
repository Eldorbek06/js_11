// Напишите функцию которая заполняет массив нужными данными 

let arr1 = ['a', 'a', 'a', 'a']

let arr1Copy = []

let arr1Length = arr1.length

arr1Copy.push(arr1Length, arr1[0])

alert(
    `
    Task №1
    ${arr1Copy}
    `
)

console.log(
    `
    Task №1
    ${arr1Copy}
    `
);





// compact
// Убрать все не желательные элементы

let arr2 = ['hello', null, 0, true, false, 1, undefined, '', NaN]

let arr2Copy = []

arr2.filter(item => {
    if (item) {
        arr2Copy.push(item)
    }
})

alert(
    `
    Task №2
    ${arr2Copy}
    `
)

console.log(
    `
    Task №2
    ${arr2Copy}
    `
);





// unique
// Оставить в массиве только оригинал

let arr3 = ['a', 'b', true, 'a', false, 'b', true]

let arr3Copy = []

arr3.filter(item => {
    for (let item of arr3) {
        if (!arr3Copy.includes(item)) {
            arr3Copy.push(item);
        }
    };
})

alert(
    `
    Task №3
    ${arr3Copy}
    `
)

console.log(
    `
    Task №3
    ${arr3Copy}
    `
);





// Проверить массив на схожесть

function isEqual(a, b) {
    if (a instanceof Array && b instanceof Array) {
        if (a.length !== b.length) {
            return false;
        }

        for (var i = 0; i < a.length; i++) {
            if (!isEqual(a[i], b[i])) {
                return false;
            }
        }

        return true;
    }

    return a === b;
}

let arr4 = [1, 2, 3, 4, 5,]
let arr4Copy = [1, 2, 3, 4, 5]

let equal = isEqual(arr4, arr4Copy)

alert(
    `
    Task №4
    Equal: ${equal}
    `
)

console.log(
    `
    Task №4
    Equal: ${equal}
    `
);