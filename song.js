song_url = 'https://ruby-3-music-box.herokuapp.com/songs/';

function post_song(){
    let json= {"song_name": document.getElementById('song_name').value,
        "genre": document.getElementById('song_genre').value,
        "album_id": document.getElementById('song_album').value}
    post(song_url, json)
}
function delete_song() {
    let id= document.getElementById('song_id').value.toString();
    delete_line(song_url,id);
}
function edit_song(table_url){
    let id= document.getElementById('song_id').value.toString();
    let json= {"song_name": document.getElementById('song_name').value,
        "genre": document.getElementById('song_genre').value,
        "album_id": document.getElementById('song_album').value};
    edit_line(song_url,id,json);
}