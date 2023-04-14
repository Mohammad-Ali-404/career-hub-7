import React from 'react';
const SingleJobCatagory = ({jobCatagory}) => {
    const {id, img, jobs, title} = jobCatagory;
    return (
        <div className='my-8'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{jobs}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleJobCatagory;