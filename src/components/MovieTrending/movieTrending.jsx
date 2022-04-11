import axios from 'axios'
import {useEffect, useState} from 'react' 
import {Link} from 'react-router-dom'
import './movieTrending.scss'


function MovieTrending({fetch, title}) {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        const getMovieTrending = async () => {
            try {
                const {data} = await axios.get(fetch)
                setMovies(data.results.splice(1,10))
            } catch (error) {
                console.error(error);
            }
        }
        getMovieTrending()
    },[fetch])
    return (
        <div className="movie-box-trending">
            <div className="caption">
                <h1 className="movie-title">{title}</h1>
            </div>
            {
                movies && movies.length > 0 && movies.map((movie, index) => {
                    return <div className="movie-item-trending" key={movie.id}>
                        <div className="number-rank">
                            <p>{index + 1}</p>
                        </div>
                        <div className="content">
                            <h4 className="title"><Link to={`movie/${movie.id}`}>{movie.title || movie.name}</Link></h4>
                            <p className="popularity">{Math.ceil(movie.popularity)} lượt quan tâm</p>
                        </div>
                    </div>
                })
            }
        </div>
    )
}
export default MovieTrending