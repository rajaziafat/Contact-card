import React, { useRef, useState, useEffect } from 'react';

function EditCard({ onSaveClick }) {
    const [isLoading, setIsLoading] = useState(true); // State variable to track loading
    const [image, setImage] = useState("/vite.svg");
    const fileInputRef = useRef(null);

    // Simulate loading effect with useEffect
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Simulating a 2 second loading time

        return () => clearTimeout(timeout);
    }, []); // Run only once on component mount

    // Function to handle image change
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            setImage(e.target.result);
        };

        reader.readAsDataURL(file);
    };

    return (
        <>
            {isLoading ? (
                <div className="loader text-white">Loading...</div>
            ) : (

                <div

                    className="block max-w-[340px] md:max-w-[600px]  md:max-h-[340px] py-4 backdrop-blur-lg bg-white bg-opacity-10 rounded-xl border border-white border-opacity-20"
                >







                    <div className='grid grid-cols-12 space-x-2 items-center '>
                        <div className='col-span-12 md:col-span-5 lg:col-span-5 order-last md:order-none mt-3 md:mt-0'>

                            <div className='text-center'>
                                <div className='flex justify-center '>
                                    {/* Display uploaded image */}
                                    <img className="rounded w-40 cursor-pointer hover:opacity-50 duration-200 ease-in-out" src={image} alt="" onClick={() => fileInputRef.current.click()} />
                                    {/* Hidden label to trigger file input */}
                                    <label className="hidden">
                                        <input  ref={fileInputRef} type="file" onChange={handleImageChange} accept="image/*" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-7 lg:col-span-7 flex justify-start  mt-3 md:mt-0 '>


                            <div className='space-y-3 md:pr-2 px-2 pr-4 '>
                                <div className='grid grid-cols-12 space-x-4 items-center '>

                                    <div className='col-span-7 md:col-span-7 lg:col-span-7  '>
                                        <div className=' '>


                                            <div className='flex items-center w-full'>

                                                <div className='w-full'>
                                                    <input type="text" className="text-white w-full outline-none  p-0  text-xl font-medium rounded-none  bg-transparent  border-b " defaultValue="Pascal Heimlicher" />

                                                    <input type="text" className="text-white  w-full outline-none p-0 text-md rounded-none bg-transparent border-b " defaultValue="Aldo Luck" />
                                                </div>
                                            </div>



                                        </div>
                                    </div>



                                    <div className='col-span-5 md:col-span-5 lg:col-span-5'>
                                        <div className='flex justify-end pb-5 ' >
                                            <button className='px-4 py-2 bg-[#22c55e] text-white rounded-lg ' onClick={onSaveClick}>
                                                Save
                                            </button >
                                        </div>

                                    </div>
                                </div>



                                <div className='flex items-center space-x-4 w-full max-w-[500px]'>
                                    <i className="fa-solid fa-location-dot text-white"></i>
                                    {/* Editable input for address */}
                                    <textarea
                                        rows="2"
                                        className="text-white  text-md bg-transparent border-b rounded-none  outline-none w-full md:min-w-[300px]">
                                        Sonnenbergstrasse 74, 8603 Schwerzenbach, Switzerland
                                    </textarea>
                                </div>


                                <div className='flex items-center space-x-4 w-full'>
                                    <i className="fa-solid fa-phone text-white"></i>
                                    {/* Editable input for phone */}
                                    <input type="text" className="text-white w-full  text-md bg-transparent border-b  rounded-none outline-none" defaultValue="123456789012" />
                                </div>
                                <div className='flex items-center space-x-4 w-full'>
                                    <i className="fa-solid fa-envelope text-white"></i>
                                    {/* Editable input for email and website */}
                                 
                                        <input type="email" className="text-white w-full text-md bg-transparent border-b  rounded-none outline-none" defaultValue="mail@pascalheimlicher.com" />
                                  
                                </div>


                                <div className='flex items-center space-x-4'>
                                    <i className="fa-solid fa-globe text-white"></i>
                                    {/* Editable input for email and website */}
                                
                                        <input type="url" className="text-white w-full  text-sm bg-transparent border-b rounded-none outline-none " defaultValue="http://www.caoneag.com" />
                                  
                                </div>

                            </div>
                        </div>




                    </div>
                </div>
            )}
        </>
    );
}

export default EditCard;
