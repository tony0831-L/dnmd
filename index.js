var express = require("express")
var ytdl=require('ytdl-core')
var bodyParser=require("body-parser");
var app = express();
app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/htmls', express.static(__dirname + '/htmls'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.sendfile(__dirname + '/index1.html', function(err) {
        if (err) res.send(404);
    });
});
app.post('/ytdl',function(req,res){
    let url=req.body.url
    ytdl.getInfo(url).then((info)=>{
        try{
            url=(ytdl.chooseFormat(info.formats,{ quality: '37' }).url)
            let m4a=(ytdl.chooseFormat(info.formats,{ quality: '140' }).url)
            let title=(info.videoDetails.title)
            let p='1080p\n'
            let data=url+","+title+","+p+","+m4a
            res.send(data)
        }catch(err){
            try{
                url=(ytdl.chooseFormat(info.formats,{ quality: '22' }).url)
                let m4a=(ytdl.chooseFormat(info.formats,{ quality: '140' }).url)
                let title=(info.videoDetails.title)
                let p='720p\n'
                let data=url+","+title+","+p+","+m4a
                res.send(data)
            }catch(err){
                try{
                    url=(ytdl.chooseFormat(info.formats,{ quality: '18' }).url)
                    let m4a=(ytdl.chooseFormat(info.formats,{ quality: '140' }).url)
                    let title=(info.videoDetails.title)
                    let p='360p\n'
                    let data=url+","+title+","+p+","+m4a
                    res.send(data)
                }catch(err){
                    let data=("不符合的影片")
                    res.send(data)
                }
            }
        }
    })

})

port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
