let html = document.querySelector('#html');
let style = document.querySelector('#style');

let string = `
/*你好，这里是第一行。
 *我要开始写功能了,
 *首先我要准备一个div
 */
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*把div改成一个八卦图
 *首先我要把div变成圆
 */
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦图是由阴阳两部分组成
 *一黑一白
 */
#div1{
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, 
    rgba(0,0,0,1) 50%, rgba(0,0,0,1) 50%, rgba(255,255,
    255,1) 50%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 
    100%);                    
}
/*加两个神秘的小球
 */
#div1::before{
    width: 100px;
    height: 100px;
    top:0;
    left:50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: black; 
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, 
    rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%, 
    rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%, rgba(255,255,
    255,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: white; 
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, 
    rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,
    255,255,1) 100%, rgba(0,0,0,1) 100%, rgba(255,255,255,
    1) 100%, rgba(255,255,255,1) 100%);
}

`;
let string2 = "";
let n = -1;
let step = () => {
    setTimeout(() => {
        n=n+1;
        if(string[n] === '\n'){
            string2 += '<br>';
        }
        else if(string[n] === " "){
            string2 += '&nbsp;'; 
        }else{
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0,9999);
        html.scrollTo(0,9999);
        if(n < string.length-1){
            step();
        }
        
    },0);
}

step();















// let demo = document.querySelector("#demo");
// let string = `你好，我是一名前端新人。`
// let n = 0;

// demo.innerHTML = string.substring(0,n);

// let step = () =>{
//     setTimeout(() => {
//         n=n+1;
//         demo.innerHTML = string.substring(0,n);
        
//         if(n < string.length)
//         { step();}
//     },300)
// }
// step();

