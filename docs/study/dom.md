# dom

### 说下你对DOM树的理解

DOM树即文档对象模型，用于表示dom对象之间的层次逻辑关系，方便对html文档
进行增删改查，树的每个节点都是对象。对象上存在特定的方法用户修改结构，
样式和内容，节点可以关联上事件处理器，事件触发后处理器会执行

### 重绘和重排是什么，有什么区别

重绘不一定不需要重排，重排必定导致重绘

引起重排的条件:任何页面布局和几何属性的改变

    • 页面渲染初始化
    • 添加或者删除可见的DOM元素
    • 元素尺寸的改变，位置的改变，或者使用的动画
    • 浏览器窗口尺寸的改变
    • 内容的改变
    • 读取某些元素属性

引起重绘的条件:改变颜色和背景属性等

重绘和重排的代价:耗时，引起浏览器卡顿

减少重绘和重排

    • 批量修改样式，使用cssText或者className
    • 批量修改dom，如隐藏元素，文档碎片，复制节点

### 说下事件模型

事件: 用户或者浏览器执行某种交互触发的动作
事件流: 事件触发的整个过程

事件流的三个阶段
1. 事件捕获阶段
2. 目标阶段
3. 事件冒泡阶段
