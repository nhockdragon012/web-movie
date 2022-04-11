import './movieUpComing.scss';
import StarRating from './starRating';

import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
function MovieUpComing({image, fetch, title}) {
    const [movies, setMovies] = useState([])
    const fetchMovieUpComing = async () => {
        try {
            const {data} = await axios.get(fetch)
            setMovies(data.results.splice(1,8))
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => { 
        fetchMovieUpComing()
    }, [])
    return (
        <div className="movie-box upcoming">
            <div className="caption">
                <h1 className="movie-title">{title}</h1>
            </div>
            {
                movies && movies.length > 0 && movies.map(movie => {
                    return <div className="movie-upcoming-item" key={movie.id}>
                        <Link to={`movie/${movie.id}`}>
                            <img src={image(movie.poster_path ? movie.poster_path : movie.backdrop_path)} alt={movie.title} className="poster"></img>
                            <div className="content">
                                <h4 className="title">{movie.title}</h4>
                                <p className="release">{movie.release_date && new Date(movie.release_date).getFullYear()}</p>
                                <StarRating star={movie.vote_average} />
                            </div>
                        </Link>
                    </div>
                })
            }
        </div>
    )
}
export default MovieUpComing


