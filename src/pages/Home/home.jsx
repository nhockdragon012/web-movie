import ListMovies from '../../components/ListMovies/listMovies'
import request from '../../request'
import './home.scss'
import SlideMovie from '../../components/Slider/slider'

function Home() {
    
    return (
        <>
        <div className="list-film film hot">
            <SlideMovie fetch={request.fetchPopular} image={request.w500Image} />
        </div>
        <div className="left-container">
            <ListMovies title="Xem gì hôm nay" fetch={request.fetchNowPlaying} image={request.w500Image} /> 
            <ListMovies title="Phim Hoạt Hình" fetch={request.fetchMovieWithGenre(16)} image={request.w500Image} /> 
            <ListMovies title="Phim Kinh Dị" fetch={request.fetchMovieWithGenre(27)} image={request.w500Image} />
        </div>
        </>
    )
}
export default Home