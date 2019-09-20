var alt=document.querySelector('.share-alt')
var fenxiang=document.querySelector('.fenxiang')
var quxiao=document.querySelector('.quxiao')

var qiugou=document.querySelector('.qiugou')
var qg=document.querySelector('.qg')

var yingcang1=document.querySelector('.yingcang1')
var yingcang2=document.querySelector('.yingcang2')

var stara=document.querySelectorAll('.stara')
var staro=document.querySelectorAll('.staro')
var star=document.querySelector('.star')
var starr=document.querySelector('.starr')

var dianshoucang=document.querySelector('.dianshoucang')
var shoucang=document.querySelector('.shoucang')
var times=document.querySelector('.times')
//分享
alt.onclick=function(){
    fenxiang.style.display='block'
    document.documentElement.style.overflow='hidden';
}
quxiao.onclick=function(){
    fenxiang.style.display='none'
    document.documentElement.style.overflow='scroll';
}

//求购
qg.onclick=function(){
    qiugou.style.display='block'
    document.documentElement.style.overflow='hidden';
}
yingcang2.onclick=function(){
    qiugou.style.display='none'
    document.documentElement.style.overflow='scroll';
}

//轮播图
var swiper = new Swiper('.swiper-container',{
    pagination:'.swiper-pagination',//分页器
    loop:true,
    direction:'horizontal',
    effect:'fade',//切换效果
    autoplay:3000,
    // cube:{
    //     slideShadows:true,
    //     shadow:true,
    //     shadowOffset:100,
    //     shadowScale:0.6
    // }
})

//相关商品跳转界面
var xiangguan=document.querySelector('.xiangguan-top')
xiangguan.onclick=function(){
        window.location.href='zuixinshangjia.html';
    }

//返回上一界面
var arrow=document.querySelector('.arrow')
arrow.onclick=function(){
        history.go(-1);
    }

//收藏星星显示
for(i=0;i<stara.length;i++){
    stara[i].index=i
    stara[i].onclick=function(){
        stara[this.index].style.display='none'
        staro[this.index].style.display='block'
    }
}


//收藏星星消失
for(j=0;j<stara.length;j++){
    staro[j].index=j
    staro[j].onclick=function(){
        staro[this.index].style.display='none'
        stara[this.index].style.display='block'
        
    }
}

//收藏
dianshoucang.onclick=function(){
    shoucang.style.display='block'
    document.documentElement.style.overflow='hidden';
}
times.onclick=function(){
    var num = 0;
    staro=document.querySelectorAll('.staro')
    for(let z=0;z<staro.length;z++){
        if(getComputedStyle(staro[z]).display=='block'){
            num++
        }
    }
    if(num!=0){//收藏星星
        star.style.display='none'
        starr.style.display='block'
    }else{
        starr.style.display='none'
        star.style.display='block'
    }
    shoucang.style.display='none'
    document.documentElement.style.overflow='scroll';
}

//出售
var chushou=document.querySelector('.chushou')
    chushou.onclick=function(){
        window.location.href='chushou.html';
    }


//花呗
var timea=document.querySelector('.timea')
var fenqi=document.querySelector('.fenqi')
var huabei=document.querySelector('.huabei')
fenqi.onclick=function(){
    huabei.style.display='block'
    document.documentElement.style.overflow='hidden';
}
timea.onclick=function(){
    huabei.style.display='none'
    document.documentElement.style.overflow='scroll';
}



//选择尺码
var qingxuanze=document.querySelectorAll('.qingxuanze')
var lijimai=document.querySelector('.lijimai')


var xuanzechima=document.querySelectorAll('.xuanzechima')
var jiaqian=document.querySelectorAll('.jiaqian')
var danjia=document.querySelector('.danjia')
var yixuan=document.querySelector('.yixuan')
var qxz=document.querySelector('.qxz')
var mashu=document.querySelector('.mashu')
var danjiaqian=document.querySelector('.danjiaqian')

var jq=document.querySelectorAll('.jq')
var dj=document.querySelector('.dj')
var djq=document.querySelector('.djq')


for(var k=0;k<qingxuanze.length;k++){
    qingxuanze[k].index=k
    qingxuanze[k].onclick=function(){

        lijimai.style.display='block'
        qxz.style.display='none'
        yixuan.style.display='block'
        mashu.innerHTML=xuanzechima[this.index].innerHTML
        dj.innerHTML=jq[this.index].innerHTML
        djq.innerHTML=jq[this.index].innerHTML
        danjia.style.fontSize='0.5rem'
        
        if(getComputedStyle(this).border=='0px none rgb(0, 0, 0)'){
              for(var l=0;l<qingxuanze.length;l++){
            qingxuanze[l].style.border='none'
        }
        qingxuanze[this.index].style.border='0.02rem solid black'
        }else{
            this.style.border='none'
            lijimai.style.display='none'
            djq.innerHTML=price
            dj.innerHTML=price
        }

    }
}

//立即购买
var timeb=document.querySelector('.timeb')
var goumai=document.querySelector('.goumai')
var dianjigoumai=document.querySelector('.dianjigoumai')
dianjigoumai.onclick=function(){
    goumai.style.display='block'
    document.documentElement.style.overflow='hidden';
}
timeb.onclick=function(){
    goumai.style.display='none'
    document.documentElement.style.overflow='scroll';
}


//选择尺寸
var chima=document.querySelector('.chima')
chima.onclick=function(){
    goumai.style.display='block'
    document.documentElement.style.overflow='hidden';
}


//花呗购买
var huabeigoumai=document.querySelector('.huabeigoumai')
huabeigoumai.onclick=function(){
    goumai.style.display='block'
    huabei.style.display='none'
    document.documentElement.style.overflow='hidden';
}

//跳转订单界面
var ljgm=document.querySelector('.ljgm')
    ljgm.onclick=function(){
        var dj1=document.querySelector('.dj')
        window.location.href=`dingdan.html?price=${dj1.innerHTML-0}`
    }


var str = location.href
var num = str.lastIndexOf('=')
var price = str.substr(num+1)-0
if(str.lastIndexOf('=')==-1){
    djq.innerHTML=989
    dj.innerHTML=989
}else{
    djq.innerHTML=price
    dj.innerHTML=price
}






var youhui=document.querySelector('.youhui')
youhui.onclick=function(){
    window.location.href='youhuiquan.html'
}