import axios from 'axios'
import {useState, useEffect} from 'react'



import Movie from './Movie/movie'
import './listMovies.scss'

function ListMovies({title,fetch, image}) {
    const [movies, setMovies] = useState([])
    const fetchListMovies = async () => {
        try {
            const {data} = await axios.get(fetch)
            setMovies(data.results.splice(1,8))
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        fetchListMovies()
    }, [])
    return (
        <>
        <h1 className="movie-trending title">{title}</h1>
        <div className="movie-box">
            {
            movies && movies.map(movie => (<Movie movie={movie} image={image} key={movie.id}/>))
            }
        </div>
        
        </>
        
    )
}
export default ListMovies