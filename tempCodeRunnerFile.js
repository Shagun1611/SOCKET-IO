    //handle socket events
});

//Route
app.get('/',(re,res)=>{
    res.sendFile(path.join(__dirname,'src','app.html'));
})

server.listen(2000);
console.log("Server is running on port 2000");
