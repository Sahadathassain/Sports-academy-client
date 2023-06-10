import { Helmet } from "react-helmet";
import Slider from "../Silder";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
       <Slider></Slider>
        </div>
    );
};

export default Home;