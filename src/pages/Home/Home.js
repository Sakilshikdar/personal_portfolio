import React from 'react';
import Footer from '../../shared/Footer/Footer';
import About from '../About';
import Contract from '../Contract';
import Landing from '../Landing';
import Projects from '../Projects';
import Services from '../Services';
import Skill from '../Skill';

const Home = () => {
    return (
        <div>
            <Landing></Landing>
            <Projects></Projects>
            <Skill></Skill>
            <About></About>
            {/* <Services></Services> */}
            <Contract></Contract>
            <Footer></Footer>
        </div>
    );
};

export default Home;