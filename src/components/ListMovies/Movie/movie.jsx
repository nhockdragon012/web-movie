import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import noUpdateImage from '../../../assets/images/no-update-image.png'

import './movie.scss'
function Movie({movie, image}) {
    return (
        
            <div className="movie-item" data-index={movie.id} > 
                <Link to={`/movie/${movie.id}`}>
                    <img 
                        src={movie.poster_path == null ? noUpdateImage :image(movie.poster_path ? movie.poster_path : movie.backdrop_path)} 
                        alt={movie.title || movie.name} 
                        className="poster"
                    ></img>
                    <div className="content">
                        <h4 className="title">{movie.title || movie.name}</h4>
                    </div>
                    <p className="badge-movie">Full HD</p>
                    <div className="icon"> 
                        <FontAwesomeIcon icon={faCirclePlay} size="4x"/>
                    </div>
                    <div className="overlay"></div>
                </Link>
            </div>
    )
}
export default Movie