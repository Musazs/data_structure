/**
 * @param LinkedList 链表
 * @param
 */
export class LinkedList {
    constructor (val = null, next = null) {
        this.dummyHead = {val: null, next: null};
        this.size = 0;
    }

    ToString () {
        return this.dummyHead.toString();
    }

    GetSize () {
        return this.size
    }

    IsEmpty () {
        return this.size === 0
    }

    Add (index, val) {
        if (index < 0 || index > this.size) {
            return console.error('下标不正确s')
        }
        let prev = this.dummyHead;
        for (let i = 0; i < index - 1; i++) {
            prev = prev.next
        };
        prev.next = {
            val,
            next: prev.next
        };
        this.size++;
    }

    AddFirst (val) {
        // const newNode = new Object;
        // newNode.val = e;
        // newNode.next = this.head;
        // this.head = newNode;
        // this.head = {
        //     val: e,
        //     next: this.head
        // };
        this.Add(0, val);
        this.size++;
    }

    AddLast (val) {
        this.Add(this.size, val);
        this.size++;
    }

    AddLast (val) {
        this.Add(this.size, val)
    }

    Get (index) {
        if (index < 0 || index > this.size) {
            return console.error('索引不正确')
        }
        let cur = this.dummyHead.next;
        for (let i = 0; i < index; i++) {
            cur = cur.next;
        }
        return cur.val
    }

    GetFirst () {
        return this.Get(0)
    }

    GetLast () {
        return this.Get(this.size - 1)
    }

    Set (index, val) {
        if (index < 0 || index > this.size) {
            return console.error('索引不正确')
        }
        let cur = this.dummyHead.next;
        for (let i = 0; i < index; i++) {
            cur = cur.next
        }
        cur.val = val;
    }

    Concatitains (val) {
        let cur = this.dummyHead.next;
        while (cur.next) {
            if (cur.val === val) {
                return true
            }
            cur = cur.next
        }
        return false
    }

    ToString () {
        let cur = this.dummyHead.next;
        let res = '';
        while (cur.next) {
            res += `${cur.val}->`;
            cur = cur.next;
        }
        return res + 'Null'
    }

    Remove (index) {
        if (index < 0 || index > this.size) {
            return console.error('索引不正确')
        }
        let prev = this.dummyHead;
        for (let i = 0; i < index; i++) {
            prev = prev.next;
        }

        let delNode = prev.next;
        prev.next = delNode.next;
        delNode.next = null;
        this.size--;
        return delNode.val
    }

    RemoveLast () {
        return this.Remove(this.size - 1)
    }

    RemoveFirst () {
        return this.Remove(0);
    }
}