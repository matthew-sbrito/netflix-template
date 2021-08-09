const API_KEY = "72892e3066aa8cb27a043d789565c2aa";
const API_BASE = "https://api.themoviedb.org/3";

const getData =  async (endpoint) =>{
  const url = `${API_BASE}${endpoint}language=pt-BR&api_key=${API_KEY}`;
  const req = await fetch(url);
  const json = await req.json();
  return json;
}

const List = {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais da Netflix',
        items: await getData(`/discover/tv?with_network=213&`),
      },
      {
        slug: 'trending',
        title: 'Recomendados para você',
        items: await getData(`/trending/all/week?`),
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: await getData(`/movie/top_rated?`),
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await getData(`/discover/movie?with_genres=2&`),
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await getData(`/discover/movie?with_genres=35&`),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await getData(`/discover/movie?with_genres=27&`),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await getData(`/discover/movie?with_genres=10749&`),
      },
      {
        slug: 'documentary',
        title: 'Documentário',
        items: await getData(`/discover/movie?with_genres=99&`),
      },
    ]
  },
  getMovieById: async (movieId, type) => {
    let info = {};
      if(movieId){
        switch(type){
          case 'movie':
            info = await getData(`/movie/${movieId}?`)
            break;
          case 'tv':
            info = await getData(`/tv/${movieId}?`)
            break;
          default:
            break;
        }
      }
      return info;
  }
};

export default List;