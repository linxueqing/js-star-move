let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/* 你好，我叫初见
 * 今天我要送世界一颗爱心
 * 让世界充满爱
 * 首先准备两个圆
 * 定位到左右两边
 **/
.left {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    top: 0;
    left: 0;
}
.right {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    top: 0;
    left: 76px;
}
/* 再准备一个正方形
 * 转45度成菱形放到两个圆正下方
 **/
.center {
    width: 100px;
    height: 100px;
    background-color: red;
    transform: rotateZ(45deg);
    position: absolute;
    top: 37.8px;
    left: 37.8px;
}
`;

let newString = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    //转成html的回车  //转成html的空格
    if (string[n] === "\n") {
      newString += "<br>";
    } else if (string[n] === " ") {
      newString += "&nbsp;";
    } else {
      newString += string[n];
    }
    html.innerHTML = newString;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    if (n < string.length - 1) {
      // 如果 n 不是最后一个,就继续
      n += 1;
      step();
    }
  }, 50);
};

step(); // 1=>2
