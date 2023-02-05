const http =require('http')
const data=require('./firstApiData')
http.createServer((req,res)=>{
res.writeHead(200,{'content-type':'application\json'});
res.write(JSON.stringify(data));
res.end()
}).listen(5000)