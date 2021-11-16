function post_artist(){
    let json= {"group_name": document.getElementById('artist_name').value,
        "country": document.getElementById('artist_country').value}
    post(artist_url, json)
}
function delete_artist() {
    let id= document.getElementById('artist_id').value.toString();
    delete_line(artist_url,id);
}
function edit_artist(table_url){
    let id= document.getElementById('artist_id').value.toString();
    let json= {"group_name": document.getElementById('artist_name').value,
        "country": document.getElementById('artist_country').value};
    edit_line(artist_url,id,json);
}