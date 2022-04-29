import React from 'react';

const Team = () => {
    return (
        <div className='bg-team-bg text-white'>
            <h1 className='text-3xl mx-auto text-center font-bold border-b-2 pb-1 border-[#FF5400] w-1/2 pt-10'>WHY CLIENTS LOVE US</h1>
            <p className='text-center mb-16 mt-10'>Many clients are thrilled by the service that we deliver and are happy to tell us. Read about what some have said about us here.</p>
            <div className='flex justify-center items-center my-6'>
                <img className='border-2 mx-2 border-[#FF5400] rounded-full h-32 opacity-70' src="https://i.ibb.co/hFC0Ydg/leader1.jpg" alt="" />
                <img className='border-2 mx-2 border-[#FF5400] rounded-full h-32 opacity-70' src="https://i.ibb.co/HYV7sjt/leader2.jpg" alt="" />
                <img className='border-2 mx-2 border-[#FF5400] rounded-full' src="https://i.ibb.co/Vj44q52/team3.jpg" alt="" />
                <img className='border-2 mx-2 border-[#FF5400] rounded-full h-32 opacity-70' src="https://i.ibb.co/n6KtQMN/team1.png" alt="" />
                <img className='border-2 mx-2 border-[#FF5400] rounded-full h-32 opacity-70' src="https://i.ibb.co/LYFgZV1/team2.jpg" alt="" />

            </div>
            <h3 className='font-bold mx-auto text-center w-[80%] my-6 pt-11'>Phenomenal customer service. I ran into an issue with install and they logged into my website and fixed it with a few hours. This is definitely my go-to-theme developer.</h3>
            <h3 className='text-lg font-bold text-center pb-10'><span className='text-[#FF5400]'>Naro MathDoe</span>-Engineer</h3>
            <div className='flex justify-center items-center'>
                <p className='text-7xl mx-2 text-[#FF5400]'>.</p>
                <p className='text-7xl mx-2 text-[#FF5400]'>.</p>
                <p className='text-9xl mx-2 m-0 pb-8  text-[#FF5400] '>.</p>
                <p className='text-7xl mx-2 text-[#FF5400]'>.</p>
                <p className='text-7xl mx-2 text-[#FF5400]'>.</p>
            </div>
        </div>
    );
};

export default Team;