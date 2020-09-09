/**
 * @param loopQueue 循环队列
 * @param data 队列数组
 * @param front 队列头
 * @param tail 队列尾
 * @param size 队列元素个数
 */
class LoopQueue {
    constructor(capacity) {
        this.data = new Array(capacity + 1);
        this.front = 0;
        this.tail = 0;
        this.size = 0;
    }

    GetCapacity () {
        return this.data.length - 1;
    }

    IsEpmpty () {
        return this.front === this.tail;
    }

    GetSize () {
        return this.size;
    }

    // 入队操作
    Enqueuq () {
        if ((this.tail + 1) % this.data.length === this.front) {
            this.Resize(this.data.length + 1);
        }
        this.data[this.tail] = e;
        this.tail = (this.tail + 1) % this.data.length;
        this.size++;
    }

    // 出队操作
    DeQueue () {
        if (this.IsEpmpty()) {
            return console.log(new Error('队列为空'))
        };
        const ret = this.data[this.front];
        this.data[this.front] = null;
        this.front = (this.front + 1) % this.data.length;
        this.size--;
        if (this.size === this.GetCapacity() / 4 && this.GetCapacity() / 2 !== 0) {
            this.Resize(this.GetCapacity() / 2)
        }
        return ret;
    }

    GetFront () {
        if (this.IsEpmpty()) {
            return console.error('队列为空')
        };
        return this.data[0]
    }

    Resize (newCapacity) {
        const newData = new Array(newCapacity);
        for (let i = 0; i < this.size; i++) {
            newData[i] = this.data[(this.front + 1) % this.data.length];
        }
        this.front = 0;
        this.data = newData;
        this.tail = this.size;
    }
}