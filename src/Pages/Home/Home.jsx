import SimpleSlider from "../../components/BannerSlick/BannerSlick";
import About from "./About/About";
import Services from "./Services/Services";

const Home = () => {
    return (
        <div className="min-h-screen">
            <SimpleSlider></SimpleSlider>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;