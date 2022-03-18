# js

### instanceof原理

instanceof的原理是查找右边的原型是否在左边变量的原型链上

```js
function _instanceof(instance, Proto) {
    if (typeof instance !== 'object' && instance !== null) return false;
    if (typeof Proto !== 'function') return false;
    let proto = Proto.prototype;
    let p = instance
    while (p = Object.getPrototypeOf(p)) {
        if (proto === p) return true;
    }
    return false;
}
```

### 解释一下原型链

prototype，显式原型属性，指向对象的原型对象
constructor，显示属性，指向对象的构造函数
__proto__，隐式属性，指向实例的构造函数的原型对象
__proto__将对象和原型连接起来组成了原型链
所有函数的原型都指向Function
所有对象的原型都指向Object

### apply和call的作用和区别

作用都是在函数执行时改变this的指向，区别是apply接受的是包含多个参数的数组，而call是参数列表

实现apply
```js
function _apply(t, args) {
    const f = this.bind(t);
    return f(args);
}
```

实现call
```js
function _call(t, args) {
    const f = this.bind(t);
    return f(...args);
}
```

实现 add(1)(2)(3)
```js
const add = x => y => z => x + y + z;
```


## Vue和React

相同点

    1. 都支持服务端旋绕
    2. 数据驱动
    3. 都有虚拟dom
    4. 都有状态管理

不同点

    1. React单向数据流，Vue支持双向绑定
    2. Vue是mvvm，React本质是v
    3. React是JSX，Vue推崇模板
    4. React提倡数据不可变，Vue基于数据可变
    5. React的更新是全部，Vue是局部
