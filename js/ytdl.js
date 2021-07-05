let sumb=document.querySelector('.search')
let video=document.querySelector('.vi')
let audio=document.querySelector('.ai')
let videotilte=document.querySelector('.videotilte a')
sumb.addEventListener('click',(e)=>{
    var url=document.querySelector('.url').value
    var xhr=new XMLHttpRequest()
    xhr.open('POST','../ytdl')
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')
    let link='url='
    link+=url
    xhr.send(link)
    videotilte.textContent="尋找影片中"
    xhr.onload=()=>{
        link=xhr.response
        if(xhr.response!="err"){
            link=JSON.parse(link)
            let title="標題:"+link.title+"\n"
            title+="最高畫質:"+link.video_quality
            videotilte.textContent=title
            videotilte.setAttribute('href',link.video_url)
            str="<video controls  preload=”auto” class='video'><source src="+link.hightest_url+" type='audio/mpeg' auto;'></video>"
            au="<audio controls  preload=”auto” ><source src="+link.audio_url+" ' auto;'></video>"
            video.innerHTML=str
            audio.innerHTML=au
        }else if(link=="err"){
            videotilte.textContent="抱歉目前無法支持這部影片"
        }
    }
},false)
if(window.innerHeight>707){
    height=window.innerHeight
    height=height-707
    let str='<div style="height:'+height+'px"></div>'
    document.querySelector('.heightbox').innerHTML=str
}
if(window.innerWidth>408){
    var abour=document.querySelector('.cti')
    var about=document.createElement('div')
    about.setAttribute('class','title')
    about.innerHTML='<a href="#">關於我們</a>'
    abour.appendChild(about)
}