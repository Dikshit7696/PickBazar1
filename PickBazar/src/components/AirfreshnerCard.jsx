import React, { useContext } from "react";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";
import list from "./AirFreshnerData";
import { CartContext } from "./CartContext";

const AirFreshnerCard = () => {
    const { addToCart, updateCartQuantity, cart } = useContext(CartContext);

    const getItemQuantity = (itemId) => {
        const cartItem = cart.find((cartItem) => cartItem.id === itemId);
        return cartItem ? cartItem.quantity : 0;
    };

    return (
        <div className="my-6 mx-10">
            <div className="grid grid-cols-4 gap-4">
                {list.map((item) => {
                    const quantity = getItemQuantity(item.id);
                    return (
                        <div key={item.id} className="h-[400px] w-72 bg-white border rounded-md p-4">
                            <img src={item.img} className="w-60 h-60 mx-auto object-contain" alt={item.name} />
                            <div className="text-start mt-4">
                                <h1 className="font-semibold">{item.name}</h1>
                                <p className="font-thin text-sm mt-2">{item.weight}</p>
                                <div className="flex items-center justify-between mt-4">
                                    <p className="font-semibold text-green-500">${item.price}</p>
                                    {quantity > 0 ? (
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => updateCartQuantity(item, quantity - 1)}
                                                className="border border-green-500 text-green-500 px-2 py-1 rounded-md hover:bg-green-700 hover:text-white"
                                            >
                                                <FaMinus />
                                                </button>
                                            <span className="font-semibold">{quantity}</span>
                                            <button
                                                onClick={() => updateCartQuantity(item, quantity + 1)}
                                                className="border border-green-500 text-green-500 px-2 py-1 rounded-md hover:bg-green-700 hover:text-white"
                                            >
                                                <FaPlus />
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => addToCart(item, 1)}
                                            className="flex items-center gap-2 font-semibold rounded-3xl border border-green-500 px-4 py-2 text-green-500 hover:bg-green-700 hover:text-white"
                                        >
                                            <MdOutlineShoppingBasket className="h-5 w-5" />
                                            Cart
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AirFreshnerCard;
