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
    <Slider {...settings} className="mx-auto">
      <div className="h-[400px] md:h-[500px] rounded-xl mx-auto ">
        <img className="w-full object-cover object-bottom" 
        src={img1} alt="" />
        <div className="h-full absolute top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)100%]">
          <h1 className="text-2xl mt-28 ml-20 md:text-6xl font-bold text-white">Affordable <br/>Price For Car<br/> Servicing</h1>
          <p className="text-white ml-20 text-sm md:text-xl py-2 w-[300px] md:w-[600px] italic">Unleash the full potential of your vehicle with our top-notch car servicing. Experience peak performance and safety, one service at a time.</p>
          <div className="ml-20">
          <button className="text-white font-semibold py-3 px-5 rounded-md bg-[#BE1921] mr-2 hover:text-[#BE1921] hover:bg-white">Discover More</button>
          <button className="outline py-2 px-6 rounded outline-4 outline-white text-white font-semibold hover:bg-white hover:text-black">Latest Project</button>
          </div>
        </div>
      </div>
      <div className="h-[400px] md:h-[500px] rounded-xl mx-auto ">
        <img className="w-full object-cover object-bottom" 
        src={img2} alt="" />
        <div className="h-full absolute top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)100%]">
          <h1 className="text-2xl mt-28 ml-20 md:text-6xl font-bold text-white">Affordable <br/>Price For Car<br/> Servicing</h1>
          <p className="text-white ml-20 text-sm md:text-xl py-2 w-[300px] md:w-[600px] italic">Unleash the full potential of your vehicle with our top-notch car servicing. Experience peak performance and safety, one service at a time.</p>
          <div className="ml-20">
          <button className="text-white font-semibold py-3 px-5 rounded-md bg-[#BE1921] mr-2 hover:text-[#BE1921] hover:bg-white">Discover More</button>
          <button className="outline py-2 px-6 rounded outline-4 outline-white text-white font-semibold hover:bg-white hover:text-black">Latest Project</button>
          </div>
        </div>
      </div>
      <div className="h-[400px] md:h-[500px] rounded-xl mx-auto ">
        <img className="w-full object-cover object-bottom" 
        src={img3} alt="" />
        <div className="h-full absolute top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)100%]">
          <h1 className="text-2xl mt-28 ml-20 md:text-6xl font-bold text-white">Affordable <br/>Price For Car<br/> Servicing</h1>
          <p className="text-white ml-20 text-sm md:text-xl py-2 w-[300px] md:w-[600px] italic">Unleash the full potential of your vehicle with our top-notch car servicing. Experience peak performance and safety, one service at a time.</p>
          <div className="ml-20">
          <button className="text-white font-semibold py-3 px-5 rounded-md bg-[#BE1921] mr-2 hover:text-[#BE1921] hover:bg-white">Discover More</button>
          <button className="outline py-2 px-6 rounded outline-4 outline-white text-white font-semibold hover:bg-white hover:text-black">Latest Project</button>
          </div>
        </div>
      </div>
      <div className="h-[400px] md:h-[500px] rounded-xl mx-auto ">
        <img className="w-full object-cover object-bottom" 
        src={img4} alt="" />
        <div className="h-full absolute top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)100%]">
          <h1 className="text-2xl mt-28 ml-20 md:text-6xl font-bold text-white">Affordable <br/>Price For Car<br/> Servicing</h1>
          <p className="text-white ml-20 text-sm md:text-xl py-2 w-[300px] md:w-[600px] italic">Unleash the full potential of your vehicle with our top-notch car servicing. Experience peak performance and safety, one service at a time.</p>
          <div className="ml-20">
          <button className="text-white font-semibold py-3 px-5 rounded-md bg-[#BE1921] mr-2 hover:text-[#BE1921] hover:bg-white">Discover More</button>
          <button className="outline py-2 px-6 rounded outline-4 outline-white text-white font-semibold hover:bg-white hover:text-black">Latest Project</button>
          </div>
        </div>
      </div>
      <div className="h-[400px] md:h-[500px] rounded-xl mx-auto ">
        <img className="w-full object-cover object-bottom" 
        src={img5} alt="" />
        <div className="h-full absolute top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)100%]">
          <h1 className="text-2xl mt-28 ml-20 md:text-6xl font-bold text-white">Affordable <br/>Price For Car<br/> Servicing</h1>
          <p className="text-white ml-20 text-sm md:text-xl py-2 w-[300px] md:w-[600px] italic">Unleash the full potential of your vehicle with our top-notch car servicing. Experience peak performance and safety, one service at a time.</p>
          <div className="ml-20">
          <button className="text-white font-semibold py-3 px-5 rounded-md bg-[#BE1921] mr-2 hover:text-[#BE1921] hover:bg-white">Discover More</button>
          <button className="outline py-2 px-6 rounded outline-4 outline-white text-white font-semibold hover:bg-white hover:text-black">Latest Project</button>
          </div>
        </div>
      </div>
      <div className="h-[400px] md:h-[500px] rounded-xl mx-auto ">
        <img className="w-full object-cover object-bottom" 
        src={img6} alt="" />
        <div className="h-full absolute top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)100%]">
          <h1 className="text-2xl mt-28 ml-20 md:text-6xl font-bold text-white">Affordable <br/>Price For Car<br/> Servicing</h1>
          <p className="text-white ml-20 text-sm md:text-xl py-2 w-[300px] md:w-[600px] italic">Unleash the full potential of your vehicle with our top-notch car servicing. Experience peak performance and safety, one service at a time.</p>
          <div className="ml-20">
          <button className="text-white font-semibold py-3 px-5 rounded-md bg-[#BE1921] mr-2 hover:text-[#BE1921] hover:bg-white">Discover More</button>
          <button className="outline py-2 px-6 rounded outline-4 outline-white text-white font-semibold hover:bg-white hover:text-black">Latest Project</button>
          </div>
        </div>
      </div>
    </Slider>
  );
}