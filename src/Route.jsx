import {Routes, Route} from 'react-router-dom';
import {useContext} from 'react'
import HomePage from './pages/Home/home'
import MovieDetails from './components/MovieDetails/movieDetails'
import SearchMovie from './components/Search/search'
import request from './request'
import CategoryMovie from './components/CategoryMovie/categoryMovie'
import {GetData} from './components/providerContext'

function Router() {
    const value = useContext(GetData)
    
    return (
        <Routes>
            <Route index element={<HomePage/>}/>

                <Route path="search">
                    <Route path=":keyword" element={<SearchMovie />}/>
                </Route>

                <Route path="movie">
                    <Route path=":id" element={<MovieDetails/>}/>
                </Route>
                
            <Route path="xem-nhieu-nhat" element={<CategoryMovie 
                    fetch={request.fetchPopular} 
                    image={request.w500Image} 
                    title={'Được xem nhiều nhất'}/>}
            />
            <Route path="year">
                <Route path =":year" element={<CategoryMovie 
                    fetch={request.fetchMovieReleased(value.value)} 
                    image={request.w500Image} 
                    title={`Phim mới năm ${value.value}`}/>}
                />
            </Route>
            <Route 
            path="phim-viet-nam" 
            element={<CategoryMovie 
                fetch={request.fetchMovieRegion('vi','VN')} 
                image={request.w500Image} 
                title={'Phim Việt Nam'}/>} 
            />
            <Route 
            path="phim-my" 
            element={<CategoryMovie 
                fetch={request.fetchMovieRegion('en','US')} 
                image={request.w500Image} 
                title={'Phim Mỹ'}/>} 
            />
            <Route 
            path="phim-hoat-hinh" 
            element={<CategoryMovie 
                fetch={request.fetchMovieWithGenre('16')} 
                image={request.w500Image} 
                title={'Phim hoạt hình'}/>} 
            />
            <Route 
            path="phim-hanh-dong" 
            element={<CategoryMovie 
                fetch={request.fetchMovieWithGenre('28')} 
                image={request.w500Image} 
                title={'Phim hành động'}/>} 
            />
            <Route 
            path="phim-kinh-di" 
            element={<CategoryMovie 
                fetch={request.fetchMovieWithGenre('27')} 
                image={request.w500Image} 
                title={'Phim kinh dị'}/>} 
            />
            <Route 
            path="phim-hai-kich" 
            element={<CategoryMovie 
                fetch={request.fetchMovieWithGenre('35')} 
                image={request.w500Image} 
                title={'Phim hài kịch'}/>} 
            />
            <Route 
            path="phim-lang-man" 
            element={<CategoryMovie 
                fetch={request.fetchMovieWithGenre('10749')} 
                image={request.w500Image} 
                title={'Phim lãng mạn'}/>} 
            />
        </Routes>
        
    )
}
export default Router