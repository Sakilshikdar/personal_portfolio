import React from 'react';

const Contract = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-3xl text-primary my-7'>Contract Me</h1>
            <div class="card w-11/12 lg:w-6/12 shadow-2xl mx-auto bg-base-100">
                <div class="card-body">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" name='user_email' placeholder="email" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Message</span>
                        </label>
                        <input type="text" placeholder="message" name='message' className="input input-bordered" />
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contract;