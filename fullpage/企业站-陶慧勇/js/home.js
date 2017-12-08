

//
// window.onload=function(){
	
	/*************banner start******************/
	var barDiv=document.querySelectorAll('.banner-div');
	var barZhe=document.querySelectorAll('.banner-div-zhezhao');
	var dianLi=document.querySelectorAll('.dian >ul >li');
    var dianLiDiv=document.querySelectorAll('.dian >ul >li >div');
	console.log(barDiv);
	var now=0;
	var next=0;
	var to;
	function move(){
		next=now+1;
		if(next>barDiv.length-1){
			next=0;
		}
		barDiv[now].style.zIndex=0;
        barDiv[next].style.zIndex=10;
        barZhe[now].classList.remove('banner-active');
        animate(barDiv[now],{opacity:0},2000);
		animate(barDiv[next],{opacity:1},2000,function(){
            barZhe[next].classList.add('banner-active');
		});
		dianLi[now].classList.remove('dian-li-active');
		dianLi[next].classList.add('dian-li-active');
		dianLiDiv[now].classList.remove('dian-div-active');
		dianLiDiv[next].classList.add('dian-div-active');
		barDiv[next].onmouseover=function () {
            clearInterval(t);
        };
		barDiv[next].onmouseout=function () {
            t=setInterval(move,4000);
        }
		now=next;
	}
	var t=setInterval(move,4000);
    dianLi.forEach((valued,indexd)=>{
    	valued.onmouseover=function(){
            clearInterval(t);
			to=setTimeout(function(){
                barDiv[now].style.zIndex=0;
                barDiv[indexd].style.zIndex=10;
                barZhe[now].classList.remove('banner-active');
                animate(barDiv[now],{opacity:0},1000);
                animate(barDiv[indexd],{opacity:1},1000,function(){
                    barZhe[indexd].classList.add('banner-active');
                });
                dianLi[now].classList.remove('dian-li-active');
                dianLi[indexd].classList.add('dian-li-active');
                dianLiDiv[now].classList.remove('dian-div-active');
                dianLiDiv[indexd].classList.add('dian-div-active');
                now=indexd;
			},300)
		}
        valued.onmouseout=function(){
            t=setInterval(move,4000);
    		clearTimeout(to);

		}
	})
	
	
	/*************banner end******************/

    var  hide=document.querySelector('.hide-head');
    var  goTop=document.querySelector('.go-top');

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

/*}*/
