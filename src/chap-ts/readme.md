# 编译 TS 文件

```bash
tsc index.ts
```

将 ts 文件编译成 js 文件，然后通过 node 来运行 js 文件。

```bash
node index.js
```

# 编译并 TS 文件

首先需要全局安装 ts-node。

```bash
ts-node index.ts
```

该命令不会生成 js 文件，而是编译并运行 ts 文件。

# 什么是 TS

TypeScript 是 JavaScript 的超集，由于 JavaScript 本身的一些缺陷，比如，类的私有属性定义方式只能通过特殊的字符，如“#”隐藏属性，但是从根本上不是隐藏其属性。

但是 TypeScript 引入了如同 Java 那样，对属性有属性访问修饰符的新特性，如 private、public、protected。

JavaScript 本身是没有抽象类的，TypeScript 对其进行了补充，就像其他高级编程语言一样，有了对普通类进一步抽象的类，即抽象类。

除了这些，在 TypeScript 中，可以为变量、函数的返回值类型等进行补充说明，指定它们的类型，提高 JavaScript 在大型项目中的能力，并且减少多人开发时带来的 BUG。

JavaScript 有了 TypeScript 而发展的越来越像 Java、C#等高级编程语言。由于 TypeScript 不是 ECMA(制定 JavaScript 标准的国际组织)制定和提出的新特性,而是微软基于 Node.js 开发出来的 JavaScript 超集(因为它不是取代 JavaScript 的，而是对其进行扩展的)，所以，各大浏览器厂商并不支持直接 TypeScript 运行在浏览器中。

但是，TypeScript 是目前以及以后前端人员学习的必备知识点和技术，说不定未来 ECMA 就会实装这些新特性。
