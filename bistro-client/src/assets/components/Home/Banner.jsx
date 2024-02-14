import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../images/01.jpg'
import slider2 from '../../images/02.jpg'
import slider3 from '../../images/03.png'
import slider4 from '../../images/04.jpg'
import slider5 from '../../images/05.png'
import slider6 from '../../images/06.png'

const Banner = () => {
            return (
                <Carousel className="">
                <div>
                    <img src={slider1} />
                    
                </div>
                <div>
                    <img src={slider2} />
                    
                </div>
                <div>
                    <img src={slider3} />
                   
                </div>
                <div>
                    <img src={slider4} />
                    
                </div>
                <div>
                    <img src={slider5} />
                    
                </div>
                <div>
                    <img src={slider6} />
                   
                </div>
            </Carousel>
            );
        }
   
export default Banner