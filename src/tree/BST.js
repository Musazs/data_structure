/**
 * @param BST 二分搜索树
 */
export class BST {
    constructor () {
        this.root = null;
        this.size = 0;
        this.str = '';
    }

    getSize () {
        return this.size;
    }

    isEmpty () {
        return this.size === 0;
    }

    // 添加元素
    add (val) {
        this.root = this.addRoot(this.root, val)
    }

    // 添加元素 递归
    addRoot (root, val) {
        if (!root) {
            this.size++;
            return {
                val
            }
        };

        if (root.val > val) {
            root.left = this.addRoot(root.left, val);
        } else if (root.val < val) {
            root.right = this.addRoot(root.right, val);
        }
        return root;
    }

    // 添加元素 线性操作
    addLine (val) {

    }

    // 查看是否包含某元素
    contains (val) {
        return this.Contains(this.root, val)
    }

    // 是否包含某元素 是否 递归算法
    Contains (root, val) {
        if (!root) return false;
        if (root.val > val) {
            return this.Contains(root.left, val)
        } else if (root.val < val) {
            return this.Contains(root.right, val)
        } else {
            return true;
        }
    }

    // 前序遍历 打印
    preOrder () {
        this.PreOrder(this.root);
    }

    PreOrder (root) {
        if (!root) {
            return
        }
        console.log(root.val)
        this.PreOrder(root.left);
        this.PreOrder(root.right);
    }

    perOrderNR () {
        const stack = [];
        stack.push(this.root);
        while (stack.length) {
            let cur = stack.pop();
            console.log(cur.val);
            if (cur.right) {
                stack.push(cur.right)
            }
            if (cur.left) {
                stack.push(cur.left)
            }
        }
    }

    // 中序遍历
    inOrder () {
        this.InOrder(this.root)
    }

    InOrder (root) {
        if (!root) return;
        this.InOrder(root.left);
        console.log(root.val);
        this.InOrder(root.right);
    }

    // 后续遍历
    posOrder () {
        this.PosOrder(this.root)
    }

    PosOrder (root) {
        if (!root) return;
        this.PosOrder(root.left)
        this.PosOrder(root.right)
        console.log(root.val)
    }

    // 遍历输出
    toString () {
        this.str = ''
        this.generaToString(this.root, 0)
        return this.str
    }

    generaToString (root, depth) {
        if (!root) {
            this.str += `${this.depthStr(depth)} null\n`
            return
        }
        this.str += `${this.depthStr(depth)}: ${root.val} \n`;
        this.generaToString(root.left, depth + 1)
        this.generaToString(root.right, depth + 1)
    }

    depthStr (depth) {
        let str = '';
        for (let i = 0; i < depth; i++) {
            str += '=='
        }
        return str
    }

    // 层序遍历
    levelOrder () {
        const arrQ = [];
        arrQ.push(this.root)
        while (arrQ.length) {
            const cur = arrQ.shift();
            console.log(`level: ${cur.val}`);
            if (cur.left) {
                arrQ.push(cur.left)
            }
            if (cur.right) {
                arrQ.push(cur.right)
            }
        }
    }

    // 搜索最小元素
    minimum () {
        if (!this.size) {
            return console.error(`bst 为空`)
        }
        return this.Minimum(this.root);
    }
    Minimum (node) {
        if (!node.left) {
            return node
        }
        return this.Minimum(node.left);
    }

    // 寻找最大元素
    maxmum () {
        if (!this.size) {
            return console.error(`bst 为空`)
        }
        return this.Maxmum(this.root);
    }

    Maxmum (node) {
        if (!node.right) {
            return node
        }
        return this.Maxmum(node.right)
    }

    // 删除最小值，并返回
    deMin () {
        let cur = this.minimum();
        this.root = this.DeMin(this.root);
        return cur
    }

    DeMin (node) {
        if (!node.left) {
            const rightNode = node.right;
            node.right = null;
            this.size--;
            return rightNode;
        };

        node.left = this.DeMin(node.left);
        return node;
    }

    // 删除最大值，并返回
    deMax () {
        let cur = this.maxmum();
        this.root = this.DeMax(this.root);
        return cur
    }

    DeMax (node) {
        if (!node.right) {
            const leftNode = node.left;
            node.right = null;
            this.size--;
            return leftNode;
        };

        node.right = this.DeMax(node.right);
        return node;
    }

    remove (e) {
        this.Remove(this.root, e)
    }

    Remove (node, e) {
        if (!node) {
            return null;
        };
        if (node.val > e) {
            node.left = this.Remove(node.left, e)
            return node;
        } else if (node.val < e) {
            node.right = this.Remove(node.right, e)
            return node;
        } else {
            // 带删除节点，左子树为空的情况
            if (!node.left) {
                const rightnode = node.right;
                node.right = null;
                this.size--;
                return rightnode;
            }
            // 带删除节点，右子树为空
            if (!node.right) {
                const leftnode = node.left;
                node.left = null;
                this.size--;
                return leftnode;
            }
            // 左右子节点均不为空
            const successor = this.minimum(node.right);
            successor.right = this.deMin(node.right);
            successor.left = node.left;
            node.left = node.right = null;
            return successor;
        }
    }

    // 寻找元素e 相近的最小值
    floor (e) {
        return e
    }

    // 寻找元素e 相近的最大值
    ceil (e) {

    }

    // 寻找元素的排名
    rank (e) {
        return index;
    }

    // 寻找元素排名的第index的元素
    select (index) {
        return e;
    }
}