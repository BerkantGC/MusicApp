const getData = async() => {
    const [genres, setGenre] = useState(null);

    axios.get("https://api.spotify.com/v1/playlists/4XjbOJcfGIkj5GZ62udTmz/images", {
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
             'Authorization' : "Bearer BQBxKM2Abt1OfZVTU9PRWVqrCJGCysNGcM6Dia2s0Ff2ZVr136-nT-bJB9pSUIMlVQatP7UQC1Lp1vRzvDY6IVBbH9EN5JgaaDqi9opxmbciJbE0a7AVaJ9XC6Zw0nv5byaTaUZGeeuV9oGECQUrwLnIbcN5WWLjRZY0sHfyqTkx9bQdORyC7o24FBc9nbsNy8w",
        }})
        .then(genreResponse => {
            setGenre(genreResponse.data);
            console.log(genres.url);
        });
}