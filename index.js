var express = require("express")
app = express.createServer(express.logger());
app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/htmls', express.static(__dirname + '/htmls'));

app.get("/", function(req, res) {
    res.sendfile(__dirname + '/index.html', function(err) {
        if (err) res.send(404);
    });
});


port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
/*  width: 188px;
  height: 69px;
  margin: 0 145px 0 293px;
      font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  */