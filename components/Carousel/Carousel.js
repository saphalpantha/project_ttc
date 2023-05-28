import Carousel from 'react-bootstrap/Carousel';

const carouselData = [
    {id:'c1', title:'First slide label', sub:'Nulla vitae elit libero, a pharetra augue mollis interdum' , img:'sci_stream_cover' },
    {id:'c2', title:'First slide label', sub:'Nulla vitae elit libero, a pharetra augue mollis interdum' , img:'sci_stream_cover' },
    {id:'c3', title:'First slide label', sub:'Nulla vitae elit libero, a pharetra augue mollis interdum' , img:'sci_stream_cover' },
    {id:'c4', title:'First slide label', sub:'Nulla vitae elit libero, a pharetra augue mollis interdum' , img:'sci_stream_cover' },
]


function HeroSlider() {
  return (
    <Carousel>
     {carouselData.map(i => ( 
     <Carousel.Item>
        <img
          className="d-block w-100"
          src={`/images/stream/science/${i.img}.png`}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{i.title}</h3>
          <p>{i.sub}</p>
        </Carousel.Caption>
      </Carousel.Item>))}
      
    </Carousel>
  );
}

export default HeroSlider;




