
var socket = io("52.249.219.179:80");

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



