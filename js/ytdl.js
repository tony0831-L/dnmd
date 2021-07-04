let sumb=document.querySelector('.search')
let video=document.querySelector('.vi')
let audio=document.querySelector('.ai')
let videotilte=document.querySelector('.videotilte')
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
        if(xhr.status!=503){
            link=link.split(',')
            let title="標題:"+link[1]+"\n"
            title+="畫質:"+link[2]
            videotilte.textContent=title
            str="<video controls  preload=”auto” class='video'><source src="+link[0]+" type='audio/mpeg' auto;'></video>"
            au="<audio controls  preload=”auto” ><source src="+link[3]+" ' auto;'></video>"
            video.innerHTML=str
            audio.innerHTML=au
        }else{
            videotilte.textContent="抱歉目前無法支持這部影片"
        }
    }
},false)
if(window.innerHeight>707){
    height=window.innerHeight
    height=height-707
    console.log(height)
    let str='<div style="height:'+height+'px"></div>'
    console.log(str)
    document.querySelector('.heightbox').innerHTML=str
}
if(window.innerWidth>408){
    var abour=document.querySelector('.cti')
    var about=document.createElement('div')
    about.setAttribute('class','title')
    about.innerHTML='<a href="#">關於我們</a>'
    abour.appendChild(about)
}