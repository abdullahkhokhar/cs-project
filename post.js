
// Fuction for posting annoucment 

var announcement = [];
var index = 0;
function getData() {
    announcement[index] = { 
        title :$("#title").val(),
        date: $("#date").val(),
        clubname: $("#clubname") .val (),
        insertpost: $("#insertpost") .val ()
    };
    index ++;
    var storeObject = JSON.stringify(announcement);
    localStorage.setItem("userData", storeObject);
    
}