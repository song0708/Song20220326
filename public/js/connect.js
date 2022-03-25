function getData(){
    //XMLHttpRequest 物件專門與伺服器做連線
    var req = new XMLHttpRequest();
    req.open("POST","http://127.0.0.1:5500/Song20220325/main.html");
    req.onload=function(){//load事件,偵測連線的狀態結束
        //連線完成
        alert(this.responseText);
    };
    req.sand();//送出連線
}