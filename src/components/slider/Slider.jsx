import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './slider.css'
import Data from './sliderData'
import CountdownTimer from '../countor/countor'

export default function Slider(){
    const data = Data
    const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
        nextSlide();
    }, 5000); // Autoplay every 3 seconds
    return () => clearInterval(interval); // Cleanup
}, [index]);

    return (
        <div className="slider">
            <div className="container">
                <div>
                    <div className="buttons">
                        <div className="left" onClick={nextSlide}><i className="fa-solid fa-left-long"></i></div>
                        <div className="right" onClick={prevSlide}><i className="fa-solid fa-right-long"></i></div>
                    </div>
                    <div className="content" style={{ transform: `translateX(${index * 100}%)` }}>
                        {
                            data.map((obj) => (
                                <div className="oneSlider">
                                    <img src={obj.img} alt="background-image" className='sliderBackground'/>
                                    <div className="background"></div>
                                    <div>
                                        <div>
                                            <h1>{obj.title}</h1>
                                            <span>{obj.date}</span>
                                            <p><CountdownTimer targetDate={obj.paragraph}/></p>
                                            <img src={obj.mokupImage} className='img-mokup'/>
                                            <Link to='/contact'>تواصل معنا</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}