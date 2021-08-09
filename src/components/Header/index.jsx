import { React } from 'react';
import './header.css'
import logo from './logo.png'

const Header = ({black}) => {
  return(
    <header className={black ? 'black':''}>
      <div className="header-logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="header-user">
        <a href="/">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpro2-bar-s3-cdn-cf1.myportfolio.com%2Fdddb0c1b4ab622854dd81280840458d3%2F98032aebff601c1d993e12a0_rw_600.png%3Fh%3D8030f4d5734548795c22da59ca72e3e1&f=1&nofb=1" alt="user" />
        </a>
      </div>
    </header>
  );
}

export default Header;