album_url = 'http://localhost:3000/albums/';

function post_album(){
    let json= {"album_name": document.getElementById('album_name').value,
        "release_date": document.getElementById('album_date').value,
        "artist_id": document.getElementById('album_artist').value}
    post(album_url, json)
}
function edit_album(){
    let id= document.getElementById('album_id').value.toString();
    let json= {"album_name": document.getElementById('album_name').value,
        "release_date": document.getElementById('album_date').value,
        "artist_id": document.getElementById('album_artist').value}
    edit_line(album_url,id,json);
}
function delete_album() {
    let id= document.getElementById('album_id').value.toString();
    delete_line(album_url,id);
}