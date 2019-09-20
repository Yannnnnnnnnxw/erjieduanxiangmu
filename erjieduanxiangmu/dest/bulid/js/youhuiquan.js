var fx = document.querySelector('#fx');
fx.style.height = document.documentElement.clientHeight;

var chevronleft = document.querySelector('.chevronleft');
chevronleft.onclick=function(){
    history.go(-1);
}

var out = document.querySelector('.out');
var fx_top = document.querySelector('#fx-top');
var fx_bottom = document.querySelector('#fx-bottom');
out.onclick=function(){
    fx_top.style.display='block';
    fx_bottom.style.display='block';
    document.documentElement.style.overflow = "hidden";
}
fx_top.onclick=function(){
    fx_top.style.display='none';
    fx_bottom.style.display='none';
    document.documentElement.style.overflow = "scroll";
}