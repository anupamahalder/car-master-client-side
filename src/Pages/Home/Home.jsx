import SimpleSlider from "../../components/BannerSlick/BannerSlick";
import About from "./About/About";

const Home = () => {
    return (
        <div className="min-h-screen">
            <SimpleSlider></SimpleSlider>
            <About></About>
        </div>
    );
};

export default Home;