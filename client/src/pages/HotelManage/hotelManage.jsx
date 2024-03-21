import "./hotelManage.css"
import Carousel from 'react-bootstrap/Carousel';


const HotelManage = () => {
 return(
   <Carousel>
   <Carousel.Item>
   <img className="offer-img" src="/IMG/Home/offer_l.jpg" alt=""  text="1 slide"/>
     
     <div className="pListTitles">
                <h1>Ho Chi Minh City 1</h1>
                <h2>1111 properties</h2>
            </div>
   </Carousel.Item>

   <Carousel.Item>
   <img className="offer-img" src="/IMG/Home/offer_l.jpg" alt=""  text="2 slide"/>
     <Carousel.Caption>
       <h3>Second slide label</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
     </Carousel.Caption>
     <div className="pListTitles">
                <h1>Ho Chi Minh City</h1>
                <h2>1111 properties</h2>
            </div>
   </Carousel.Item>
   <Carousel.Item>

   <img className="offer-img" src="/IMG/Home/offer_l.jpg" alt=""  text="3 slide"/>
     <Carousel.Caption>
       <h3>Third slide label</h3>
       <p>
         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
       </p>
     </Carousel.Caption>
     <div className="pListTitles">
                <h1>Ho Chi Minh City</h1>
                <h2>1111 properties</h2>
            </div>
   </Carousel.Item>
 </Carousel>
 )
}

export default HotelManage



