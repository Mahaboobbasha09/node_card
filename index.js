let http = require('http')

let fs = require('fs')

let server = http.createServer((req,res)=>{
    if(req.method=="POST"){
         fs.readFile("./res.json",(err,data)=>{
                if(err){
                    console.log(err);
                }
                else{
                    res.end(data.toString());
                }
            });
    }
})
port=3000;


server.listen(port,()=>{
    console.log("server is running " + "http://localhost:" +port)
})