import React from "react";
import man from "../assets/images/man_png.jpg";

const Landing = () => {
  return (
    <div className='relative'>
      <div class='hero h-screen lg:h-[60vh] bg-accent relative z-10 mt-16'>
        <div class='hero-content flex-col lg:flex-row'>
          <div>
            <p
              className='text-2xl font-bold text-white'
            >
              This is me Sakil Shikdar
            </p>
            <h1
              data-aos='fade-right'
              data-aos-delay='400'
              data-aos-duration='900'
              class='text-5xl font-bold'
            >

            </h1>
            <p
              data-aos='fade-right'
              data-aos-delay='600'
              data-aos-duration='800'
              className='text-white py-6 max-w-xl'
            >
              I am a professional Full-Stack website developer. I have more than 1+ years of experience in ReactJS and java , Nodejs. I always try to learn and share new skills and stay updated
            </p>
            <a target='_blank' href="https://drive.google.com/file/d/1NnM2N6_g1p-6MuyB05ACxZ9G6TDeQi6f/view">
              <button
                data-aos='zoom-in'
                data-aos-delay='1300'
                class='btn btn-primary'
              >
                Download resume
              </button>
            </a>
          </div>
          <div className='h-[60vh] shrink-0'>
            <img src={man} class='h-full' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
