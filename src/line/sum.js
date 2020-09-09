/**
 * @param Sum 数组求和
 * 
 */
export class Sum {
    constructor (arr = []) {
        this.arr = arr;
        this.sum = this.sums(arr, 0);
    }

    sums (arr, l) {
        if (l === arr.length) {
            return 0;
        }
        return arr[l] + this.sums(arr, l + 1)
    }
}