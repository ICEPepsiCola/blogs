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

https加密过程是怎样的

```text
HTTPS是在HTTP上建立SSL加密层，并对传输数据进行加密，是HTTP协议的安全版。
HTTPS主要作用是：
（1）对数据进行加密，并建立一个信息安全通道，来保证传输过程中的数据安全；
（2）对网站服务器进行真实身份认证。
传输过程：
1、首先TCP三次握手建立链接，这是数据传输基础，在此之上开始SSL；
2、客户端首先发送Client Hello开始SSL通信，报文中包含客户端支持的SSL版本、随机值Random1、加密算法以及密钥长度等；
3、服务器发送Server Hello，和客户端一样，在报文中包含SSL版本、随机值Random2以及加密组件，此后服务端将证书也发送到客户端；
4、此时客户端需要对服务端发送的证书进行验证，通过操作系统内置的CA证书，将服务器发送的证书的数字签名进行解密，并将证书的公钥进行相同算法的HASH与解密的数字签名解密的内容进行对比，验证证书是否合法有效，是否被劫持更换；
5、客户端验证证书合法，然后生成一个随机值Random3，用公钥对Random3进行加密，生成Pre-Master Key，客户端以Client Key Exchange报文将Pre-Master Key发送到服务端，此后发送Change Cipher Spec报文表示此后数据传输进行加密传输；
6、服务端将Pre-Master Key用自己的私钥解密为Random3，服务端发送Change Cipher Spec报文表示此后数据传输进行加密传输；7、此时客户端与服务端都拥有三个随机字符串，且Random3是密文传输的，是安全状态的，此时则可以使用这三个字符串进行对称加密传输。由于非对称加密慢，不能每次传输数据都进行非对称加密，所以使用非对称加密将密钥协商好然后使用对称加密进行数据传输；8、此时便正常进行HTTP数据传输，但是由于SSL加密的作用，此时的HTTP传输便是安全的，此为HTTPS的传输过程，其中2、3、5、6也被称为SSL四次握手
```
