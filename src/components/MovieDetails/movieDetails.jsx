
import {useEffect, useState} from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './movieDetail.scss'

import request from '../../request'
import Movie from '../ListMovies/Movie/movie'
import Video from './Video/video'
import noUpdateImage from '../../assets/images/no-update-image.png'

function MovieDetails() {
    let params = useParams()
    const [details, setDetails] = useState([])
    const [similarMovie, setSimilarMovie] = useState([])
    const [videos, setVideos] = useState([])
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const getVideo = async () => {
            try {
                const {data} = await axios.get(request.fetchVideoMovie(params.id))
                const results = data.results && data.results.length > 0 && data.results.filter(video =>(video.name.includes('Trailer')))
                setVideos(results);
            }catch(error) {
                console.error(error);
            }
        }
        const getMovieDetails = async () => {
            try{
                const {data} = await axios.get(request.fetchMovieDetails(params.id))
                setDetails(data)
            }catch(error) {
                console.error(error)
            }
        }
        const getMovieSimilar = async() => {
            try{
                const {data} = await axios.get(request.fetchMovieSimilar(params.id))
                setSimilarMovie(data.results.splice(1,8))
            }catch(error) {
                console.error(error)
            }
        }
        if(params.id) {
            getMovieDetails()
            getMovieSimilar()
            getVideo()
        }
        window.scrollTo(0,0) 
    },[params.id]);
   
    return (
        <div className="left-container">
            {
            details && details.id && (
                <div className="page-movile-details" key={details.id}>
                    <div className="poster">
                        <img 
                        src={details.poster_path == null ? noUpdateImage : (request.w500Image(details.poster_path ? details.poster_path : details.backdrop_path))} 
                        alt={details.title || details.name || details.original_title}
                        ></img>
                        <div className="btn-box-open-video">
                            <button className="btn-open-video" 
                                onClick={() => {
                                    videos && videos.length > 0 
                                    ? setOpen(!open) 
                                    : alert(`Phim ${details.title || details.name || details.original_title} ch??a c???p nh???t trailer`)}
                                }
                                >Xem Trailer
                            </button>
                        </div>
                    </div>
                    <div className="content">
                        <h1 className="title">{details.title || details.name || details.original_title}</h1>
                        <h2 className="real-title">{details.original_title} ({new Date(details.release_date).getFullYear()})</h2>
                        <div className="info-box">
                            <div className="info-item">
                                <span className="text">Tr???ng th??i: </span>
                                <span className="status">Full HD</span>
                            </div>
                            <div className="info-item">
                                <span className="text">Th???i l?????ng: </span>
                                <span>{details.runtime > 0  ? details.runtime + ' ph??t' : 'Ch??a x??c ?????nh'}</span>
                            </div>
                            <div className="info-item">
                                <span className="text">T??nh tr???ng: </span>
                                <span>{details.status === 'Released' ? "??ang kh???i chi???u" : "S???p ph??t h??nh"}</span>
                            </div>
                            <div className="info-item">
                                <span className="text">Ng??n ng???: </span>
                                <span>{details.spoken_languages[0].english_name || details.spoken_languages[0].name}</span>
                            </div>
                            <div className="info-item">
                                <span className="text">N??m ph??t h??nh: </span>
                                <span>{new Date(details.release_date).getFullYear()}</span>
                            </div>
                            <div className="info-item">
                                <span className="text">Qu???c gia: </span>
                                <span>{details.production_countries && details.production_countries.map(country => (country.name)).join(', ')}</span>
                            </div>
                            <div className="info-item">
                                <span className="text">Th??? lo???i: </span>
                                <span>
                                    {details.genres && details.genres.map(genre => (genre.name)).join(', ')}
                                </span>
                            </div>
                        </div>
                        <div className="star-rating" style={{margin: '10px 0 0 5px'}}>
                            <h3 className="title">L?????t ????nh gi??</h3>
                            <StarRating star={details.vote_average} voteCount = {details.vote_count}/>
                        </div>
                    </div>
                    <div className="clear" style={{clear:'both'}}></div>
                    <div className="description-box">
                        <h3 className="title">N???i dung phim</h3>
                        <div style={{textAlign: 'justify'}}>
                            <p className="desc-text">{details.overview ? details.overview : "Ch??a c???p nh???t"}</p>
                        </div>
                    </div>
                    <div className="info-film-studio">
                        <h3 className="title">H??ng s???n xu???t:</h3>
                        <div className="film-studio-box">
                            <Swiper
                            breakpoints={{768: {slidesPerView:4}}}
                            slidesPerView={3}
                            spaceBetween={10}
                            loopFillGroupWithBlank={true}
                            navigation={true}
                            modules={[Navigation]}
                            className="movie-slide-similar"
                            >
                                {details.production_companies && (
                                    details.production_companies.map(company => {
                                        return <SwiperSlide key={company.id}>
                                            <div className="film-studio-item">
                                                <img 
                                                    src={(company.logo_path == null)
                                                        ? noUpdateImage 
                                                        : request.originalImage(company.logo_path)} 
                                                    alt={company.name} className="logo">
                                                </img>
                                                <h4 className="name">{company.name}</h4>
                                            </div>
                                        </SwiperSlide>
                                    })
                                )}
                            </Swiper>
                        </div>
                    </div>
                </div>
            )
            }
            <h2 className="title" style={{textTransform: 'uppercase', width: '100%', margin: '10px 0'}}>C??c phim li??n quan</h2>
            <Swiper
                breakpoints={{768: {slidesPerView:3}, 1024: {slidesPerView:4}}}
                slidesPerView={2}
                spaceBetween={10}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="movie-slide-similar"
            >
                {
                similarMovie &&  similarMovie.length > 0 && similarMovie.map(movie => {
                    return <SwiperSlide key={movie.id}><Movie movie={movie} image={request.w500Image}/></SwiperSlide>
                    
                }) 
                }
            </Swiper>
            <Video videos={videos} addClass={open} setClose={setOpen}/>
        </div>
    )
}
export default MovieDetails



function StarRating({star, voteCount}) {
    const rate = Math.ceil(star)
    const starOn = Array.from({length: rate}, () => '????')
    const starOff = Array.from({length: 10-rate}, () => '????')
    return (
        <>
            <div style={{fontSize: '23px', float: 'left'}}>
                <span style={{color: 'rgb(240, 167, 0)'}}>{starOn}</span>
                <span>{starOff}</span>
            </div>
            <span style={{marginLeft:'5px', fontSize: '12px', lineHeight: '37px'}}>({voteCount} l?????t b??nh ch???n)</span>
        </>
    )
}

