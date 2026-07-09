const http=require('http'),fs=require('fs'),path=require('path');
const root=__dirname;
http.createServer((req,res)=>{
  let p=decodeURIComponent(req.url.split('?')[0]);
  if(p==='/')p='/index.html';
  const f=path.join(root,p);
  fs.readFile(f,(e,d)=>{
    if(e){res.writeHead(404);return res.end('not found');}
    const ext=path.extname(f).toLowerCase();
    const t={'.html':'text/html','.js':'text/javascript','.css':'text/css'}[ext]||'text/plain';
    res.writeHead(200,{'Content-Type':t});res.end(d);
  });
}).listen(5599,()=>console.log('serving on 5599'));
