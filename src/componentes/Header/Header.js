import React from "react";
import "./Header.css";
import play from "../../assets/play_circle.svg";
import YouTube from 'react-youtube';
import video from "../../assets/institucional-video.mp4"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

function Header() {

  function scrollPage() {
    window.scroll({
      top: 530,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="header">
      <div className="video-fapa">
        <div className="video-fade"/>
        <img src={require('../../assets/gif.gif')} />
        <ExpandMoreIcon className="arrow" onClick={scrollPage}></ExpandMoreIcon>
        <PlayCircleOutlineIcon className="play"></PlayCircleOutlineIcon>
      </div>
      <p className="faca-algo-por-alguem"> Faça Algo Por Alguém </p>
      <p className="ong-sem-fins-lucrati"> ONG sem fins lucrativos </p>
    </div>
  );
}

export default Header;
