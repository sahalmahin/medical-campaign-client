import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";
import FutureCamp from "../FutureCamp/FutureCamp";
import MedicalCamp from "../MedicalCamp/MedicalCamp";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Medical Camp | Home</title>
            </Helmet>
            <Banner></Banner>
            <MedicalCamp></MedicalCamp>
            <Testimonials></Testimonials>
            <Doctors></Doctors>
            <FutureCamp></FutureCamp>
        </div>
    );
};

export default Home;