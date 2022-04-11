import MovieUpComing from './MovieUpComing/movieUpComing'
import MovieTrending from './MovieTrending/movieTrending'
import request from '../request'

function Navbar() {
    return (
        <>
            <MovieUpComing 
                title={'Phim sắp chiếu'}
                fetch={request.fetchUpcoming}
                image={request.w500Image}
            />
            <MovieTrending title={'Trending'} fetch={request.fetchTrending('week')} />
        </>
    )   
}
export default Navbar