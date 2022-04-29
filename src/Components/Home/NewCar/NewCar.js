// import React, { useEffect, useRef, useState } from 'react';
// import { motion } from 'framer-motion';

// const NewCar = () => {

//     const newCars = [
//         { name: 'FORD ESCAPE 2019', price: '$50 350MSRP: $50 000', description: 'Mini has broken tradition by ditching its torque converter automatic gearbox for', releaseDate: '2019', rp: '1500', fut: 'Auto', img: 'https://i.ibb.co/Tvq5DK5/car3.jpg' },
//         { name: 'FORD ESCAPE 2021', price: '$50 350MSRP: $49 300', description: 'Mini has broken tradition by ditching its torque converter automatic gearbox for', releaseDate: '2021', rp: '1500', fut: 'Auto', img: 'https://i.ibb.co/2d9XH4j/car7.jpg' },
//         { name: 'CHEVROLET CAMARO 2018', price: '$58 000MSRP: $60 000', description: 'Mini has broken tradition by ditching its torque converter automatic gearbox for', releaseDate: '2019', rp: '1500', fut: 'Auto', img: 'https://i.ibb.co/sRVp9Nj/car2.jpg' },
//         { name: 'FORD ESCAPE 2019', price: '$50 350MSRP: $50 000', description: 'Mini has broken tradition by ditching its torque converter automatic gearbox for', releaseDate: '2019', rp: '1500', fut: 'Auto', img: 'https://i.ibb.co/Tvq5DK5/car3.jpg' },
//         { name: 'FORD ESCAPE 2021', price: '$50 350MSRP: $49 300', description: 'Mini has broken tradition by ditching its torque converter automatic gearbox for', releaseDate: '2021', rp: '1500', fut: 'Auto', img: 'https://i.ibb.co/2d9XH4j/car7.jpg' },
//         { name: 'CHEVROLET CAMARO 2018', price: '$58 000MSRP: $60 000', description: 'Mini has broken tradition by ditching its torque converter automatic gearbox for', releaseDate: '2019', rp: '1500', fut: 'Auto', img: 'https://i.ibb.co/sRVp9Nj/car2.jpg' },
//     ];
//     const [width, setWidth] = useState();
//     const carousel = useRef();

//     useEffect(() => {
//         setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
//     }, [])

//     return (
//         <div className='bg-hero-pattern pt-6 md:h-[600px]'>
//             <div className='flex rounded-lg justify-center mb-6'>
//                 <div className='font-bold bg-white text-black p-3 px-10'>Our</div>
//                 <div className='font-bold bg-[#FF5400] text-white p-3'>INVENTORY</div>
//             </div>
//             <p className='text-white text-center my-10'>Enjoy the ultimate car model. We are working hard to brings new advanced car interfaces to <span className='text-orange-500 font-bold'>AUOT SHOWROOM</span></p>
//             <motion.div className='overflow-hidden cursor-grab' ref={carousel} whileTap={{ cursor: 'grabbing' }} >
//                 <motion.div className='flex' drag='x' dragConstraints={{ right: 0, left: -width }}>
//                     {
//                         newCars.map((car) => {
//                             return (
//                                 <motion.div className='w-100 h-100 mx-5 cursor-pointer pointer-events-none'>
//                                     <div className='w-[300px] bg-white mb-3  ml-10 md:ml-0'>
//                                         <img className='w-[300px] h-[250px] hover:opacity-70 hover:translate-x-6' src={car.img} alt="" />
//                                         <div className='p-2'>
//                                             <h1 className='border-l-2 border-[#FF5400] pl-2 font-bold'>{car.name}</h1>
//                                             <p>{car.description}</p>
//                                             <div className='flex text-gray-500'>
//                                                 <p className='border-l-2 border-[#FF5400] mr-2 font-bold pl-1 mt-2 flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 px-1" viewBox="0 0 20 20" fill="currentColor">
//                                                     <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
//                                                     <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
//                                                 </svg>{car.releaseDate}</p>
//                                                 <p className='border-l-2 border-[#FF5400] mr-2 font-bold pl-1 mt-2 flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                                                     <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
//                                                 </svg>{car.rp}</p>
//                                                 <p className='border-l-2 border-[#FF5400] mr-2 font-bold pl-1 mt-2 flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                                                     <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//                                                 </svg>{car.fut}</p>
//                                             </div>
//                                             <button className='bg-[#FF5400] text-white p-2 px-5 rounded-lg w-100'>Manage Stock</button>
//                                         </div>
//                                     </div>
//                                 </motion.div>
//                             )
//                         })
//                     }
//                 </motion.div>

//             </motion.div>
//         </div>
//     );
// };

// export default NewCar;