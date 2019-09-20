var speed=30; //数字越大速度越慢
demo2.innerHTML=demo1.innerHTML; //克隆demo1为demo2
function Marquee(){
if(demo2.offsetTop-box.scrollTop<=0)//当滚动至demo1与demo2交界时
box.scrollTop-=demo1.offsetHeight //demo跳到最顶端
else{
box.scrollTop++
}
}
var MyMar=setInterval(Marquee,speed);
$(".right-hua").click(function(){
    $(".huadong").animate({left:'-10rem'});
}); 
$(".left-hua").click(function(){
    $(".huadong").animate({left:'0rem'});
}); 
$("#denglu").click(function(){
    $("#denglu_box").animate({left:'0rem'});
}); 
$("#fanhui").click(function(){
    $("#denglu_box").animate({left:'10rem'});
}); 
$(".zhuce").click(function(){
    $("#zhuce_box").animate({left:'0rem'});
}); 
$("#fanhui2").click(function(){
    $("#zhuce_box").animate({left:'10rem'});
}); 
var reg = new RegExp(/^[1-9][0-9]{10}$/);
var reg1 = new RegExp(/^[0-9]{4}$/);
var hqyzm =document.querySelectorAll(".hqyzm")
var yzm1 =document.querySelectorAll(".yzm1")
var sryzm =document.querySelectorAll(".sryzm")
var denglu2 =document.querySelectorAll(".denglu2")
var dl =document.querySelectorAll(".dl")
for(var i=0;i<yzm1.length;i++){
    yzm1[i].index=i
    sryzm[i].index=i
    yzm1[i].oninput=function(){
        console.log(123)
        if(reg.test(yzm1[this.index].value)){
            hqyzm[this.index].style.color="black"
        }else{
            hqyzm[this.index].style.color="#999"
        }
        if((reg.test(yzm1[this.index].value))&&(reg1.test(sryzm[this.index].value))){
            denglu2[this.index].style.background="#292C33"
            dl[this.index].style.color="#FAFDFF"
        }
        else{
            denglu2[this.index].style.background="#AAAABB"
        }
    }
    sryzm[i].oninput=function(){
        if((reg.test(yzm1[this.index].value))&&(reg1.test(sryzm[this.index].value))){
            denglu2[this.index].style.background="#292C33"
            dl[this.index].style.color="#FAFDFF"
        }else{
            denglu2[this.index].style.background="#AAAABB"
        }
    }   
}
// 注册
denglu2[2].onclick=function(){
    console.log(123)
    var arr = document.cookie.split(';')
    for (var i=0;i<arr.length;i++) {
        arr[i] = arr[i].split('=')
        arr[i][0] = arr[i][0].trim()
        if (yzm1[2].value == arr[i][0]) {
            alert('用户名重复，请输入正确的用户名')
            break;
        }
    }
    if (i == arr.length) {
        document.cookie = yzm1[2].value + '=' + sryzm[2].value
    }
    yzm1[2].value = ''
    sryzm[2].value = ''
}
// 注册结束
// 登录
denglu2[1].onclick=function(){
    // 判断是否注册过
var arr = document.cookie.split(';')
    for (var i=0;i<arr.length;i++) {
        arr[i] = arr[i].split('=')
        arr[i][0] = arr[i][0].trim()
        if(arr[i][0] == yzm1[1].value){
            if (arr[i][1] == sryzm[1].value) {
                document.cookie = 'loginUser=' + yzm1[1].value
                location.href = 'index.html'
            }else{
                alert('密码错误，请重新输入密码')
                sryzm[1].value = ''
            }
            break;
        }
    }
    if(i==arr.length){
        alert('该用户名没有被注册')
    }
}
cha.onclick=function(){
    location.href=""
}