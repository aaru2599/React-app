const MovieDb=()=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer c36a1611cce9c2fff6390d5de1cdad2f'
        }
      };
      
      fetch('https://api.themoviedb.org/3/certification/tv/list', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    return(
        
        <div>

        </div>
    )
}
export default MovieDb