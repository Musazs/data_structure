// 基于链表生成链表
export class LinkedMap {
    constructor () {
        this.size = 0;
        this.dummyHead = {
            next: null
        }
    }

    Add (key, val) {
        const cur = this.getNode(key);
        if (cur) {
            cur.val = val;
        } else {
            this.dummyHead.next = {
                key,
                val,
                next: this.dummyHead.next
            }
        }
    }

    toString () {
        let str = '';
        let cur = this.dummyHead.next;
        while (cur) {
            Object.keys(item => item)
            str += `${cur.key}: ${cur.val} ->`
            cur = cur.next;
        }
        return str;
    }

    getSize () {
        return this.size
    }

    isEmpty () {
        return this.size === 0
    }

    getNode (key) {
        let cur = this.dummyHead.next;
        while (cur) {
            if (cur.key === key) {
                return cur;
            }
            cur = cur.next;
        };
        return null;
    }

    conains (key) {
        return this.getNode(key) != null
    }

    getVal (key) {
        const cur = this.getNode(key);
        return cur ? cur.val : null;
    }

    setVal (key, val) {
        const cur = this.getNode(key);
        if (!cur) {
            return `error: ${key} 该节点不存在`
        };
        cur.val = val;
    }

    remove (key) {
        let prev = this.dummyHead;
        while(prev.next) {
            if (prev.next.key === key) {
                break;
            }
            prev = prev.next;
        }
        if (prev.next) {
            const delCur = prev.next;
            prev.next = delCur.next;
            delCur.next = null;
            return delCur.val;
        }
        return null;
    }
}