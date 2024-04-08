<!-- TOC -->

- [1. JavaScript 简介](#1-javascript-简介)
  - [1.1. 什么是JavaScript？](#11-什么是javascript)
  - [1.2. 和Java的关系？](#12-和java的关系)
  - [1.3. JavaScript能做什么？](#13-javascript能做什么)
  - [1.4. 为什么要学习JavaScript？](#14-为什么要学习javascript)
- [2. Hello, world!](#2-hello-world)
  - [2.1. 三种交互函数](#21-三种交互函数)
  - [2.2. document.write()](#22-documentwrite)
  - [2.3. 变量](#23-变量)
    - [2.3.1. Number 类型](#231-number-类型)
    - [2.3.2. BigInt 类型](#232-bigint-类型)
    - [2.3.3. String 类型](#233-string-类型)
    - [2.3.4. Boolean 类型](#234-boolean-类型)
    - [2.3.5. null 值](#235-null-值)
    - [2.3.6. undefined 值](#236-undefined-值)
    - [2.3.7. Object 类型](#237-object-类型)
    - [2.3.8. typeof 运算符](#238-typeof-运算符)
- [3. More](#3-more)
  - [3.1. 倒计时](#31-倒计时)
    - [3.1.1. 时间处理](#311-时间处理)
    - [3.1.2. 输出](#312-输出)
    - [3.1.3. 定时刷新](#313-定时刷新)
    - [3.1.4. 完整代码](#314-完整代码)
  - [3.2. 打字通](#32-打字通)
    - [3.2.1. 初始化](#321-初始化)
    - [3.2.2. 启动游戏](#322-启动游戏)
      - [3.2.2.1. 禁用开始按钮](#3221-禁用开始按钮)
      - [3.2.2.2. 显示待输入文本](#3222-显示待输入文本)
      - [3.2.2.3. 启动倒计时](#3223-启动倒计时)
    - [3.2.3. 结束游戏](#323-结束游戏)
      - [3.2.3.1. 停止计时器](#3231-停止计时器)
      - [3.2.3.2. 计算并输出得分](#3232-计算并输出得分)
      - [3.2.3.3. 重启开始按钮](#3233-重启开始按钮)
    - [3.2.4. 完整代码](#324-完整代码)

<!-- /TOC -->

# 1. JavaScript 简介
## 1.1. 什么是JavaScript？
JavaScript 最初被创建的目的是“使网页更生动”。  
这种编程语言写出来的程序被称为 脚本。它们可以被直接写在网页的 HTML 中，在页面加载的时候自动执行。  
脚本被以纯文本的形式提供和执行。它们不需要特殊的准备或编译即可运行。

## 1.2. 和Java的关系？
***它和 Java 之间没有任何关系。***  
JavaScript 在刚诞生的时候，它的名字叫 “LiveScript”。但是因为当时 Java 很流行，所以决定将一种新语言定位为 Java 的“弟弟”会有助于它的流行。  
随着 JavaScript 的发展，它已经成为了一门完全独立的语言，并且也拥有了自己的语言规范 ECMAScript。
## 1.3. JavaScript能做什么？
JavaScript 的能力很大程度上取决于它运行的环境。  

浏览器中的 JavaScript 可以做与网页操作、用户交互和 Web 服务器相关的所有事情。   
例如，浏览器中的 JavaScript 可以做下面这些事：
- 在网页中添加新的 HTML，修改网页已有内容和网页的样式。
- 响应用户的行为，响应鼠标的点击，指针的移动，按键的按动。
- 向远程服务器发送网络请求，下载和上传文件（所谓的 AJAX 和 COMET 技术）。
- 获取或设置 cookie，向访问者提出问题或发送消息。
- 记住客户端的数据（“本地存储”）。

## 1.4. 为什么要学习JavaScript？
1. 交互性和动态性：JavaScript 是一种用于在网页上实现交互性和动态性的脚本语言。通过 JavaScript，你可以为用户提供更丰富、更动态的用户体验，例如表单验证、动画效果、页面内容的动态更新等。
2. 客户端脚本语言：JavaScript 在客户端执行，也就是在用户的浏览器上运行，这意味着你可以在用户的设备上直接操作和控制网页的行为，而不需要发送请求到服务器。这样可以减少服务器的负载，提高网页的响应速度。
3. 跨平台兼容性：JavaScript 是一种跨平台的脚本语言，几乎所有的现代浏览器都支持 JavaScript。这意味着你可以编写一次 JavaScript 代码，然后在多个不同的浏览器和操作系统上运行，而不需要针对每个平台编写专门的代码。
4. 强大的功能和库支持：JavaScript 语言本身提供了许多功能，例如操作 DOM 元素、处理表单数据、发送 AJAX 请求等。此外，JavaScript 生态系统中有大量的开源库和框架，如 React、Angular、Vue.js 等，可以帮助你更高效地开发复杂的 Web 应用程序。
5. 与后端集成：对于全栈开发人员来说，JavaScript 在后端也非常有用。通过 Node.js，你可以使用 JavaScript 运行在服务器端，构建高性能和可扩展的 Web 服务器和应用程序。

# 2. Hello, world!
## 2.1. 三种交互函数
在此我们先介绍三种交互函数，以便后续的一些简单的小实例使用。  
`alert`函数显示信息：
```js
alert('Hello, world!');
```
[HelloWorld](./Sample/HelloWorld.html)   


`prompt`函数要求用户输入文本。点击确定返回该文本，点击取消返回`null`：
```js
let name = prompt('What\'s your name?', "World");
alert(`Hello, ${name}!`);
```
[Prompt](./Sample/Prompt.html)

> JavaScript 将换行符理解成“隐式”的分号。这也被称为 自动分号插入。所以可以省略分号。

`confirm`函数显示信息等待用户点击确定或取消。点击确定返回`true`，点击取消返回`false`：
```js
let isRobot = confirm("Are you a robot?");
if (isRobot) {
    alert("Please quit!");
} else {
    alert("Welcome!");
}
```
[Confirm](./Sample/Confirm.html)

## 2.2. document.write()
`document.write()` 方法可向文档中写入文本内容，可以是HTML代码。
如果在文档已完成加载后执行 `document.write()`，整个 HTML 页面将被覆盖。
```js
document.write(x); // 写入x的内容
document.write("</br>"); // 写入换行符
```


## 2.3. 变量
在 JavaScript 中创建一个变量,我们可以使用 var、let 或 const 声明变量来存储数据。  
- let — 现代的变量声明方式。
- var — 老旧的变量声明方式。
- const — 类似于 let，但是变量的值无法被修改。
  
```js
let message;
message = 'Hello';
document.write(message);
document.write("</br>");

message = 1;
document.write(message);
```
[Let](./Sample/Let.html)

> JavaScript是一种**动态类型**的编程语言，意思是虽然编程语言中有不同的数据类型，但是你定义的变量并不会在定义后，被限制为某一数据类型。

### 2.3.1. Number 类型
`number` 类型代表浮点数和整数，除了常规的数字，还包括“特殊数值”。
- `Infinity`代表数学概念中的无穷大，`-Infinity`即负无穷大；
- `NaN`代表一个计算错误；  
  
  `NaN`是粘性的，任何对`NaN`的进一步数学运算都会返回`NaN`：
```js
document.write(3 * NaN); // NaN
document.write("</br>");

document.write("not a number" / 2 - 1); // NaN
document.write("</br>");

document.write(NaN ** 0);  // 1
```
  [NaN](./Sample/NaN.html)

### 2.3.2. BigInt 类型
`number` 类型无法安全地表示大于$(2^{53}-1)$，或小于$-(2^{53}-1)$的整数。
```js
// 尾部加"n"表示这是一个 BigInt 类型
const bigInt = 1234567890123456789012345678901234567890n;
```
### 2.3.3. String 类型
在 JavaScript 中，有三种包含字符串的方式。
1. "双引号"
2. '单引号'
3. \`反引号\`
```js
 let name = "John";
 document.write(`Hello, ${name}!`); // 反引号支持嵌入一个变量
 document.write("</br>");

 document.write(`Hello, ${1 + 2}!`); // 嵌入一个表达式
 document.write("</br>");

 document.write("Hello, ${name}!"); // 使用双引号不支持嵌入
```
[String](./Sample/String.html)

### 2.3.4. Boolean 类型
`boolean` 类型仅包含两个值：`true`和 `false`。

### 2.3.5. null 值
JavaScript 中的 `null` 仅仅是一个代表“无”、“空”或“值未知”的特殊值。

### 2.3.6. undefined 值
`undefined` 的含义是 未被赋值。

### 2.3.7. Object 类型
`object`用于储存数据集合和更复杂的实体。
我们可以用以下两种用法的任意一种来存创建一个空的对象：
```js
let user = new Object(); // “构造函数”的语法
let user = {}; // “字面量”的语法
```
一个对象中可以有多个属性，每个属性有其键和值,属性的值可以是任意类型：
```js
let user = {
    name: "John",
    age: 30,
    "favorite movie": "Citizen Kane" // 多词属性名需要加引号
};

user.name = "Kane"; // 点符号可以访问非多词属性
user["favorite movie"] = "The Pianist";// 方括号均可以访问

let key = prompt("What do you want to know about the user?", "favorite movie");
document.write(user[key]);
```
[Object](./Sample/Object.html)

相比于其他语言，JavaScript 的对象有一个需要注意的特性：能够被访问任何属性。即使属性不存在也不会报错，读取不存在的属性只会得到 `undefined`。  
此外，我们可以使用 `in` 来检查属性是否存在：
```js
 let user = {
     name: "John",
     // 删去age
     "favorite movie": "Citizen Kane"
 };

 document.write("age" in user);
 document.write("</br>");

 document.write("name" in user);
```
[In](./Sample/In.html)

借助`in`我们可以列出user的所有属性：
```js
 let user = {
     name: "John",
     age: 30,
     "favorite movie": "Citizen Kane"
 };

 for (let key in user) {
     document.write(key + " : " + user[key]);
     document.write("</br>");
 }
```
[ForIn](./Sample/ForIn.html)

### 2.3.8. typeof 运算符
`typeof` 运算符返回参数的类型。对`typeof x`的调用会以字符串形式返回数据类型：
```js
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof null // "object"

typeof alert // "function"
```
`typeof null`的结果为 `"object"`。这是官方承认的 `typeof` 的错误，这个问题来自于 JavaScript 语言的早期阶段，并为了兼容性而保留了下来。

# 3. More
## 3.1. 倒计时
让我们试着来实现一个倒计时功能，要实现该功能，我们需要：
1. 当前时间、目标时间，以及二者的差值，再将差值转换为格式化数据；
2. 输出；
3. 定时刷新差值数据。

### 3.1.1. 时间处理
`Date` 对象用于处理日期和时间。
初始化一个日期：

```js
 let today = new Date(); // 当前时间
 let someDay = new Date("Apr 12, 2024 10:05:00"); // 2024.4.12 10:05:00

 // 另外两种初始化方式
 let dayOne = new Date(2024, 4, 12); // 2024.4.12 00:00:00
 let dayTwo = new Date(2024, 4, 12, 8, 30, 0); // 2024.4.12 08:30:00
```
要获取用户输入的目标时间，可以结合之前介绍的交互函数`prompt`:
```js
let key = prompt("Count down to: ", "Apr 12, 2024 10:05:00");
let countDownDate = new Date(key);
```


对于Date对象，我们可以使用`getTime()`函数来计算当前时间与目标时间的差值。  
函数返回值为从1970年1月1日到该日期的毫秒数。
```js
let key = prompt("Count down to: ", "Apr 12, 2024 10:05:00");
let countDownDate = new Date(key).getTime();
let now = new Date().getTime();
let disdance = countDownDate - now; // 差值

// 将差值（差值单位为毫秒）转换为对应的天、时、分、秒
// Math.floor() 函数对x向下取整
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);
```
通过以上方式，我们就可以获得差值的格式化数据。

### 3.1.2. 输出
当浏览器载入 HTML 文档, 它就会成为 Document 对象。  
Document 对象是 HTML 文档的根节点。   
Document 对象使我们可以从脚本中对 HTML 页面中的所有元素进行访问。   

`getElementById()` 方法可返回对拥有指定 ID 的第一个元素对象的引用。
`innerHTML` 可以设置或者返回元素的内容。
```js
// 将数据赋值给id为demo的元素
document.getElementById("demo").innerHTML = days + "天 " + hours + "时 "
   + minutes + "分 " + seconds + "秒 ";
```
通过以上方式，我们就可以将差值的数据放在对应的格式里并赋值给id为demo的元素。

### 3.1.3. 定时刷新
在JavaScript中使用计时事件是很容易的，两个关键方法是：
- `setInterval()` 间隔指定的毫秒数不停地执行指定的代码；
- `setTimeout()` 在指定的毫秒数后执行指定代码。  

我们利用 `setInterval()` 来完成数据的定时刷新：
```js
let x = setInterval(function () {
    // 获取当前时间，计算差值，并将值赋给demo元素
}, 1000); // 每秒执行一次
```

我们将三个部分整合就得到了完整的程序。

### 3.1.4. 完整代码
[倒计时](./Sample/Time.html)
```html
<!DOCTYPE HTML>
<html>
<p>距离下课还有</p>
<p id="demo"></p>
<style>
    p {
        text-align: center;
        font-size: 60px;
    }
</style>

<script>
    // 获取我们的目标时间
    let key = prompt("Count down to: ", "Apr 12, 2024 10:05:00");
    let countDownDate = new Date(key).getTime();

    let x = setInterval(function () {

        // 获取当前时间
        let now = new Date().getTime();

        // 计算当前时间与目标时间的差值
        let distance = countDownDate - now;

        // 将差值（差值单位为毫秒）转换为对应的天、时、分、秒
        // floor函数对x向下取整
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // 将计算结果以id为“demo”的元素输出
        document.getElementById("demo").innerHTML = days + "天 " + hours + "时 "
            + minutes + "分 " + seconds + "秒 ";

        // 已抵达目标时间
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "已下课！";
        }
    }, 1000);
</script>

</html>
```

## 3.2. 打字通
下面让我们来实现一个简单的打字游戏。   
由于主要介绍JavaScript，相应的HTML配置和CSS配置在此不作展开介绍。

我们将游戏划分为以下几个部分：
1. 启动游戏；
2. 结束游戏。

首先，让我们来完成一些初始化。  

### 3.2.1. 初始化
`querySelector()` 方法返回文档中匹配指定 CSS 选择器的一个元素。    
这里的各个元素均在HTML文件中预先声明，此处通过函数调用进行处理。
```js
const text ="..."; //填充任意内容
const container = document.querySelector(".container");  // 提示框
const input = document.querySelector("textarea");  // 输入框
const button = document.querySelector("button");  // 开始按钮
const timer = document.getElementById("timer");  // 倒计时
input.value = "";  // 初始化
let countdown;  // 计时器
```

### 3.2.2. 启动游戏
我们设置了开始按钮用来启动游戏，但是目前该按钮只有显示效果，鼠标单击它是没有反应的，需要我们为它添加一个点击事件监听器。

`addEventListener()` 方法为指定元素指定事件处理程序。
```js
element.addEventListener(event, function, useCapture);
```
- 第一个参数是事件的类型（比如 `click` 或 `mousedown` ）；
    > 当鼠标指针移到元素上方，并按下鼠标按键（左、右键均可）时，会发生`mousedown`事件；
    > 当鼠标指针停留在元素上方，然后按下并松开鼠标左键时，会发生一次`click`事件。
- 第二个参数是当事件发生时我们需要调用的函数；
- 第三个参数时布尔值，指定使用事件冒泡还是事件捕获。此参数是可选的。

***Simple Case Here***

我们需要在鼠标单击`button`按钮时，完成一些初始化和调用启动游戏函数。

```js
button.addEventListener("click",function (){
    // 设置倒计时时间
    timer.textContent = "10";

    // 清空输入框和输出文本区域
    input.value = "";
    container.textContent = "";

    // 启动游戏
    startGame();
});
```

下面我们构造 `startGame()` 函数来启动游戏。  
启动游戏时，我们要实现如下功能：
1. 游戏启动后，禁用开始按钮；
2. 显示待输入文本；
3. 启动倒计时。

#### 3.2.2.1. 禁用开始按钮

我们可以为按钮添加一个 `disabled` 属性，来使该按钮不可用：

```js
button.disabled = true; // 禁用开始按钮
```

#### 3.2.2.2. 显示待输入文本

我们可以使用 `textContent` 来设置元素的内容：

```js
container.textContent = text; // 显示待输入文本
```

#### 3.2.2.3. 启动倒计时

前面我们已经完成了一个简单的倒计时程序，这里我们使用相同的 `setInterval()` 方法来实现计时器：

```js
countdown = setInterval(() => {
    const remainingTime = parseInt(timer.textContent) - 1; 
    if (remainingTime === 0) {
        // 时间用完，游戏结束
        endGame();
    }

    timer.textContent = remainingTime; // 更新倒计时
}, 1000);
```
> `parseInt()` 实现 `string` 到 `int` 的强制类型转换；
> `===` 是JavaScript中的严格相等，即在比较元素时不进行任何类型转换。

将以上内容组合即得到了 `startGame()` 函数。

### 3.2.3. 结束游戏
结束游戏时，我们需要实现如下功能：
1. 停止计时器；
2. 计算并输出得分；
3. 重启开始按钮。

#### 3.2.3.1. 停止计时器
实现停止计时器，我们可以用 `clearInterval()` 来停止 `setInterval()` 方法执行的函数代码：
```js
clearInterval(countdown); // 停止计时器
```
#### 3.2.3.2. 计算并输出得分
要构造一个计算得分的函数 `calculateScore()` ，我们需要将输入内容与显示内容进行一些字符串处理：  
```js
function calculateScore() {
   const userText = input.value.trim();
   const correctText = text.trim();
   const userWords = userText.split(" "); // 输入内容的单词序列
   const correctWords = correctText.split(" "); // 显示内容的单词序列
   let score = 0;

   for (let i = 0; i < userWords.length; i++) {
       if (userWords[i] === correctWords[i]) {
           score++;
       }
   } // 比对单词序列

   return score;
}
```
> `trim()` 方法用于删除字符串的头尾空白符，空白符包括：空格、制表符 tab、换行符等其他空白符等。
> `trim()` 方法不会改变原始字符串。
> `split()` 方法用于根据给定参数拆分字符串。

#### 3.2.3.3. 重启开始按钮
重启开始按钮则只需要将其 `disabled` 属性值改为 `false` 即可。
```js
button.disabled = false; // 重启开始按钮
```

### 3.2.4. 完整代码
[打字通](./Sample/Type.html)
```js
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>打字通</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            -moz-user-select: none;
            /*火狐*/
            -webkit-user-select: none;
            /*webkit浏览器*/
            -ms-user-select: none;
            /*IE10*/
            -khtml-user-select: none;
            /*早期浏览器*/
            -o-user-select: none;
            user-select: none;
        }

        .bigBox {
            width: 50%;
            background-color: #eec357;
            margin: 40px auto;
            box-sizing: border-box;
            padding: 20px;
            border-radius: 30px;
            box-shadow: 0px 0px 30px 9px #939393;
        }

        .container {
            margin: 0 auto;
            text-align: center;
            padding: 20px;
        }

        textarea {
            width: 100%;
            height: 200px;
            margin: 20px 0;
            font-size: 20px;
            border: none;
        }

        .operate {
            width: 20%;
            margin: 0 auto;
            text-align: center;
        }

        button {
            font-size: 24px;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        #timer {
            font-size: 48px;
            margin: 20px;
        }
    </style>
</head>

<body>
    <div class="bigBox">
        <div class="container">你准备好了吗？</div>
        <textarea name="" placeholder="开始输入..." id="" style="resize: none" cols="30" rows="10"></textarea>
        <div class="operate">
            <button>开始</button>
            <div id="timer">10</div>
        </div>
    </div>

    <script>
        const text =
            "You got a dream, you gotta protect it.\
             People can't do something themselves,\
              they wanna tell you you can't do it.\
               If you want something, go get it.";

        const container = document.querySelector(".container");
        const input = document.querySelector("textarea");
        const button = document.querySelector("button");
        const timer = document.getElementById("timer");
        input.value = "";

        let countdown;

        function startGame() {
            // 游戏开始后，禁用按钮
            button.disabled = true;

            // 显示文本
            container.textContent = text;

            // 启动倒计时
            countdown = setInterval(() => {
                const remainingTime = parseInt(timer.textContent) - 1;
                if (remainingTime === 0) {
                    // 时间用完，游戏结束
                    endGame();
                }

                timer.textContent = remainingTime;
            }, 1000);
        }

        function endGame() {
            // 停止倒计时
            clearInterval(countdown);

            // 计算得分
            const score = calculateScore();
            const scoreMessage = `你的得分是 ${score} 分！`;
            container.textContent = scoreMessage;

            button.disabled = false;
        }

        function calculateScore() {
            const userText = input.value.trim();
            const correctText = text.trim();
            const userWords = userText.split(" ");
            const correctWords = correctText.split(" ");
            let score = 0;

            for (let i = 0; i < userWords.length; i++) {
                if (userWords[i] === correctWords[i]) {
                    score++;
                }
            }

            return score;
        }

        // 添加按钮点击事件监听器
        button.addEventListener("click", () => {
            // 设置倒计时时间
            timer.textContent = "10";

            // 清空输入框和输出文本区域
            input.value = "";
            container.textContent = "";

            // 启动游戏
            startGame();
        });
    </script>
</body>

</html>
```