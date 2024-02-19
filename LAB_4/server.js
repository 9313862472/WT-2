 const http = require('http')
 const fs = require('fs')

 const server = http.createServer((request, response)=>{
    response.writeHead(200,'content-type','text/html')
    

    if(request.url=='/home'&&request.method=='GET'){
        const hometdata=fs.readFileSync('./home.html','utf-8');
        response.write(hometdata)
        response.end();
    } 
    else if (request.url=='/contact'&&request.method=='GET'){
            const contactdata=fs.readFileSync('./contact.html','utf-8');
             response.write(contactdata)
            response.end();
    }
    else if (request.url=='/about'&&request.method=='GET'){
        const aboutdata=fs.readFileSync('./about.html','utf-8');
         response.write(aboutdata)
         response.end();
    }
 }).listen(3000,()=>{
    console.log('sarver started on porno 3000')
})