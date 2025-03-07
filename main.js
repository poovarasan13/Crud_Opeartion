const http=require('http');

http.createServer(function(req,res){
      res.write("Myself Poovarasan")
      res.end()
}).listen(8080);