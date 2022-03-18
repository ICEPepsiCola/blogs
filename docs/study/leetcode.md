# leetcode

### 给定单链表的头节点 head ，请反转链表，并返回反转后的链表的头节点。 

```js
var reverseList = function (head) {
    let cur = head;
    let newHead = null;
    while (cur) {
        newHead = {
            val: cur.val,
            next: newHead
        };
        cur = cur.next;
    }
    return newHead;
};
```

### 给定一个链表的 头节点 head ，请判断其是否为回文链表。

```js
var isPalindrome = function (head) {
    let fast = head;
    let slow = head;
    while (fast) {
        if (fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        } else {
            fast = fast.next;
            slow = slow.next;
        }
    }

    function reversList(list) {
        let cur = list;
        let prev = null;
        while (cur) {
            prev = {val: cur.val, next: prev}
            cur = cur.next;
        }
        return prev;
    }

    let l = head;
    let r = reversList(slow);
    while (r) {
        if (r.val === l.val) {
            l = l.next;
            r = r.next;
        } else {
            return false;
        }
    }
    return true;
};
```

### 数组的每个下标作为一个阶梯，第 i 个阶梯对应着一个非负数的体力花费值 cost[i]（下标从 0 开始）。

```js
var minCostClimbingStairs = function (cost) {
    const dp = [];
    dp[0] = dp[1] = 0;
    let max = 0;
    let prev = 0;
    let curr = 0;
    for (let i = 2; i <= cost.length; i++) {
        let next = Math.min(curr + cost[i - 1], prev + cost[i - 2]);
        prev = curr;
        curr = next;
    }
    return curr;
};
//leetcode submit region end(Prohibit modification and deletion)
minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])
```

### 给定一个链表的 头节点 head ，请判断其是否为回文链表。 
```js
var isPalindrome = function (head) {
    let slow = head;
    let fast = head;
    let left = null;

    while (fast && fast.next) {
        left = {...slow, next: left};
        slow = slow.next;
        fast = fast.next.next;
    }
    let right = fast ? slow.next : slow;
    while (left) {
        if (left.val !== right.val) {
            return false;
        }
        left = left.next;
        right = right.next;
    }
    return true;
};
```

### //定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。 
```js
var reverseList = function(head) {
    let cur = head;
    let res = null;
    while (cur) {
        res = {...cur, next: res};
    }
    return res;
};
```
