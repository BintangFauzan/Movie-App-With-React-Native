export const TMBD_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        authorization: 'Bearer ' + process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    }
}

export const fetchMovies = async ({query} : {query: string}) => {
    const endPoint = query ? `${TMBD_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` :   `${TMBD_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endPoint, {
        method: 'GET',
        headers: TMBD_CONFIG.headers
    })

    if(!response.ok) {
        // @ts-ignore
        throw new Error("Could not fetch movie", response.statusText);
    }

    const data = await response.json();
    return data.results;
}

// /discover/movie
