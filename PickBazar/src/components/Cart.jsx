import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from "./CartContext";
import { BsBagCheckFill } from "react-icons/bs";
import { FiPlus, FiMinus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

function Cart() {
    const { cart, updateCartQuantity, removeFromCart } = useContext(CartContext);
    const [isOpen, setIsOpen] = useState(false);
    const [quantities, setQuantities] = useState({});
    const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

    useEffect(() => {
        const savedQuantities = JSON.parse(localStorage.getItem("cartQuantities")) || {};
        setQuantities(savedQuantities);
    }, []);

    useEffect(() => {
        if (Object.keys(quantities).length > 0) {
            localStorage.setItem("cartQuantities", JSON.stringify(quantities));
        }
    }, [quantities]);

    useEffect(() => {
        setQuantities((prevQuantities) => {
            const newQuantities = { ...prevQuantities };
            cart.forEach((item) => {
                if (!(item.id in newQuantities)) {
                    newQuantities[item.id] = 1;
                }
            });
            return newQuantities;
        });
    }, [cart]);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [isOpen]);

    return (
        <div>
            <div className="text-center">
                <button
                    className="bg-green-500 hover:bg-green-600 h-24 w-24 text-white rounded-l-md fixed left-[94%] pt-1"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="flex items-center flex-col">
                        <div className="flex items-center font-sans">
                            <BsBagCheckFill />
                            <h1 className="ml-[5px] font-sans font-semibold">{cart.length} {cart.length > 1 ? "Items" : "Item"}</h1>
                        </div>
                        <h1 className="mt-2 rounded-md bg-white h-10 w-16 pt-2 font-sans font-semibold text-green-500">${totalPrice.toFixed(2)}</h1>
                    </div>
                </button>
            </div>

            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
                    onClick={() => setIsOpen(false)}>
                </div>
            )}

            <div className="">
                <div
                    className={`fixed top-[12%] right-0 z-50 h-full bg-white w-[450px] dark:bg-gray-800 shadow-lg flex flex-col transition-transform
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className="p-4 flex justify-between items-center sticky top-0 bg-white z-10">
                        <h5 className="flex items-center font-sans text-green-500 text-lg">
                            <BsBagCheckFill className="text-2xl" />
                            <h1 className="ml-2 font-semibold">{cart.length} {cart.length > 1 ? "Items" : "Item"}</h1>
                        </h5>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-green-500 hover:text-white rounded-full text-sm w-8 h-8 flex items-center justify-center"
                            onClick={() => setIsOpen(false)}
                        >
                            <RxCross2 />
                        </button>
                    </div>
                    <hr />
                    <div className="flex-1 overflow-y-auto p-4 max-h-[calc(100vh-140px)]">
                        {cart.map((item) => (
                            <div key={item.id} className="bg-gray-20 h-28 flex items-center mb-4">
                                <div className="bg-gray-200 h-24 w-8 rounded-full flex flex-col items-center justify-center">
                                    <button onClick={() => updateCartQuantity(item, item.quantity + 1)}><FiPlus /></button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateCartQuantity(item, item.quantity - 1)}><FiMinus /></button>
                                </div>
                                <img src={item.img} className="w-16 h-16 mx-5" alt={item.name} />
                                <div className="flex-1 mr-14">
                                    <p className="font-sans font-semibold">{item.name}</p>
                                    <p className="font-sans font-semibold text-green-500 my-1.5">${item.price}</p>
                                    <p className="text-sm">{item.quantity || 1} X {item.weight}</p>
                                </div>
                                <div className="flex justify-center items-end">
                                    <p className="font-sans font-semibold w-4 mr-14">
                                        ${totalPrice.toFixed(2)}
                                    </p>
                                    <button className="mt-2 h-6 w-6 text-gray-400 bg-transparent hover:bg-green-500 rounded-full hover:text-red-500 flex items-center justify-center"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        <RxCross2 className='h-3.5 w-3.5 ' />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 bg-white shadow-md sticky bottom-0 w-full">
                        <Link className='nav-link' to='/join'>
                            <button className="bg-green-500 rounded-3xl hover:bg-green-600 w-full h-14 flex items-center justify-between px- shadow-md">
                                <span className="text-white font-semibold ml-6">Checkout</span>
                                <span className="text-green-500 bg-white rounded-3xl font-semibold px-4 py-3 mr-1">${totalPrice.toFixed(2)}</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;