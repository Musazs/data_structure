/**
 * @param arrayStack    栈
 * @params array 引用
 * 该组件继承array 类方法
 */

import { _Array } from './array'

export class Stack extends _Array {
    constructor (capacity = 10) {
        super(capacity, 0);
    }

    String () {
        return super.String()
    }
}