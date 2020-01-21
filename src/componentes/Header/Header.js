import React from "react";
import "./Header.css";
import play from "../../assets/play_circle.svg";
//import frame from "../../assets/video-frame.png"

function Header() {
  return (
    <div className="header-laranja">
      <div className="fapa-card">
        <p className="faca-algo-por-alguem"> Faça Algo Por Alguém </p>
        <p className="ong-sem-fins-lucrati"> ONG sem fins lucrativos </p>
      </div>
      <div class="video-fapa">
        <iframe
          width="808"
          height="480"
          src="https://www.youtube.com/embed/wFvku4Dyp9g"
          frameborder="0"
          autoplay="1"
          controls="0"
        ></iframe>
        <a
          href="https://www.youtube.com/embed/wFvku4Dyp9g"
          className="assista-o-video-comp"
        >
          Assistir vídeo completo
          <img className="img" src={play} alt="Play icon" />
        </a>
      </div>
    </div>
  );
}

export default Header;
