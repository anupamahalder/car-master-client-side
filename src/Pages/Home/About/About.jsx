import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                {/* image div  */}
                <div className='lg:w-1/2 relative'>
                <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                <img src={parts} className="w-1/2 absolute right-10 border-8 border-white top-1/2 rounded-lg shadow-2xl" />
                </div>
                {/* text div  */}
                <div className='lg:w-1/2'>
                <h1 className="text-2xl font-bold text-[#BE1921]">About Us</h1>
                <h1 className="text-5xl font-bold py-3">We are qualified & of experience in this field</h1>
                <div className="py-6 px-2 space-y-5 text-gray-700">
                <p>At Car Master, we are dedicated to keeping your vehicle in prime condition. With a team of experienced and certified technicians, we offer top-notch car servicing and maintenance. Our commitment to quality, transparency, and customer satisfaction sets us apart. Whether it is routine maintenance, repairs, diagnostics, or customization, we use the latest technology and the finest materials.</p><p>Your vehicle is not just transportation; it is a part of your life, and we are here to ensure it runs smoothly and safely. Choose Car Master for a trusted partner in automotive care.</p></div>
                <button className="btn bg-[#BE1921] text-white font-semibold ml-4 hover:bg-white hover:text-[#BE1921]">Get More Info</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;