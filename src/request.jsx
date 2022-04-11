const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey:'54c7a2ef8f64c2be42e7ee535dfc76bb'
}
const request = {
    fetchNowPlaying: `${apiConfig.baseUrl}movie/now_playing?api_key=${apiConfig.apiKey}&language=vi-VN&page=1`, //Xem gì hôm nay
    fetchUpcoming: `${apiConfig.baseUrl}movie/upcoming?api_key=${apiConfig.apiKey}&language=vi-VN&page=1`, // Phim sắp tới
    fetchPopular : `${apiConfig.baseUrl}movie/popular?api_key=${apiConfig.apiKey}&language=vi-VN&page=1`, // Top phim xem nhiều nhất => Làm navbar
    
    fetchTrending : (time="week") => `${apiConfig.baseUrl}trending/all/${time}?api_key=${apiConfig.apiKey}&language=vi-VN`,
    fetchMovieRegion : (language,region) =>`${apiConfig.baseUrl}discover/movie?api_key=${apiConfig.apiKey}&language=vi-VN&region=${region}&with_original_language=${language}`,
    fetchMovieReleased: (year="2022") => `${apiConfig.baseUrl}discover/movie?api_key=${apiConfig.apiKey}&language=vi-VN&sort_by=popularity.desc&include_video=false&page=1&primary_release_year=${year}`,
    fetchMovieDetails: (movie_id, language ="vi-VN") => `${apiConfig.baseUrl}movie/${movie_id}?api_key=${apiConfig.apiKey}&language=${language}`,
    fetchVideoMovie: (movie_id) => `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${apiConfig.apiKey}`,
    fetchMovieSimilar: (movie_id) => `${apiConfig.baseUrl}movie/${movie_id}/similar?api_key=${apiConfig.apiKey}&language=en-US&page=1`,
    fetchMovieWithGenre:(genre_id ="28") => `${apiConfig.baseUrl}discover/movie?api_key=${apiConfig.apiKey}&language=vi-VN&sort_by=popularity.desc&include_video=false&page=1&with_genres=${genre_id}`,
    searchMovie: (searchMovie) => `${apiConfig.baseUrl}search/movie?api_key=54c7a2ef8f64c2be42e7ee535dfc76bb&language=vi-VN&query=${searchMovie}&page=1&include_adult=false`,


    originalImage:(imgPath) => `https://image.tmdb.org/t/p/original${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`
}

export default request


// https://api.themoviedb.org/3/
// discover/movie?api_key=54c7a2ef8f64c2be42e7ee535dfc76bb
// &language=vi-VN&sort_by=popularity.desc
// &include_adult=false
// &include_video=false
// &page=1
// &with_genres=28
// &with_watch_monetization_types=flatrate
