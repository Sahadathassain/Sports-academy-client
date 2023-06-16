import { Helmet } from "react-helmet";

import TopInstructors from "../Top Instructors/TopInstructors";
import Testimonial from "../Testimonial/Testimonial";
import ContactForm from "../ContactForm/ContactForm";
import Hero from "../Hero/Hero";










const Home = () => {
    return (
        <div>
            <Helmet>
                <title> SA | Home</title>
            </Helmet>
        
        <Hero></Hero>
            <TopInstructors></TopInstructors>
            <Testimonial></Testimonial>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;