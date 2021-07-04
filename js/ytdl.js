let sumb=document.querySelector('.search')
let video=document.querySelector('.vi')
let videotilte=document.querySelector('.videotilte')
sumb.addEventListener('click',(e)=>{
    var url=document.querySelector('.url').value
    var xhr=new XMLHttpRequest()
    xhr.open('POST','../ytdl')
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')
    let link='url='
    link+=url
    xhr.send(link)
    xhr.onload=()=>{
        link=xhr.response
        link=link.split(',')
        let title="標題:"+link[1]+"\n"
        title+="畫質:"+link[2]
        videotilte.textContent=title
        str="<video controls  preload=”auto” class='video'><source src="+link[0]+" type='audio/mpeg' auto;'></video>"
        video.innerHTML=str
    }
},false)