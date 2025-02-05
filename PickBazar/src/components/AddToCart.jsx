import React, { useState } from 'react';
import { BsBagCheckFill } from "react-icons/bs";
import { FiPlus, FiMinus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

function AddToCart() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const toggleModal = () => {
        if (!isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        setIsModalOpen(!isModalOpen);
    };

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    return (
        <div>
            <div className="fixed top-[50%] right-0 h-full overflow-hidden">
                <button onClick={toggleModal} className="block bg-green-500 hover:bg-green-600 rounded-l-md h-24 w-24 text-white font-semibold text-sm" type="button">
                    <BsBagCheckFill className='mr-2 inline' />0 Item
                    <div className='bg-white h-10 w-16 rounded-md justify-self-center mt-2 text-green-500 py-2'>$0.00</div>
                </button>
            </div>
            {isModalOpen && (
                <div tabIndex="-1" aria-hidden="true" className="fixed top-[9%!important] right-0 left-[72%!important] z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-screen max-w-2xl max-h-full">
                        <div className="relative bg-white h-[655px] w-[410px] rounded-lg pb-5 shadow-sm dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                                <h3 className="text-xl font-semibold text-green-600 dark:text-white"><BsBagCheckFill className='mr-2 inline mb-1' />1 Item
                                </h3>
                                <button onClick={toggleModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="space-y-4 h-[500px] overflow-auto">
                                <div className='flex items-center h-28 w-full bg-slate-20 my-5'>
                                    <div className='bg-gray-200 h-24 w-8 rounded-3xl mx-5 flex flex-col items-center justify-between py-2'>
                                        <button onClick={increaseQuantity} className='hover:text-green-500'><FiPlus /></button>
                                        <div>{quantity}</div>
                                        <button onClick={decreaseQuantity} className='hover:text-red-500'><FiMinus /></button>
                                    </div>
                                    <div className=''>
                                        <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2%2Fconversions%2FBabySpinach-thumbnail.jpg&w=1920&q=75" className='h-16 w-16 rounded-full' alt="Baby Spinach" />
                                    </div>
                                    <div className='justify-start'>
                                        <h1 className='mx-6 font-bold text-sm'>Baby Spinach</h1>
                                        <p className='text-sm font-semibold text-green-500 py-3'>$0.00</p>
                                        <p className='text-sm'>{quantity} x 2Pfund</p>
                                    </div>
                                    <div className='flex'>
                                        <p className='font-semibold text-sm pl-12'>$0.00</p>
                                        <button className='ml-2 w-6 h-6 hover:bg-gray-200 rounded-full hover:text-red-500'>
                                            <RxCross2 className='ml-[6px] h-3 w-3 mb-0.5' />
                                        </button>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div className='h-20 w-[410px] fixed bottom-0 py-4'>
                                <button onClick={toggleModal} className='bg-green-500 hover:bg-green-600 h-14 w-96 justify-between py-2 mx-3 text-white font-bold rounded-3xl flex'>
                                    <span className='px-5 py-2'>Checkout</span>
                                    <span className='px-5 py-2 mr-2 rounded-full bg-white text-green-500'> $0.00</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AddToCart;
