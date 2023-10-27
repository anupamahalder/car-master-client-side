/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../../assets/images/banner/1.jpg';
import img2 from '../../assets/images/banner/2.jpg';
import img3 from '../../assets/images/banner/3.jpg';
import img4 from '../../assets/images/banner/4.jpg';
import img5 from '../../assets/images/banner/5.jpg';
import img6 from '../../assets/images/banner/6.jpg';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right:'20px' }}
        onClick={onClick}
      />
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,display:'block', left:'20px', zIndex:'10' }}
        onClick={onClick}
      />
    );
  }
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <Slider {...settings} className="mx-auto bg-black">
      <div className="h-[220px] md:h-[70vh] mx-auto ">
        <img className="w-full object-cover object-bottom" 
        src={img1} alt="" />
      </div>
      <div className="h-[220px] md:h-[70vh] mx-auto ">
        <img className="w-full object-cover object-bottom" 
        src={img2} alt="" />
      </div>
      <div className="h-[220px] md:h-[70vh] mx-auto ">
        <img className="w-full object-cover object-bottom" 
        src={img3} alt="" />
      </div>
      <div className="h-[220px] md:h-[70vh] mx-auto ">
        <img className="w-full object-cover object-bottom" 
        src={img4} alt="" />
      </div>
      <div className="h-[220px] md:h-[70vh] mx-auto ">
        <img className="w-full object-cover object-bottom" 
        src={img5} alt="" />
      </div>
      <div className="h-[220px] md:h-[70vh] mx-auto ">
        <img className="w-full object-cover object-bottom" 
        src={img6} alt="" />
      </div>
    </Slider>
  );
}