// const http=require('http');
// const express=require('express');
// const path=require('path');
// const app=express();

// //create http server
// const server =http.createServer(app);
// const socketIO=require('socket.io');//changed io to socketio for clarity

// //initialize socket.io by passing the http server(connection between socketio and server)
// const io=socketIO(server);

// //handle socket connection
// io.on('connection',(socket)=>{
//     //handle socket events
// });

// //Route
// app.get('/',(re,res)=>{
//     res.sendFile(path.join(__dirname,'src','app.html'));
// })

// server.listen(2000);
// console.log("Server is running on port 2000");



// 2 nd program


// const http=require('http');
// const express=require('express');
// const path=require('path');
// const app=express();

// //create http server
// const server =http.createServer(app);
// const socketIO=require('socket.io');//changed io to socketio for clarity

// //initialize socket.io by passing the http server(connection between socketio and server)

// const {log}=require("console");
// const io=socketIO(server);

// //handle socket connection

// //Route
// app.get('/',(re,res)=>{
//     res.sendFile(path.join(__dirname,'src','app.html'));
// })

// io.on('connection',socket=>{
//     //handle socket events
//     console.log("a user connected");


// socket.on('disconnect',()=>{
//     //handle socket events
//     console.log("a user disconnected!!");
// })

// });


// server.listen(2000);
// console.log("Server is running on port 2000");
// // console.log("a user connected");


//3 rd program


const http=require('http');
const express=require('express');
const path=require('path');
const app=express();

//create http server
const server =http.createServer(app);
const socketIO=require('socket.io');//changed io to socketio for clarity

//initialize socket.io by passing the http server(connection between socketio and server)

const {log}=require("console");
const io=socketIO(server);

//handle socket connection

//Route
app.get('/',(re,res)=>{
    res.sendFile(path.join(__dirname,'src','app1.html'));
})

io.on('connection',socket=>{
    //handle socket events
    console.log("a user connected");


socket.on('disconnect',()=>{
    //handle socket events
    console.log("a user disconnected!!");
})

socket.on('message',msg=>{
    console.log("Client Message: "+msg);
});

});


server.listen(2000);
console.log("Server is running on port 2000");
// console.log("a user connected");