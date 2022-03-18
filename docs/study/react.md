# react

### react setState是同步还是异步

react并不是单纯的异步或者同步，在合成事件中和生命周期内是异步的， 而在setTimeout,setInterval等原生事件中是同步的，导致这种差异的原因是 由react的更新机制引起的，在源码中由一个isBatchingUpdates的变量，
在合成事件和生命周期之前，这个变量的值都为true，当这个变量为true 的时候，setState都不会生效，当合成事件和生命周期执行完成的时候， 变量才会设置为false，此时setState才会生效，而setTimeout等原生事件
有所不同的是，这是函数执行的时机不受react内部逻辑的影响，比如setTimeout 是异步的，在执行setTimeout之前，同步任务已经执行完成，此时isBatchingUpdates 已经被设置为false。


### 什么是高阶组件，并且举例说明

高阶组件就是一个函数，该函数接受一个组件作为参数并且返回一个新的组件

```tsx
function WithTest(WrappedComponent, name) {
    return function () {
        return <div>
            <WrappedComponent name={name}/>
        </div>
    }
}
```

### react为什么需要合成事件

1. 进行浏览器兼容，实现更好的跨平台
2. 方便事件统一管理和事物机制


### 为什么有时react两次setState，只执行一次

因为setState不是立即执行的，调用setState后会压入任务队列，在isBatchingUpdates
为false的时候才会执行，在执行的时候react会合并重复的任务


### redux有哪些原则  
    - 单一数据源
    - 只读
    - 纯函数修改

### 
