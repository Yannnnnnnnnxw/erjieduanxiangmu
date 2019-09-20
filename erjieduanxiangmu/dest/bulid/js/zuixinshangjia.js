var alt=document.querySelector('.share-alt')
        var fenxiang=document.querySelector('.fenxiang')
        var quxiao=document.querySelector('.quxiao')

        alt.onclick=function(){
            fenxiang.style.display='block'
            document.documentElement.style.overflow='hidden';
        }
        quxiao.onclick=function(){
            fenxiang.style.display='none'
            document.documentElement.style.overflow='scroll';
}
        
var splace=document.querySelectorAll('.splace')
var danpin=document.querySelectorAll('.danpin1')
for(var i=0;i<danpin.length;i++){
    danpin[i].index=i
    danpin[i].onclick=function(){
        window.location.href=`danjianshangpin.html?price=${splace[this.index].innerHTML}`;
    }
}

//返回上一界面
var arrow=document.querySelector('.arrow')
arrow.onclick=function(){
        history.go(-1);
    }
