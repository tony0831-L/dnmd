var send=document.querySelector('.send')
var info=document.querySelector('.infow')
send.addEventListener('click',calc,false)
function calc(){
    var str='';
    var words=document.querySelector('.words')
    words=words.value
    words=words.replace(" ","")
    var len=words.length
    str+='共有:'+len+'個字'
    info.innerHTML=str
}