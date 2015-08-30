
function showJson(){
    var flickerAPI = "http://504080.com/api/v1/services/services/categories";

    $.getJSON( flickerAPI, {

    }).done(function(json){
        console.log(JSON.stringify(json));
    });

}

showJson();

