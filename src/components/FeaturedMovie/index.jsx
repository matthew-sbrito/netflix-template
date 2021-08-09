/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './FeaturedMovie.css';
import play from "./play.png";

const FeaturedMovie = ({item}) =>{
  let date = new Date(item.first_air_date);
  let year = date.getFullYear();
  let genres = item.genres.map((genre) =>{
    return genre.name
  })
  let description = item.overview;
  if(description.length > 200){
    description = description.substring(0,200) + '...';
  }

  return (
    <section className="featured" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className="featured-vertical">
        <div className="featured-horizontal">
          <div className="featured-name">
            {item.original_name}
          </div>
          <div className="featured-info">
            <div className="featured-points">{item.vote_average} pontos</div>
            <div className="featured-year">{ year }</div>
            <div className="featured-seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
          </div>
          <div className="featured-description">
            {description}
          </div>
          <div className="featured-buttons">
            <a className="featured-watch" href={`/watch/${item.id}`}><img src={play} alt={item.original_name}/> Assistir</a>
            <a className="featured-add" href={`/list/add/${item.id}`}>+ Minha Lista</a>
          </div>
          <div className="featured-genres">
          <strong>Gêneros:</strong>
          {genres.join(', ')}
          </div>

        </div>
      </div>
    </section>
  );
}
export default FeaturedMovie;