/**
 * @param _Array 模拟数组
 * @paramter size 下标/索引
 * @paramter data 数组
 */

export class _Array {
    // 默认会初始化调用这个函数
    constructor(capacity = 10, size = 0) {
        this.size = size;
        this.data = new Array(capacity);
    }

    // 传入数组容量，改变capacity 构造Array
    capacity (capacity = 0) {
        this.data = new Array(capacity);
        this.size = 0;
    }

    // 获取元素个数
    GetSize () {
        return this.size;
    }

    // 火球数组长度
    GetCapacity () {
        return this.data.length;
    }

    // 判断数组是否有数据
    IsEmpty () {
        return size === 0;
    }

    // 添加元素 末尾
    AddLast (e) {
        // this.data[this.size++] = e;
        // // this.size++;
        this.Add(this.size, e);
    }

    // 添加元素 头部
    AddFirst (e) {
        this.Add(0, e);
    }

    // 添加元素到任意位置
    Add (index = 0, e) {
        if (index < 0 || index > this.size) {
            return console.log(new Error(`传入下标不合法`));
        };

        if (this.size === this.data.length) {
            this.Resize(2 * this.data.length)
        };

        for (let i = this.size - 1; i >= index; i--) {
            this.data[i + 1] = this.data[i];
        }
        this.data[index] = e;
        this.size++;
    }

    // 转换成字符串
    String () {
        return JSON.stringify(this.data);
    }

    // 修改某位置 值
    Set (index, e) {
        if (index < 0 || index > this.size + 1) {
            return console.log(new Error(`传入下标不合法`));
        };
        this.data[index] = e;
    }

    // 查询是否包含某远视眼
    Concat (e) {
        for (let i = 0; i < this.size; i++) {
            if (this.data[i] === e) {
                return true
            }
        }
        return false
    }

    // 查找元素下标
    Find (e) {
        for (let i = 0; i < this.size; i++) {
            if (this.data[i] === e) {
                return i
            }
        }
        return -1;
    }

    // 从数组中删除指定元素，并返回
    Remove (index) {
        // 校验合法性
        if (index < 0 || index >= this.size) {
            return console.log(new Error('下标不合法，超出范围'));
        }
        const ret = this.data[index];
        for (let i = index; i < this.size; i++) {
            this.data[i] = this.data[i + 1];
        }
        this.size--;
        this.data[this.size] = null;
        if (this.size === this.data.length / 4 && this.data.length /2 !== 0) {
            this.Resize(this.data.length / 2);
        }
        return ret;
    }

    // 删除第一个
    RemoveFirst () {
        return this.Remove(0);
    }

    // 删除最后一个
    RemoveLast () {
        return this.Remove(this.size - 1);
    }

    // 从数组中删除元素e
    RemoveElement (e) {
        const index = this.Find(e);
        if (index !== -1) {
            this.Remove(index);
        }
    }

    // 从数组中删除元素e 所有
    RemoveElementAll (e) {
        this.RemoveElement(e);
        if (this.Find(e) !== -1) {
            this.RemoveElementAll(e);
        }
    }

    // 修改数组长度
    Resize (newCapacity) {
        const newData = new Array(newCapacity);
        for (let i = 0; i < this.size; i++) {
            newData[i] = this.data[i];
        };
        this.data = newData;
    }
}