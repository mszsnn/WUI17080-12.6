

window.onload=function(){
    let hide=document.querySelector('.hide-head');
    let goTop=document.querySelector('.go-top');

    window.onscroll=function(){
         obj=document.body.scrollTop||document.documentElement.scrollTop;
            if(obj>400){
                hide.style.top=0+'px';
                goTop.style.opacity=1;
            }else if(obj<=400){
                hide.style.top=-80+'px';
                goTop.style.opacity=0;
            }
    }

    goTop.onclick=function(){
        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0});


    }

}