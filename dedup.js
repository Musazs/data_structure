export class Dedup {
    constructor (arr) {
        this.arr = arr;
    }

    deFun () {
        const newArr = new Set(this.arr.map(item => {
            return JSON.stringify(item)
        }))
        return [...newArr].map(item => JSON.parse(item));
    }
}