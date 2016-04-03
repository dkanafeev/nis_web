
HOME_PAGE_XIAOMI=1;

var http    = require('http'),
    fs      = require('fs'),
    sqlite3 = require('sqlite3').verbose();

function send_file (file, type, res, code)
{
    try {
        fs.readFile(__dirname + file, function (err, data) {
            if (err) console.log(err);
            else send_data(data, type, res, code);
        });
    }
    catch (e) {
        console.log("File does not exist.");
        send_file('/not_found.html', 'text/html', res, 404);
    }
}

function send_data (data, type, res, code)
{
    res.writeHead(code, {'Content-Type': type});
    res.write(data);
    res.end();
}

function getQueryVariable(variable, query) {
    var vars = query.toString().split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}

function add_record(owner, title, desc, image)
{  
   var db = new sqlite3.Database('mydb.db');
   str = ""
   str = str + "\'" +  owner + "\', "
   str = str + "\'" +  title + "\', "
   str = str + "\'" +  desc  + "\', "
   str = str + "\'" +  image + "\'"
   query="INSERT into device_table (owner, title, desc, image) VALUES (" + str + ")"
   console.log(query);
   db.run(query);
   db.close();
}
 
function del_record(id)
{
   var db = new sqlite3.Database('mydb.db');
   query="DELETE from device_table where id=" + id;
   console.log(query);
   db.run(query);
   db.close();
}

function create_table()
{
    var db = new sqlite3.Database('mydb.db');
    db.run("CREATE TABLE if not exists device_table (id INTEGER PRIMARY KEY, owner TEXT, title TEXT, desc TEXT, image TEXT)");
    for (var i = 0; i < 20; i++) {
        str = "" 
        str = str + "\'Xiaomi\', "
        str = str + "\'Xiaomi MI"+i+"\', "
        str = str + "\'Description1 Description2 Description3\', "
        str = str + "\'http://devdb.ru/data/img/img5601ced4411447.20581044p.jpg\'"
        query="INSERT into device_table (owner, title, desc, image) VALUES (" + str + ")"
        console.log(query);
        db.run(query);
    }
    db.close();
}

function create_data (id, res)
{
   data="";
   switch (id)
   {
      case HOME_PAGE_XIAOMI:
          owner = "Xiaomi";
          var db = new sqlite3.Database('mydb.db');
          db.all("SELECT id, title, desc, image from device_table", function(err, rows){
              data = data + "deviceList = [ \n"; 
              if (err) console.log(err);
              else if (rows.length != 0) {
                  rows.forEach(function (row) {
                      if (err) console.log(err);
                      else data = data +
                           "{\"id\"   : \"" + row.id     + "\", " +
                           "\"title\" : \"" + row.title  + "\", " +
                           "\"desc\"  : \"" + row.desc   + "\", " +
                           "\"image\" : \"" + row.image  + "\"  " +
                           "},\n";              
                  })
              }
              data = data + "];\n render_device(deviceList)"
              console.log(data);
              send_data(data, 'text/javascript', res, 200);
          });
          db.close();
          break;
      default:
         data="topContentText = \"Error!\"";
         send_data (data, 'text/javascript', res, 200);
   }
}

//create_table();
console.log('#######################################');
console.log('############ DATABASE CONTENT #########');
var db = new sqlite3.Database('mydb.db');  
db.all("SELECT id, title, desc, image FROM device_table", function(err, rows) {  
            console.log(rows); 
    });   
db.close(); 

http.createServer(function (req, res) {
    console.log('#######################################');

    if (req.url == "/")
        req.url = "/hello.html"; 

    if(req.url.indexOf('.html') != -1){
        console.log('html: ' + req.url);
        send_file(req.url, 'text/html', res, 200);
    }
    else if(req.url.indexOf('data.js') != -1){
        console.log('js: ' + req.url);
        create_data(HOME_PAGE_XIAOMI, res);
    }
    else if(req.url.indexOf('.js') != -1){
        console.log('js: ' + req.url);
        send_file(req.url, 'text/javascript', res, 200);
    }
    else if(req.url.indexOf('.css') != -1){
        console.log('css: ' + req.url);
        send_file(req.url, 'text/css', res, 200);
    }
    else if(req.url.indexOf('add_record') != -1){
        console.log('add_record: ' + req.url);
        req.on('data', function(data) {
            add_record (getQueryVariable('owner', data), 
                        getQueryVariable('title', data), 
                        getQueryVariable('desc',  data), 
                        getQueryVariable('image', data));            
        })
        send_file('/hello.html', 'text/html', res, 200);
    }
    else if(req.url.indexOf('del_record') != -1){
        console.log('del_record: ' + req.url);
        req.on('data', function(data) {
            del_record (getQueryVariable('id', data))
        })
        send_file('/hello.html', 'text/html', res, 200);
    }
    else {
        console.log('undefined: ' + req.url);
        send_file('/not_found.html', 'text/html', res, 404);
    }
}).listen(8800, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8800/');
