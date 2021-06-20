var ch=document.getElementById('ch')
ch.addEventListener('change',updata,false)
function updata(e){
    var url=''
    var select = e.target.value
    select1=Math.round(select)
    if(select1==9 && select!=9.4){
        window.location.href='./htmls/ch9.html'
    }else if(select1==10){
        window.location.href='./htmls/ch10.html'
    }else if(select==9.4){
        window.location.href='https://www.socscistatistics.com/tests/multipleregression/default.aspx'
    }else if(select==10.2){
        window.location.href='./htmls/ch102.html'
    }
}