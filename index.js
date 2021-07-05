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
    let url=req.body.url,hurl,quality,y=0
    if(ytdl.validateURL(url)==true){
        ytdl.getInfo(url).then((info)=>{
            (info.formats).forEach((e)=>{if((e.hasAudio==true)&&(e.hasVideo==true)){if(y<e.itag){hurl=e.url;quality=e.qualityLabel}}})
            let data={
                "title":info.videoDetails.title,
                "video_url":ytdl.chooseFormat(info.formats,{ quality: 'highestvideo' }).url,
                "video_quality":ytdl.chooseFormat(info.formats,{ quality: 'highestvideo' }).qualityLabel,
                "audio_url":ytdl.chooseFormat(info.formats,{ quality: 'highestaudio' }).url,
                "hightest_url":hurl,
                "hightest_quality":quality
            }
            data=JSON.stringify(data)
            res.send(data)
        })
    }else{
        res.send("err")
    }
})

port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
// try{
//     ytdl.getInfo(url).then((info)=>{
//         (info.formats).forEach((e)=>{if((e.hasAudio==true)&&(e.hasVideo==true)){if(y<e.itag){hurl=e.url;quality=e.qualityLabel}}})
//         let data={
//             "title":info.videoDetails.title,
//             "video_url":ytdl.chooseFormat(info.formats,{ quality: 'highestvideo' }).url,
//             "video_quality":ytdl.chooseFormat(info.formats,{ quality: 'highestvideo' }).qualityLabel,
//             "audio_url":ytdl.chooseFormat(info.formats,{ quality: 'highestaudio' }).url,
//             "hightest_url":hurl,
//             "hightest_quality":quality
//         }
//         data=JSON.stringify(data)
//         res.send(data)
//     })
// }catch(err){
//     res.send("err")
//     throw err
// }