var code=document.getElementsByName('codenote')
var calc=document.getElementsByName('calc')
var word=document.getElementsByName('word')

var c1=document.getElementById('1')
var c2=document.getElementById('2')
var c3=document.getElementById('3')

c1.addEventListener('mouseover',test3,true)
c2.addEventListener('mouseover',test3,true)
c3.addEventListener('mouseover',test3,true)

c1.addEventListener('mouseout',test4,true)
c2.addEventListener('mouseout',test4,true)
c3.addEventListener('mouseout',test4,true)

c1.addEventListener('click',test5,true)
c2.addEventListener('click',test5,true)
c3.addEventListener('click',test5,true)

for(let i=0;i<code.length;i++){
    code[i].addEventListener('mouseover',test,true)
    calc[i].addEventListener('mouseover',test,true)
    word[i].addEventListener('mouseover',test,true)
}
for(let i=0;i<code.length;i++){
    code[i].addEventListener('mouseout',test2,true)
    calc[i].addEventListener('mouseout',test2,true)
    word[i].addEventListener('mouseout',test2,true)
}
for(let i=0;i<code.length;i++){
    code[i].addEventListener('click',test5,true)
    calc[i].addEventListener('click',test5,true)
    word[i].addEventListener('click',test5,true)
}


function test(e){
    let ta=e.target.parentNode
    if(ta.className!="textcontent"){
        ta.style.backgroundColor='#D7D7D7'
        console.log("")
        console.log(ta.className)
    }
}
function test2(e){
    let ta=e.target.parentNode
    if(ta.className!="textcontent"){
        ta.style.backgroundColor=''
    }else if(ta.className!="test"){
        ta.parentNode.style.backgroundColor=''
        console.log(ta.className)
    }else if(ta.className="textcontent"){
        console.log("nmsl")
    }
}

function test3(e){
    e.target.style.backgroundColor='#D7D7D7'
}

function test4(e){
    e.target.style.backgroundColor=''
}

function test5(e){
    let name=e.target.parentNode.id
    console.log("name:"+name)
    if(name=="1"){
        window.location.href="./index.html"
    }
}