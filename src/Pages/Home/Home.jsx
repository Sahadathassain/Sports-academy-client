import { Helmet } from "react-helmet";
import Section from "../Section/Section";
import TopInstructors from "../Top Instructors/TopInstructors";
import Testimonial from "../Testimonial/Testimonial";
import ContactForm from "../ContactForm/ContactForm";





const Home = () => {
    return (
        <div>
            <Helmet>
                <title> SA | Home</title>
            </Helmet>
            <Section></Section>
            <TopInstructors></TopInstructors>
            <Testimonial></Testimonial>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;