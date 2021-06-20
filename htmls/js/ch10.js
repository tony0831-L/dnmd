window.onresize = function(){
    document.querySelector('.banner').style.width = window.innerWidth+"px"
 }
 var send=document.querySelector('.send')
 var list=document.querySelector('.list')
 var info=document.querySelector('.info')
 send.addEventListener('click',calc,false)
 function calc(){
     var ei=[];
     var x2=[];
     var str=''
     str+='<tr><th>x</th><th>d</th><th>oi</th><th>ei</th><th>x2</th></tr>'
     var x1=document.querySelector('.x').value
     x1=x1.split(',')
     var n=document.querySelector('.n').value
     n=parseInt(n)
     var d=document.querySelector('.d').value
     d=d.split(',')
     var oi=document.querySelector('.oi').value
     oi=oi.split(',')
     var e=0;
     for (var i=0;i<d.length;i++){
        e=n*d[i];
        ei.push(e)
    }
     var xt=0,xd=0,x=0,x2s=0;
     for (var i=0;i<d.length;i++){
         xt=(parseInt(oi[i])-ei[i]);
         xt*=xt;
         xd=ei[i]
         x=Math.round((xt/xd)*10000)
         x/=10000
         x2.push(x)
         x2s=x2s+x
     }
     var lii='';
     for (i=0;i<d.length;i++){
         lii+='<tr><td>'+x1[i]+'</td><td>'+d[i]+'</td><td>'+oi[i]+'</td><td>'+ei[i]+'</td><td>'+x2[i]+'</td></tr>'
         str+=lii
         lii='';
     }
     list.innerHTML=str;
     str='';
     str+='<br>x2:'+x2s+'</br>'
     info.innerHTML=str
 }