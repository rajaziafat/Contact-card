import React from 'react'

function Card({ onEditClick }) {
    return (
        <>


            <div

                className="block w-full md:max-w-[700px]  md:max-h-[340px] py-4 backdrop-blur-lg bg-white bg-opacity-10 rounded-xl border border-white border-opacity-20"
            >
                <div className='grid grid-cols-12 space-x-2 items-center  px-5'>


                    <div className='col-span-12 md:col-span-6 lg:col-span-6  mt-3 md:mt-0 '>

                        <div className='space-y-3 px-2'>
                            <div className='flex items-center space-x-4'>
                                <div>
                                    <h2 className='text-white text-xl font-medium  '>CA ONE AG</h2>
                                    <h2 className='text-white text-md  '>Aldo Luck</h2>

                                </div>


                            </div>
                            <div className='flex items-center space-x-4 max-w-[300px]'>
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


                    <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                        <div className='flex justify-end pb-4 ' onClick={onEditClick}>

                            <button className='px-4 py-2 bg-[#22c55e] text-white rounded-lg'>
                                Edit
                            </button>
                        </div>
                        <div className='text-center'>
                            <div className='flex justify-center md:justify-end'>
                                <img className="rounded w-40" src="/vite.svg" alt="" />
                            </div>

                        </div>

                    </div>



                </div>
            </div>






        </>


    )
}

export default Card
