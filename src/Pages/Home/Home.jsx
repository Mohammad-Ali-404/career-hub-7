import React, { useState } from 'react';
import Banner from '../../components/Banner';
import { useLoaderData } from 'react-router-dom';
import SingleJobCatagory from '../../components/singleJobCatagory';

const Home = () => {
    const jobCatagorys = useLoaderData();
    // console.log(jobCatagorys)
    return (
        <div>
            <Banner/>
            <div className=' mt-6 text-center'>
                <h1 className='text-5xl font-semibold'>Job Catagory</h1>
                <p className='mt-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='my-8 grid grid-cols-4 '>
                
                {
                    jobCatagorys.map(jobCatagory => <SingleJobCatagory
                    key={jobCatagory.id}
                    jobCatagory = {jobCatagory}
                    ></SingleJobCatagory>)
                }
            </div>
        </div>
    );
};

export default Home;