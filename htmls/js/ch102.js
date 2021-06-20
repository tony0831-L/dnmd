 var send=document.querySelector('.send')
 var list=document.querySelector('.list')
 var info=document.querySelector('.info')
 send.addEventListener('click',calc,false)
 function calc(){
     var ode2=[];
     var ode=[];
     var ode2de=[];
     var str=''
     str+='<tr><th>o</th><th>e</th><th>o-e</th><th>(o-e)2</th><th>(o-e)2/e</th></tr>'
     var o=document.querySelector('.o').value
     o=o.split(',')
     var e=document.querySelector('.e').value
     e=e.split(',')
//o-e
    var ode1=0;
     for (var i=0;i<o.length;i++){
         ode1=parseFloat(o[i])-parseFloat(e[i])
         ode1=Math.round(ode1*10000)
         ode1/=10000
         ode.push(ode1)
    }
//o-e2
    var ode22=0;
    for (var i=0;i<o.length;i++){
        ode22=ode[i]*ode[i]
        ode22=Math.round(ode22*10000)
        ode22=ode22/10000
        ode2.push(ode22)
    }
//ode2/e
    var x2=0;
    var sigmax2=0;
    for (var i=0;i<o.length;i++){
        x2=ode2[i]/parseFloat(e[i])  
        x2=Math.round(x2*10000)
        x2/=10000
        ode2de.push(x2)
        sigmax2+=x2
    }

    var lii='';
    for (i=0;i<o.length;i++){
        lii+='<tr><td>'+o[i]+'</td><td>'+e[i]+'</td><td>'+ode[i]+'</td><td>'+ode2[i]+'</td><td>'+ode2de[i]+'</td></tr>'
        str+=lii
        lii='';
    }
    list.innerHTML=str;
     str='';
     str+='<br>Σx2:'+sigmax2+'</br>'
     info.innerHTML=str
 }