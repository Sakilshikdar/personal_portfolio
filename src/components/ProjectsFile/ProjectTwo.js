import React from 'react';

const ProjectTwo = () => {
    return (
        <div style={{color:'#c2c3ca'}}>
            <div>
                <h1 className='text-3xl text-center text-primary font-bold my-6 '>Project Details</h1>
            </div>
            <div class=" grid grid-cols-1 lg:grid-cols-2 my-2">
                <div className='my-3'>
                    <div className='grid grid-cols-1 gap-2 sm:mx-1 lg:mx-32'>
                        <div>
                            <img src="https://i.ibb.co/GPCPXxS/Screenshot-446.png" class="max-w-sm rounded-lg shadow-2xl"/>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/4VWVBFM/Screenshot-443.png" class="max-w-sm rounded-lg shadow-2xl" />
                        </div>
                        <div>
                            <img src="https://i.ibb.co/NtQVV4V/Screenshot-444.png" class="max-w-sm rounded-lg shadow-red-600" />
                        </div>
                    </div>
                </div>
                <div className='my-auto p-4 '>
                    <h1 class="text-5xl font-bold text-yellow-100">Warehouse-management</h1>
                    <div class="py-6">
                        <p className='text-2xl'>• This webside have 4 pages.</p>
                        <p className='text-2xl'>• This webside have login and Registration system.</p>
                        <p className='text-2xl'>• Checkout component is a protect component.</p>
                        <p className='text-2xl'>• Home page have update button and this page is protected.</p>
                    </div>

                    <div className='flex gap-3'>
                        <a href="https://wearhouse-63077.web.app/"> <div class="card-actions">
                            <button class="btn btn-primary">Live link</button>
                        </div></a>
                        <a href="https://github.com/Sakilshikdar/warehouse-management-assigment-11-client-side"> <div class="card-actions">
                            <button class="btn btn-primary">Client Code</button>
                        </div></a>
                        <a href="https://github.com/Sakilshikdar/warehouse-management-assigment-11-server-side"> <div class="card-actions">
                            <button class="btn btn-primary">Server Code</button>
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

export default ProjectTwo;