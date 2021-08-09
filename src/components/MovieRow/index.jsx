import React,{ useState } from 'react';
import './MovieRow.css';

const MovieRow = ({title, items}) => {
  const itemsList = items.results.filter((item, key) => {
    if(!item.poster_path) return '';
    return item;
  })

  const [scrollX, setScrollX] = useState(0);

  const widthList = itemsList.length * 200;

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if(x > 0){
      x = 0;
    };
    setScrollX(x); 
  }
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = itemsList.length * 200;
    console.log(window.innerWidth, listW, x);
    if((window.innerWidth - listW) > x){
      x = (window.innerWidth - listW) - 60;
    }
    setScrollX(x); 
  }

  return(
    <div className="movieRow">
      <h2>{title}</h2>
        <div className="movie-left" onClick={handleLeftArrow}>
          <i className="fa fa-angle-left"></i>
        </div>
        <div className="movie-right" onClick={handleRightArrow}>
          <i className="fa fa-angle-right"></i>
        </div>
      <div className="movieRow--listarea">
        <div className="movieRow--list" style={{
          width: widthList,
          marginLeft: scrollX,
        }}>
        {itemsList.length > 0 && itemsList.map((item, key)=> (
          <div className="movieRow--item" key={key}>
            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieRow;