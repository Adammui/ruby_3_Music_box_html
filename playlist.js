function post_playlist(){
    let json= {"playlist_name": document.getElementById('playlist_name').value}
    post(playlist_url, json)
}
function edit_playlist(table_url){
    let id= document.getElementById('playlist_id').value.toString();
    let json= {"playlist_name": document.getElementById('playlist_name').value};
    edit_line(playlist_url,id,json);
}
function delete_playlist() {
    let id= document.getElementById('playlist_id').value.toString();
    delete_line(playlist_url,id);
}
function post_sp(){
    let json= {"song_id": document.getElementById('sp_song').value,
        "playlist_id": document.getElementById('sp_playlist').value}
    post(sp_url, json)
}
function delete_sp() {
    let id= document.getElementById('sp_id').value.toString();
    delete_line(sp_url,id);
}