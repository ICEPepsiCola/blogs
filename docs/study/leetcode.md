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

### 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。 
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

### 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。 
```js
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        let l = i + 1;
        let r = nums.length - 1;
        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if (num + nums[mid] > target) {
                r = mid - 1;
            } else if (num + nums[mid] < target) {
                l = mid + 1;
            } else {
                return [num, nums[mid]];
            }
        }
    }
};
```

### 给你一个 严格升序排列 的正整数数组 arr 和一个整数 k 。

### 给你三个整数数组 nums1、nums2 和 nums3 ，请你构造并返回一个 与这三个数组都不同的 数组，且由 至少 在 两个 数组中出现的所有值组成。数组中的元素可以按 任意 顺序排列。

```js
var findKthPositive = function (arr, k) {
    let j = 0;
    for (let i = 1; i <= arr[arr.length - 1]; i++) {
        if (i !== arr[j]) {
            k--;
        } else {
            j++;
        }
        if (k === 0) return i;
    }
    return arr[arr.length - 1] + k;
};
```
```js
var twoOutOfThree = function (nums1, nums2, nums3) {
    const map = new Map();
    const set = new Set();
    const nums = [...nums1, nums2, nums3];
    for (const number of [...new Set(nums1)]) {
        if (map.has(number)) {
            map.set(number, map.get(number) + 1);
        } else {
            map.set(number, 1);
        }
    }
    for (const number of [...new Set(nums2)]) {
        if (map.has(number)) {
            set.add(number);
            map.set(number, map.get(number) + 1);
        } else {
            map.set(number, 1);
        }
    }
    for (const number of [...new Set(nums3)]) {
        if (map.has(number)) {
            set.add(number);
            map.set(number, map.get(number) + 1);
        } else {
            map.set(number, 1);
        }
    }
    // console.log(set);
    return [...set];
};
```

### 给你两个链表 list1 和 list2 ，它们包含的元素分别为 n 个和 m 个。
//
// 请你将 list1 中下标从 a 到 b 的全部节点都删除，并将list2 接在被删除节点的位置。
```js
var mergeInBetween = function (list1, a, b, list2) {
    let i = 0;
    let cur = list1;
    let pos1 = null;
    let pos2 = null;
    while (cur) {
        if (i === a - 1) {
            pos1 = cur;
            cur = cur.next;
        } else if (i === b + 1) {
            pos2 = cur;
            cur = cur.next;

        } else {
            cur = cur.next;
        }
        i++;
    }
    let cur2 = list2;
    while (cur2) {
        if (!cur2.next) {
            cur2.next = pos2;
            break;
        }
        cur2 = cur2.next;
    }
    pos1.next = list2;
    return list1;
};
```
