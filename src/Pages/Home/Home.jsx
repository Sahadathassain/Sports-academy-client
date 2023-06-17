

import TopInstructors from "../Top Instructors/TopInstructors";
import Testimonial from "../Testimonial/Testimonial";
import ContactForm from "../ContactForm/ContactForm";
import Hero from "../Hero/Hero";
import TopClass from "../TopClass/TopClass";
import useAuth from "../../hooks/useAuth";



const Home = () => {
    const{theme} =useAuth();
    return (
        <div className={`${theme}`} >
            <Hero></Hero>
            <TopInstructors></TopInstructors>
            <TopClass></TopClass>
            <Testimonial></Testimonial>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;