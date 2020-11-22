
<<<<<<< HEAD
var socket = io("52.249.219.179");
=======
var socket = io("40.76.138.140:80");
>>>>>>> 75e0685e49ff9f36b698df5b23e264b64df02f0c

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
    $("#a1").mousedown(function(ev){
        if(ev.which == 3)
        {
              alert("Right mouse button clicked on element with id myId");
        }
  });
 });
