import React from 'react';

const ProjectsOne = () => {
    return (
        <div style={{color:'#c2c3ca'}}>
            <div>
                <h1 className='text-3xl text-white text-center text-primary font-bold my-6 '>Project Details</h1>
            </div>
            <div class=" grid grid-cols-1 lg:grid-cols-2 my-2 ">
                <div className='my-3'>
                    <div className='grid grid-cols-1 gap-2 sm:mx-1 lg:mx-32'>
                        <div>
                            <img src="https://i.ibb.co/K24vysH/Screenshot-439.png" class="max-w-sm rounded-lg shadow-2xl" />
                        </div>
                        <div>
                            <img src="https://i.ibb.co/k8YX5V0/Screenshot-440.png" class="max-w-sm rounded-lg shadow-2xl" />
                        </div>
                        <div>
                            <img src="https://i.ibb.co/YQQL0Fs/Screenshot-441.png" class="max-w-sm rounded-lg shadow-red-600" />
                        </div>
                    </div>
                </div>
                <div className='my-auto p-4 '>
                    <h1 class="text-5xl font-bold text-yellow-100">wedding-photography</h1>
                    <div class="py-6">
                        <p className='text-2xl'>• This is a wedding photographer webside.</p>
                        <p className='text-2xl'>• This webside have login and register page for authentication</p>
                        <p className='text-2xl'>• Checkout component is a protect component.</p>
                        <p className='text-2xl'>• I used react-authentication-hook and fire-base-authentication.</p>
                    </div>

                    <div className='flex gap-3'>
                        <a href="https://wedding-photography-bebc7.web.app/"> <div class="card-actions">
                            <button class="btn btn-primary">Live link</button>
                        </div></a>
                        <a href="https://github.com/Sakilshikdar/independent-service-provider-assigment-10"> <div class="card-actions">
                            <button class="btn btn-primary">Code link</button>
                        </div></a>
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-2xl font-serif font-bold text-yellow-100'>Technology Used:</h1>
                        <p className='text-xl'>Github,ReactJS, MongoDB, Firebase, ExpressJS, NodeJS, Tailwind, EmailJS.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsOne;