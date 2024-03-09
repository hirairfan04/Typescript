function make_album(artist_name, album_title, tracks) {
    console.log("Artist name:".concat(artist_name, ", Album title:").concat(album_title));
    if (tracks) {
        console.log("Number of tracks:".concat(tracks));
    }
}
make_album('Taylor swift', 'Lover', 18);
make_album('Ed sheeran', 'Divide');
make_album('Alec Benjamin', '(un)commentary', 13);
