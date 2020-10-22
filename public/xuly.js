
var socket = io("192.168.0.101");

socket.on("server-send-files",function(data){
    for(let i=0;i<data.length;i++){
        let link = "/image/"+data[i];

        $("#listImage").append("<a target ='_blank' href="+link+"><img class='img' src="+link+"></a>");
    }
});
socket.on("server-send-new-file",function(data){

    let name = "./image/" + data;
    $("#listImage").append("<a target ='_blank' href="+name+"><img class='img' src="+name+"></a>");
});

$(document).ready(function(){
    socket.emit("client-get-files");
 });