import React, { useEffect, useState } from "react";
import Tmdb from "./services/Tmdb";

import Header from "./components/Header";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";

import "./App.css";

export default function App() {
  const [blackHeader, setBlackHeader] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);

  const loadAll = async () => {
    let list = await Tmdb.getHomeList();
    setMovieList(list);

    function random(list) {
      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      return chosen;
    }

    let chosen = random(list);

    if (!chosen.backdrop_path) chosen = random(list);

    let chosenInfo = await Tmdb.getMovieById(chosen.id, "tv");
    setFeaturedMovie(chosenInfo);
  };

  const scrollListenner = () => {
    if (window.scrollY > 20) {
      setBlackHeader(true);
    } else {
      setBlackHeader(false);
    }
  };

  useEffect(() => {
    loadAll();
    window.addEventListener("scroll", scrollListenner);
    return () => {
      window.removeEventListener("scroll", scrollListenner);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />

      {featuredMovie && <FeaturedMovie item={featuredMovie} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow items={item.items} title={item.title} key={key} />
        ))}
      </section>
      <footer>
        <div>
          Feito por
          <a
            href="https://github.com/matthew-sbrito"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-github"></i>
            Matheus Brito
          </a>
          , aprendendo React!
          <br />
          Direitos de imagem Netflix
          <br />
          Dados pegos do site themoviedb.org
        </div>
      </footer>
      {movieList.length <= 0 &&
      <div className="loading">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.wired.com%2Fphotos%2F592744d3f3e2356fd800bf00%2Fmaster%2Fw_2560%252Cc_limit%2FNetflix_LoadTime.gif&f=1&nofb=1" alt="Carregando"/>
      </div>
      }
    </div>
  );
}

