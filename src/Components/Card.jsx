import React from 'react'

function Card({ onEditClick }) {
    return (
        <>


            <div

                className="block max-w-[300px] md:max-w-[500px]  md:max-h-[340px] py-4 backdrop-blur-lg bg-white bg-opacity-10 rounded-xl border border-white border-opacity-20"
            >



                <div className='grid grid-cols-12 items-center px-2 space-x-2'>

                    <div className='col-span-12 md:col-span-5 lg:col-span-5 mt-3 md:mt-0 order-last md:order-none'>

                        <div className='text-center'>
                            <div className='flex justify-center '>
                                <img className="rounded w-40" src="/vite.svg" alt="" />
                            </div>

                        </div>

                    </div>
                    <div className='col-span-12 md:col-span-7 lg:col-span-7  mt-3 md:mt-0 '>


                        <div className='grid grid-cols-12 space-x-2 items-center w-full  '>


                            <div className='col-span-6 md:col-span-8 lg:col-span-8  mt-3 md:mt-0 max-w-[300px]'>

                                <div className='space-y-3 '>
                                    <div className='flex items-center space-x-4'>
                                        <div>
                                            <h2 className='text-white text-xl font-medium  whitespace-nowrap '>Pascal Heimlicher</h2>
                                            <h2 className='text-white text-md  '>Aldo Luck</h2>

                                        </div>


                                    </div>
                                </div>


                            </div>


                            <div className='col-span-6 md:col-span-4 lg:col-span-4 '>
                                <div className='flex justify-end pb-4 ' >

                                    <button className='px-4 py-2 bg-[#22c55e] text-white rounded-lg' onClick={onEditClick}>
                                        Edit
                                    </button>
                                </div>


                            </div>



                        </div>
                        <div className='space-y-3 '>

                            <div className='flex items-center space-x-4 w-full'>
                                <i className="fa-solid fa-location-dot text-white"></i>
                                <div>
                                    <h2 className='text-white text-md  '>Sonnenbergstrasse 74, 8603 Schwerzenbach , Switzerland
                                    </h2>

                                </div>



                            </div>

                            <div className='flex items-center space-x-4'>
                                <i className="fa-solid fa-phone text-white"></i>
                                <h2 className='text-white text-md  '>123456789012</h2>


                            </div>


                            <div className='flex items-center space-x-4'>
                                <i className="fa-solid fa-envelope text-white"></i>
                                <div>
                                    <h2 className='text-white text-md  '>mail@pascalheimlicher.com</h2>
                                </div>



                            </div>

                            <div className='flex items-center space-x-4'>
                                <i className="fa-solid fa-globe text-white"></i>
                                <div>
                                    <a className='text-white text-sm mt-3 hover:underline ' href="#">http://www.caoneag.com</a>
                                </div>



                            </div>



                        </div>


                    </div>






                </div>
            </div>






        </>


    )
}

export default Card
