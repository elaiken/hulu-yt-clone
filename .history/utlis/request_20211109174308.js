const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: 'Trending',
        url: '/trending/all/week?api_key=${API_KEY}&language=en-US'
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: '/movie/top_rated?api_key=${API_KEY}&language=en-US'
    },
    fetchActionMovies: {
        title: 'Action',
        url: '/discover/movie?api_key=${API_KEY}&with_genres=28'
    },
    fetchComedyMovies: {
        title: 'Comedy',
        url: '/discover/movie?api_key=${API_KEY}&language=en-US'
    },
    fetchHorrorMovies: {
        title: 'Comedy',
        url: '/discover/movie?api_key=${API_KEY}&language=en-US'
    },
    fetchRomanticMovies: {
        title: 'Romantic',
        url: '/discover/movie?api_key=${API_KEY}&language=en-US'
    },
    fetchMysteryMovies: {
        title: 'Mystery',
        url: '/discover/movie?api_key=${API_KEY}&language=en-US'
    },
    fetchSciFiMovies: {
        title: 'Sci-Fi',
        url: '/discover/movie?api_key=${API_KEY}&language=en-US'
    },
    fetchWesternMovies: {
        title: 'Western',
        url: '/discover/movie?api_key=${API_KEY}&language=en-US'
    },
    fetchAnimationMovies: {
        title: 'Animations',
        url: '/discover/movie?api_key=${API_KEY}&language=en-US'
    },
    fetchTVMovies: {
        title: 'TV Movies',
        url: '/discover/movie?api_key=${API_KEY}&language=en-US'
    }
}
