import React from 'react';

const About = () => {
    return (
        <div class="hero ">
            <div class="hero-content flex-col lg:flex-row">
                <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class=" text-5xl font-bold">About Me</h1><br />
                    <p className='text-xl'>Developer <span className='text-red-700'>and Designer</span></p>
                    <p className="font-mono py-6">I am a front-end web-developer. I can make the website clean code and pixel perfect design.I also make the website more & more interactive with web animation.I can provide clean code and pixel perfect design.I also make the website more & more interactive with web animation.A responsive design makes your website accessible to all user, regardless of their device.</p>
                    <button class="btn btn-primary">Let's talk</button>
                </div>
            </div>
        </div>
    );
};

export default About;