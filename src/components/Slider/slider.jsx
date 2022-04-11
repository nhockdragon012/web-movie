import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import {useState, useEffect} from 'react'
import axios from 'axios'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './slider.scss'
import Movie from '../ListMovies/Movie/movie'


function Slider({fetch, image}) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const getMovies = async () => {
            try {
                const {data}  = await axios.get(fetch)
                setMovies(data.results.splice(1,15));
            } catch (error) {
                console.error(error);
            }
        }
        getMovies()
    },[fetch])

    return (
        <>
        <h1 className="title-slide-swiper" style={{marginBottom: '10px'}}>Phim HOT</h1>
        <Swiper
            breakpoints={{768: {slidesPerView:3}, 1024: {slidesPerView:5}}}
            slidesPerView={2}
            spaceBetween={10}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            navigation={true}
            modules={[Autoplay,Pagination, Navigation]}
            className="slide-movie-swiper"
        >
            {
            movies && movies.length > 0 && movies.map(movie => {
                return <SwiperSlide key={movie.id}><Movie movie={movie} image={image}/></SwiperSlide>
            })
            }
        </Swiper> 
        </>
    )
}
export default Slider