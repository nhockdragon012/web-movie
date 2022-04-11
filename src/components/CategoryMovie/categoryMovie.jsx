import axios from 'axios'
import {useState, useEffect} from 'react'
import Movie from '../ListMovies/Movie/movie'
function CategoryMovie({fetch, image, title}) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const fetchMovies = async() => {
            try {
                const {data} = await axios.get(fetch)
                setMovies(data.results);
            } catch (error) {
                console.error(error);
            }
        }
        fetchMovies()
    },[fetch])
    return (
        <div className="left-container">
            <h1 className="movie-trending title">{title}</h1>
            <div className="movie-box">
                {
                movies && movies.length > 0 && movies.map(movie => {
                    return <Movie movie={movie} image={image} key={movie.id}/>
                })
                }
            </div>
            
        </div>
    )
}
export default CategoryMovie