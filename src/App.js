import './App.css';
import Image from './Image';
import {useState} from 'react'

function getRandImage(){
  const imageArr = ['html','css','js','react'];
  return imageArr[Math.floor(Math.random()*imageArr.length)]
}
console.log(getRandImage());

function App() {
  const [images, setImages] = useState([])
  const handleClick = () =>{
       setImages([...images, getRandImage()])
  }
  const imageList = images.map((image,index)=>{
    return <Image key={index} imageName={image} />
  });
  return (
    <div className="App">
      <div className='header'>   
      <button className='button-64'onClick={handleClick}> <span className='text'>Random Image</span></button>
      </div>
      {/* {images.map((image,index) => {
          return <Image key={index} imageName={image} />
      })}   */
      <div className='img-container'>{imageList}</div>}
    </div>
  );
}

export default App;
