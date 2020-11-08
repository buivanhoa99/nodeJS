
var socket = io("localhost:80");

socket.on("server-send-files",function(data){
    alert(111);
    for(let i=0;i<data.length;i++){
        let link = "/image/"+data[i];

        $("#listImage").append("<a target ='_blank' href="+link+"><img class='img' src="+link+"></a>");
    }
});
socket.on("server-send-new-file",function(data){
    alert(222);
    let name = "./image/" + data;
    $("#listImage").append("<a target ='_blank' href="+name+"><img class='img' src="+name+"></a>");
});

$(document).ready(function(){
    socket.emit("client-get-files");
    $("#a1g").mousedown(function(ev){
        if(ev.which == 3)
        {
              alert("Right mouse button clicked on element with id myId");
        }
  });
 });
