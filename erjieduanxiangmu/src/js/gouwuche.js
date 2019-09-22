var xuan1=document.getElementsByClassName("xuan1")
var biao1=document.getElementsByClassName("biao1")

var scend=document.getElementsByClassName("biaozhi")[0]
var xianjia=document.getElementsByClassName("xianjia")[0]
var danjia=document.getElementsByClassName("danjia")[0]
var zongjia=document.getElementsByClassName("zongjia")[0]
var str=location.href
var num=str.lastIndexOf("=")
var price=str.substr(num+1)
if(num!=-1){
    xianjia.innerHTML=price
    danjia.innerHTML=price
    zongjia.innerHTML=price
}else{
    xianjia.innerHTML=989
    danjia.innerHTML=989
    zongjia.innerHTML=989
}

for(var i=0;i<xuan1.length;i++){
    xuan1[i].index=i
    xuan1[i].onclick=function(){
        for(var j=0;j<biao1.length;j++)
        {
            biao1[j].style.display="none"
        }
        biao1[this.index].style.display="block"
    }
}

var jia =document.getElementsByClassName("jia")
var jian =document.getElementsByClassName("jian")
var shuliangkuang =document.getElementsByClassName("shuliangkuang")
var xianjia =document.getElementsByClassName("xianjia")
var jine =document.getElementsByClassName("danjia")
var zongjia =document.getElementsByClassName("zongjia")[0]
var jianshu =document.getElementsByClassName("jianshu")[0]

for(var i=0;i<jia.length;i++){
    jia[i].a=i
    jia[i].onclick=function(){
    shuliangkuang[this.a].value++
    jine[this.a].innerHTML=(shuliangkuang[this.a].value-0)*(xianjia[this.a].innerHTML-0)
    zongjia.innerHTML=(xianjia[this.a].innerHTML-0)+(zongjia.innerHTML-0)
    jianshu.innerHTML++
    }
}
for(var j=0;j<jian.length;j++){
    jian[j].a=j
    jian[j].onclick=function(){
        if(shuliangkuang[this.a].value<=1){

        }else{
            shuliangkuang[this.a].value--
            jine[this.a].innerHTML=(shuliangkuang[this.a].value-0)*(xianjia[this.a].innerHTML-0)
            zongjia.innerHTML=(zongjia.innerHTML-0)-(xianjia[this.a].innerHTML-0)
            jianshu.innerHTML--
    }
    }
}
var zuo=document.getElementsByClassName("zuo")[0]
zuo.onclick=function(){
    window.location.href="lipeng.html"
}

var slk = document.querySelector('#slk');
var xj = document.querySelector('#xj');
var dj = document.querySelector('#dj');
var str = location.href;
var num = str.lastIndexOf('=');
var price = str.substr(num+1);
if(num==-1){
    xj.innerHTML=989
    slk.value=1
}else{
    xj.innerHTML=price
    slk.value=1
}


scend.onclick=function(){
    window.location.href=`shouyintai.html?price=${zongjia.innerHTML-0}`
}