function post(table_url, json_data) {
    $.post({ url: table_url, data:json_data , dataType: "json",
        error: function(errMsg) {
            alert(JSON.stringify(errMsg));
        }, complete: function (){ get(table_url);}})
}
function delete_line(table_url, id){
    $.ajax({ url:table_url +id, type:'delete',
        error: function(errMsg) {
            alert(JSON.stringify(errMsg));
        }, complete: function (){ get(table_url);}})
}
function edit_line(table_url, id, json_data) {
    $.ajax({ url:table_url + id, type:'put', data:json_data ,
        error: function(errMsg) {
            alert(JSON.stringify(errMsg));
        }, complete: function (){ get(table_url);} })
}
function clear(node){
    let results_node = document.getElementById(node)
    while (results_node.lastChild) {
        results_node.removeChild(results_node.lastChild);
    }
}
function get_result (data,result_node) {
    data.forEach( el => {
        let result= document.createElement('div');
        result.textContent = JSON.stringify(el);
        document.getElementById(result_node).appendChild(result);
    })
}
function get(table_url) {
    let result_node= ''
    switch (table_url) {
        case playlist_url:
            result_node = 'result_playlist';
            break;
        case song_url:
            result_node = 'result_song';
            break;
        case artist_url:
            result_node = 'result_artist';
            break;
        case album_url:
            result_node = 'result_album';
            break;
        case sp_url:
            result_node = 'result_song_playlist';
            break;  }
    clear(result_node);
    $.get(table_url, function (data) {get_result(data, result_node);} );
}
