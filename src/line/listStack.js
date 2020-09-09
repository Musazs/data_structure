/**
 * @param listStack 链表实现栈
 *
 */
import { LinkedList } from './linkedList.js'
export class ListStack extends LinkedList {
    constructor () {
        super();
    }

    getSize () {
        return super.GetSize()
    }

    push (val) {
        super.AddFirst(val)
    }

    pop () {
        super.RemoveFirst()
    }

    peek () {
        return super.GetLast()
    }

    toString () {
        let res = ''
        return `Stack Top ${super.ToString()}`
    }
}