import {useParams, Link} from 'react-router-dom'
import request from '../../request'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Movie from '../ListMovies/Movie/movie'
import './search.scss'

function Search() {
    const params = useParams();
    const [movies, setMovies] = useState([])
    console.log(params.keyword);
    useEffect(() => {
        const getMoviefromSearch = async () => {
           try {
            const {data} = await axios.get(request.searchMovie(params.keyword.replaceAll(' ','%20')))
            setMovies(data.results);
           } catch (error) {
               console.error(error)
           }
        }   
        if(params.keyword) {
            getMoviefromSearch()
        }
    },[params.keyword])
    console.log(movies);
    return (
        <div className="left-container">
            <h1 className="box-title">
                <span>Kết quả tìm kiếm: </span>
                <span className="keyword">"{params.keyword}"</span>
            </h1>
            <div className="movie-box">
                {
                movies && movies.length > 0 
                    ? movies.map(movie => (<Movie movie={movie} image={request.w500Image} key={movie.id}/>))
                    : (<div className="film-not-found">
                        <p className="text">Không tìm thấy "{params.keyword}" trên hệ thống. Vui lòng trở về trang chủ <Link to="/" style={{textDecoration: 'underline', color: '#da966e'}}>tại đây</Link></p>
                    </div>)
                }
            </div>
        </div>
    )
}
export default Search