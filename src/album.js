const funcion_Album = async (album_id, id, title = "") => {
    const set_album = new Set([`https://jsonplaceholder.typicode.com/photos?albumid=${album_id}&id=${id}&title=${title}`]);
    Array.from(set_album);
}; export default funcion_Album;