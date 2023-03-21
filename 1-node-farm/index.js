const fs = require('fs');
const http = require('http');
const url = require('url');

//FILES
/////////////////////////////////////////////////
// BLOCKING - synchronously
// const text= fs.readFileSync('./starter/txt/input.txt', 'utf-8');
// console.log(text);

// const textOut = `writing the content of input.txt: ${text}.\nCreated: ${Date.now()}`
// fs.writeFileSync('./starter/txt/output.txt', textOut, 'utf-8');

// NON-BLOCKING- asynchronously
// fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data) =>{
//     console.log(data);
//     fs.readFile(`./starter/txt/${data}.txt`, 'utf-8',(err, data1)=>{
//         fs.writeFile(`./starter/txt/output.txt`, `new data entered from ${data}.txt file::${data1}`, err=>{
//             if (!err) console.log('File is written successfully');
//         })
//     })
// })
// console.log("Reading file");

//SERVER
//////////////////////////////////////////////////

const productData = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, 'utf-8');
const productDataObj = JSON.parse(productData);
const templateOverview = fs.readFileSync(`${__dirname}/starter/templates/overview.html`, 'utf-8');

const server = http.createServer((req, res)=>{
    const pathname = req.url;

    if(pathname === '/' || pathname === '/overview'){
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.end(templateOverview);
    }
    else if(pathname === '/product'){
        res.end('this is a product');
    }
    else if(pathname === '/api'){
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(productData);
    }
    else{
        res.writeHead(404,{'Content-Type': 'text/html'});
        res.end('<h1>Error</h1>');
    }
});
server.listen(8000, ()=>{
    console.log("server is listening to 8000");
});
