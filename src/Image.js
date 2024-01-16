
import css from './img/css.jpeg';
import html from './img/html.jpeg';
import js from './img/js.jpeg';
import react from './img/react.jpeg';
import React from 'react';
import './App.css';
const imageMap = {
    css,
    html,
    js,
    react
}
function Image({imageName}) {
    console.log(imageName);
    console.log(imageMap[imageName])
    return (
         <div>
          <img src={imageMap[imageName]} alt='test'/>
         </div> 
   );
}
export default Image;