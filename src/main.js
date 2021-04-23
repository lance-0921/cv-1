let html = document.querySelector("#html");
let style=document.querySelector('#style');
string =`/*我叫多乐
*接下来将展示我的前端功底
*首先我要准备一个div
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
    
}
/*接下来我把div变成八卦图
*注意看好了
*首先把div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0.5);    
    border:none;
}
/*
*八卦图是阴阳形成的
*一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, 
    rgba(255,255,255,1) 50%, 
    rgba(0,0,0,1) 50%, 
    rgba(0,0,0,1) 100%);    
}
/*
*接下来加两个神秘的小球
*/
#div1::before{
    width: 100px;
    height: 100px;
    top:0;
    left:50%;
    transform: translateX(-50%);
    border-radius:50%;
    background:radial-gradient(circle, 
    rgba(255,255,255,1) 25%, 
    rgba(255,255,255,1) 25%, 
    rgba(0,0,0,1) 25%);    
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom:0;
    left:50%;
    transform: translateX(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, 
    rgba(0,0,0,1) 25%, 
    rgba(255,255,255,1) 25%);
}
`;
let string2 = ``  //缓存字符串

let n=0;
let step =()=>{
    if(string[n]==='\n'){ 
        //字符时回车就加上<br>
        string2+="<br>";  
    }else if(string[n]===" "){
        string2+="&nbsp;";
    }else{
        //字符不是回车就照搬
        string2+=string[n];
    }
    html.innerHTML=string2;
    style.innerHTML=string.substring(0,n);
    window.scrollTo(0,9999) 
    html.scrollTo(0,9999) 
    //每次打出代码都将滚动条移到最底部
    setTimeout(() => {         
        n=n+1; 
        if(n<string.length){  
            step();   //执行完一次step(),n加1,再接着执行一次
        }else{}
    }, 10);
}
step();


