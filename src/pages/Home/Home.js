import React from 'react';
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
            {/* <Services></Services> */}
            <Contract></Contract>
        </div>
    );
};

export default Home;