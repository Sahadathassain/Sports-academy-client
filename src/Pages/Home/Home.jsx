import { Helmet } from "react-helmet";
import Section from "../Section/Section";




const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
       <Section></Section>
        </div>
    );
};

export default Home;