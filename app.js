var http = require('http'),
    fs = require('fs');

console.log('html: ' + __dirname );

function send_file (file, type, res, code)
{
    try {
        fs.readFile(__dirname + file, function (err, data) {
            if (err) console.log(err);
            res.writeHead(code, {'Content-Type': type});
            res.write(data);
            res.end();
        });
    }
    catch (e) {
        console.log("File does not exist.");
        send_file('/not_found.html', 'text/html', res, 404);
    }
}

http.createServer(function (req, res) {
    console.log('#######################################');
    console.log('req.url: ' + req.url);

    if (req.url == "/")
      req.url = "/hello.html"; 

    if(req.url.indexOf('.html') != -1){
        console.log('html: ' + req.url);
        send_file(req.url, 'text/html', res, 200);
    }

    else if(req.url.indexOf('.js') != -1){
       console.log('js: ' + req.url);
       send_file(req.url, 'text/javascript', res, 200);
    }

    else if(req.url.indexOf('.css') != -1){
        console.log('css: ' + req.url);
        send_file(req.url, 'text/css', res, 200);
    }
    else {
        console.log('undefined: ' + req.url);
        send_file('/not_found.html', 'text/html', res, 404);
    }
}).listen(8800, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8800/');
