import React, { useState } from "react";
import "./Header.css";
import play from "../../assets/play_circle.svg";
import YouTube from 'react-youtube';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Modal from 'react-bootstrap/Modal'

function Header() {
  function scrollPage() {
    window.scroll({
      top: 530,
      left: 0,
      behavior: 'smooth'
    })
  }
  const [videoShow, setVideoShow] = useState(false);
  return (
    <div className="header">
      <div className="video-fapa">
        <div className="video-fade"/>
        <img src={require('../../assets/gif.gif')} />
        <ExpandMoreIcon className="arrow" onClick={scrollPage}></ExpandMoreIcon>
        <PlayCircleOutlineIcon className="play" onClick={() => setVideoShow(true)}></PlayCircleOutlineIcon>
      </div>
      <p className="faca-algo-por-alguem"> Faça Algo Por Alguém </p>
      <p className="ong-sem-fins-lucrati"> ONG sem fins lucrativos </p>
      <Modal size="xl" show={videoShow} onHide={() => setVideoShow(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <iframe width="1060" height="500" src="https://www.youtube.com/embed/wFvku4Dyp9g"></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Header;
