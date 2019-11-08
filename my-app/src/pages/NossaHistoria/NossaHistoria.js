import React from 'react';
import './NossaHistoria.css';
import NavBar from '../../componentes/NavBar';
import Footer from '../../componentes/Footer/Footer';

function NossaHistoria() {
  return (
 
    <div className="NossaHistoria">
           <NavBar class = "w-100"></NavBar>
        <div className = "container-fluid p-0">
        <div className ="container">
            <div className = "row">
                <h3 className="titulo">Nossa História</h3>
            </div>
            <div className = "row">
                <div className = "col-md-5 p-0">
                    <p className = "texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus iaculis ultricies. Aliquam sodales pellentesque egestas. Morbi dictum dolor non diam tincidunt posuere. Praesent sit amet purus ultrices enim malesuada pharetra. Vivamus sit amet leo scelerisque, varius velit dictum, accumsan ligula. Curabitur viverra egestas lectus at egestas. Proin interdum mauris enim. Integer elementum feugiat tortor, eget euismod neque tempus et.</p>
                    <br></br>
                    <p className = "texto">
                        Duis sit amet libero at erat faucibus iaculis sit amet eget nisl. Vivamus bibendum metus non eros gravida semper. Maecenas ut magna et neque rhoncus ultricies vitae eget erat. Nam fermentum vel ex in luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc non pellentesque felis. Integer luctus, eros vel pulvinar pulvinar, risus mi tincidunt enim, non sagittis ante risus sit amet sapien. Praesent ac mauris rutrum, eleifend quam vel, fringilla metus.
                   </p>
                   <br></br>
                   <p className = "texto"> Pellentesque ut nunc in lacus pretium ullamcorper ac vel est. Curabitur non dapibus lectus, sed elementum est. Aenean feugiat magna nisi, ac ultricies odio blandit et. Donec et eleifend elit, sed scelerisque ex. Pellentesque ullamcorper rhoncus ligula. Phasellus iaculis eu orci in viverra. Nulla lacus odio, venenatis et rutrum eu, iaculis quis elit. Maecenas porttitor posuere est in lobortis. Maecenas eget porttitor lacus.</p>
                </div>
                <div className = "col-md-7 view-image">
                   <div className = "square-green"></div>
                   <div className = "image"></div>
            </div>
            </div>
            
            
        </div>
        <Footer/>
        
         
        </div>
       
    </div>
  );
}

export default NossaHistoria;