var send=document.querySelector('.send')
var info=document.querySelector('.infow')
send.addEventListener('click',calc,false)
function calc(){
    var str='';
    var words=document.querySelector('.words')
    words=words.value
    words=words.replace(/ /g,"")
    var len=words.length
    str+='共有:'+len+'個字'
    info.innerHTML=str
}

var cc=document.getElementsByTagName('tbody')
cc=cc[2]
var n=0;
var str=''
var stt='';
for(var i =0;i<cc.rows.length;i++){
    n=cc.rows[i]
    n2=n.getElementsByTagName('td')
    n3=n2[6]
    try{
    if(n3.textContent=='C'||n3.textContent=='P'){
        stt=n.innerText
        stt = stt.replace(/\t/g, "");
        stt = stt.replace(/\n/g, "");
        stt = stt.replace(/20000/g, "");
        stt = stt.replace(/--2/g, "");
        stt ="<br>"+stt+"</br>";
        console.log(stt)
        str+=stt
    }
    }catch{
    }
}
cc.innerHTML=str