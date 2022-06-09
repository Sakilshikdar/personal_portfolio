import React from 'react';

const Projects = () => {
    return (
        <div>
            <h1 className='text-3xl text-primary text-center font-bold mt-5 '>My Projects</h1>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 mt-7 lg:pl-20 gap-4'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">wedding-photography</h2>
                        <p><span className='font-bold text-2xl'>This</span> is a wedding photographer webside.This webside have login and register page ans have checkout component ans protected routs</p>
                       <a href="https://wedding-photography-bebc7.web.app/"> <div class="card-actions justify-end">
                            <button class="btn btn-primary">Live link</button>
                        </div></a>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Warehouse-management</h2>
                        <p><span className='font-bold text-2xl'>Its</span> a wearhouse-management webside.4 components have this webside and some protected routes .If you not a login or resister user you cannot access this routes.Home page have Updated button if you click the button you go the other page..</p>
                        <a href="https://wearhouse-63077.web.app/">
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Live link</button>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Manufacturer-webside</h2>
                        <p><span className='font-bold text-2xl'>P</span>rojects name is Tools manufactures wevside and have some components.Dashboard components is a protected route and this components have some section.  Blog and Portfolio page show some intersting thing.</p>
                        <div class="card-actions justify-end">
                            <a href="https://manufacturer-website-2ba74.web.app/"><button class="btn btn-primary">Live link</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Projects;