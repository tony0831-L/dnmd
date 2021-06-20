window.onresize = function(){
   document.querySelector('.banner').style.width = window.innerWidth+"px"
}
var n2=document.querySelector('.send')
var n3=document.querySelector('.sendmb')
  var list=document.querySelector('.list')
  var list2=document.querySelector('.list2')
  var info=document.querySelector('.info')
  var info2=document.querySelector('.info2')
  n2.addEventListener('click',calc,false)
  n3.addEventListener('click',calc2,false)
function calc(){
  var str=''
  var x=document.querySelector('.x').value
  var x1=x.split(',')
  var y=document.querySelector('.y').value
  var y1=y.split(',')
  var xy=[]
  var xx=[]
  var yy=[]
  var n=x1.length
  str+='<tr><th>x</th><th>y</th><th>x*y</th><th>x*x</th><th>y*y</th></tr>'

  var sigmax=0;
  for(var i=0;i<x1.length;i++){
      sigmax+=Math.round(parseFloat(x1[i])*10000)
  }
  sigmax/=10000

  var sigmay=0;
  for(var i=0;i<x1.length;i++){
      sigmay+=Math.round(parseFloat(y1[i])*10000)
  }
  sigmay/=10000

  var sigmaxy =0;
  for(var i=0;i<y1.length;i++){
      xdy=Math.round(x1[i]*y1[i]*10000)
      xdy=xdy/10000
      xy.push(xdy)
      sigmaxy+=Math.round(x1[i]*y1[i]*10000)
  }
  sigmaxy/=10000

  var sigmax2=0;
  for(var i=0;i<y1.length;i++){
      x2=Math.round(x1[i]*x1[i]*10000)
      x2=x2/10000
      xx.push(x2)
      sigmax2+=Math.round(x1[i]*x1[i]*10000)
  }
  sigmax2=sigmax2/10000
  var sigmay2=0;
  for(var i=0;i<y1.length;i++){
      y2=Math.round(y1[i]*y1[i]*10000)
      y2=y2/10000
      yy.push(y2)
      sigmay2+=Math.round(y1[i]*y1[i]*10000)
  }
  sigmay2=sigmay2/10000

  var mtop=(n*sigmaxy)-(sigmax*sigmay)
  var mdown=n*(sigmax2)-(sigmax*sigmax)
  var m=Math.round(mtop/mdown*10000);
  m/=10000

  var b=Math.round((sigmay/n-m*(sigmax/n))*10000);
  b/=10000;

  var ycap=m+'x+'+b

  var rtop=(n*sigmaxy)-(sigmax*sigmay)
  console.log(rtop)
  var rdown=(Math.sqrt((n*sigmax2)-(sigmax*sigmax))*(Math.sqrt((n*sigmay2)-(sigmay*sigmay))))
  console.log(rdown)
  var r=rtop/rdown
  var r2=Math.round(r*r*10000)
  r2=r2/10000

  var lii='';
  for (i=0;i<n;i++){
      lii+='<tr><td>'+x1[i]+'</td><td>'+y1[i]+'</td><td>'+xy[i]+'</td><td>'+xx[i]+'</td><td>'+yy[i]+'</td></tr>'
      console.log(lii)
      str+=lii
      lii='';
  }

  list.innerHTML=str
  str='';
  str+='<br>Σx:'+sigmax+'</br>'
  str+='<br>Σy:'+sigmay+'</br>'
  str+='<br>Σx*y:'+sigmaxy+'</br>'
  str+='<br>Σx*x:'+sigmax2+'</br>'
  str+='<br>Σy*y:'+sigmay2+'</br>'
  str+='<br>m:'+m+'</br>'
  str+='<br>b:'+b+'</br>'
  str+='<br>ycap:'+ycap+'</br>'
  str+='<br>r2:'+r2+'</br>'
  info.innerHTML=str
}

function calc2(){
  var str=''
  var m=document.querySelector('.mval').value
  var b=document.querySelector('.bval').value
  var x=document.querySelector('.xval').value
  var x1=x.split(',')
  var y=document.querySelector('.yval').value
  var y1=y.split(',')
  var yicap=[];
  var yideyicap=[];
  var yideyicap2=[];
  var sigmay=0;
  var tva=0;
  str+='<tr><th>x</th><th>y</th><th>ycap</th><th>y-ycap</th><th>(y-ycap)2</th></tr>'
  for(var i=0;i<y1.length;i++){
      sigmay+=parseFloat(y1[i])
  }
  var yhat=sigmay/y1.length
  yhat=Math.round(yhat*10000)
  yhat/=10000
  console.log("yhat:"+yhat)

  for(var i=0;i<y1.length;i++){
      tva1=(parseFloat(y1[i])-yhat)
      tva1 =tva1*tva1
      tva+=tva1
  }
  tva=Math.round(tva*10000)
  tva/=10000
  console.log("tva:"+tva)
  for(var i=0;i<x1.length;i++){
      var yic=(m*x1[i])+parseFloat(b)
      yic=Math.round(yic*10000)
      yic/=10000
      yicap.push(yic)
  }
  for(var i=0;i<x1.length;i++){
      var ydy=parseFloat(y1[i])-parseFloat(yicap[i])
      ydy=Math.round(ydy*10000)
      ydy/=10000
      yideyicap.push(ydy)
  }
  var unev=0;
  for(var i=0;i<x1.length;i++){
      var ydy2=yideyicap[i]*yideyicap[i]
      ydy2=Math.round(ydy2*10000)
      ydy2/=10000
      yideyicap2.push(ydy2)
      unev+=ydy2;
  }
  unev=Math.round(unev*10000)
  unev/=10000

  var ev=tva-unev;
  var r2=Math.round((ev/tva)*10000)
  r2/=10000

  var lii='';
  for (i=0;i<x1.length;i++){
      lii+='<tr><td>'+x1[i]+'</td><td>'+y1[i]+'</td><td>'+yicap[i]+'</td><td>'+yideyicap[i]+'</td><td>'+yideyicap2[i]+'</td></tr>'
      console.log(lii)
      str+=lii
      lii='';
  }

  var se2=unev/(x1.length-2)
  se2=Math.sqrt(se2)
  se2=Math.round(se2*10000)
  se2/=10000

  list2.innerHTML=str
  var info22=''
  info22+='<br>r2:'+r2+'</br>'
  info22+='<br>可解釋變異:'+ev+'</br>'
  info22+='<br>不可解釋變異:'+unev+'</br>'
  info22+='<br>總變異:'+tva+'</br>'
  info22+='<br>yhat:'+yhat+'</br>'
  info22+='<br>Se:'+se2+'</br>'
  info2.innerHTML=info22
}
