/**
 * @param LinkedQueue 链表循环队列
 */
class LinkedQueue {
    constructor () {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getSize () {
        return this.size;
    }

    isEmpty () {
        return this.size === 0
    }

    enqueue (val) {
        if (!this.tail) {
            this.tail = {
                val,
                next: null
            }
        } else {
            this.tail.next = {
                val,
                next: null
            };
            this.tail = this.tail.next
        };
        this.size++;
    }

    dequeue () {
        if (this.size === 0) {
            return console.error('链表队列为空')
        }
        const deNode = this.head;
        this.head = this.head.next;
        deNode.next = null;
        if (!this.head) {
            this.tail = null;
        };
        this.size--;
        return deNode.val;
    }

    getFront () {
        if (!this.size) {
            return console.error('链表队列为空')
        }
        return this.head.val
    }

    toString () {
        let str = 'Front';
        let cur = this.head;
        while (cur.next) {
            str += cur.val;
            cur = cur.next;
        }
        str += 'Tail';
        return str;
    }
}