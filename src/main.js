let html = document.querySelector('#html')
let style = document.querySelector('#style')
let n = 0;
let string2 = " ";
let string = `/*你好，我叫小王
接下来我要演示一下我的前端功底了
首先我要准备一个div*/
#div1{
    width:200px;
    height:200px;
    border:1px solid red;
}
/*然后将这个div变成一个圆*/
#div1{
    border-radius:50%;
    box-shadow:0,0,5px,#000;       
}
/*八卦是阴阳两极的
所以要将这个圆变成黑白*/
#div1{
    background:linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/*再给阴阳鱼添两只眼睛*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:0;
    border-radius:50%;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:0;
    border-radius:50%;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%);
}
`
function sept() {
    if (string[n] === "\n") {
        string2 = string2 + '<br>'
    } else if (string[n] === " ") {
        string2 += '&nbsp;'
    } else { string2 = string2 + string[n] }
    html.innerHTML = string2
    style.innerHTML = string.substring(0, n)
    window.scrollTo(0, 9999);
    html.scrollTo(0, 9999);
    if (n < string.length - 1) {
        n = n + 1
        setTimeout(() => { sept() }, 50)
    } else {
        return
    }
}
sept()

