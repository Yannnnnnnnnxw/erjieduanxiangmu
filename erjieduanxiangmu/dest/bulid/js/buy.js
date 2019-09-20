// 设置顶部滑动
var myScroll = new IScroll("#wrapper",{
    scrollX:true,
})
var lis = document.querySelectorAll("#box-top li");
for(let i=0;i<lis.length;i++){
    lis[i].onclick=function(){
        for(var j=0;j<lis.length;j++){
            lis[j].style.cssText="color: #B2B1B7; font-size: 0.4rem;font-weight: normal;"
        }
        lis[i].style.cssText="color: #1E1E1E;font-size: 0.6rem;font-weight: 700;"
    }
}
// 搜索跳转
var search1 = document.querySelector('.search1')
search1.onclick=function(){
    window.location.href='search.html';//搜索页面
}
var ss = document.querySelector('.ss');
ss.onfocus=function(){
    window.location.href='search.html';//搜索页面
}
// 分类跳转
var all = document.querySelector('#all');
all.onclick=function(){
    window.location.href='';//全部分类页面
}

// 设置主体内容
var myScroll1 = new IScroll(document.querySelectorAll("#wrapper")[1]);

var swiper = new Swiper('.swiper-container', {
    loop: true, 
    autoplay:3000,
    pagination : '.swiper-pagination',
    paginationClickable :true,
});
// 新品上架部分的跳转
var sort_item = document.querySelectorAll('.sort-item')
for(var i=0;i<sort_item.length;i++){
    sort_item[i].onclick=function(){
        window.location.href='zuixinshangjia.html';//新品上架部分
    }
}
// 全部分类的跳转
var sort_item1 = document.querySelector('.sort-item1')
    sort_item1.onclick=function(){
        window.location.href='';//全部分类页面
    }
// 优惠券的跳转
var coupon_img = document.querySelector('.coupon-img');
coupon_img.onclick=function(){
    window.location.href='youhuiquan.html';//优惠券界面
}


// 商品的跳转
var goods_item = document.querySelectorAll('.goods-item')
var goods_item_price = document.querySelectorAll('.goods-item-price')
for(let i=0;i<goods_item.length;i++){
    goods_item[i].onclick=function(){
        window.location.href=`danjianshangpin.html?price=${goods_item_price[i].innerHTML-0}`;//搜索页面
    }
}

// 设置底部的跳转
var du = document.querySelector('#du');
du.onclick=function(){
    window.location.href='index.html';
}
var goumai = document.querySelector('#goumai');
goumai.onclick=function(){
    window.location.href='buy.html';
}
var fuwu = document.querySelector('#fuwu');
fuwu.onclick=function(){
    window.location.href='fuwu.html';
}
var wo = document.querySelector('#wo');
wo.onclick=function(){
    window.location.href='lipeng.html';
}