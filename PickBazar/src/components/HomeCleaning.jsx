import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import './styles.css';
import { Navigation } from 'swiper/modules';
import { FaSearch } from "react-icons/fa";
// import { FaAngleDown } from "react-icons/fa";
import { GiShinyApple } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import { GiCoffeeCup } from "react-icons/gi";
import { GiDogBowl } from "react-icons/gi";
import { TfiSpray } from "react-icons/tfi";
import { LuMilk } from "react-icons/lu";
import { PiCookingPotFill } from "react-icons/pi";
import { PiBowlFoodFill } from "react-icons/pi";
import { FaGlassCheers } from "react-icons/fa";
import { GiHealthCapsule } from "react-icons/gi";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { Link } from 'react-router-dom';


function HomeCleaning() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeDropdown, setActiveDropdown] = useState('home');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        console.log(`Searching for: ${searchQuery}`);
    };

    const toggleDropdown = (category) => {
        setActiveDropdown((prev) => (prev === category ? null : category));
    };

    return (
        <div>
            <div className="flex flex-col items-center text-center pt-8 relative">
                <div className="h-full w-full absolute z-0 top-0 left-0">
                    <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Fgrocery.png&w=3840&q=75" alt="" /></div>
                <div className='relative z-20'>
                    <h1 className="font-sans font-bold text-5xl mt-64">Groceries Delivered in 90 Minutes</h1>
                    <p className="font-sans text-lg mt-8">Get your healthy foods & snacks delivered at your doorsteps all day, every day.</p>
                    <div className="flex items-center w-auto mt-8 drop-shadow-xl">
                        <input type="text" placeholder="   Search your products from here" value={searchQuery} onChange={handleSearchChange} className="w-[700px] h-14 p-3  rounded-l-md focus:outline-none focus:ring-1 focus:ring-green-500" />
                        <button onClick={handleSearch} className="w-32 h-14 px-4 py-3 text-white font-sans font-semibold bg-green-500 rounded-r-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"><FaSearch className='inline mr-2 font-bold' />Search</button>
                    </div>
                </div>
                <div className="w-full h-auto px-7 mt-[380px] bg-white py-10">
                    <Swiper slidesPerView={3} spaceBetween={0} navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide><img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F902%2Foffer-5.png&w=640&q=75" className='w-[475px] h-[230px]' alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F903%2Foffer-4.png&w=640&q=75" className='w-[475px] h-[230px]' alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Foffer-3.png&w=640&q=75" className='w-[475px] h-[230px]' alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F905%2Foffer-2.png&w=640&q=75" className='w-[475px] h-[230px]' alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F906%2Foffer-1.png&w=640&q=75" className='w-[475px] h-[230px]' alt="" /></SwiperSlide>
                    </Swiper>
                </div>
                <div className="w-full bg-gray-100  flex relative z-1">
                    <div className="col-span-1 w-60 h-auto pb-4 bg-white shadow-md pt-10 mt-0.5">
                        <ul className="space-y-6 sticky top-32 left-0">
                            <li className="flex items-center cursor-pointer hover:text-green-500" onClick={() => toggleDropdown('fruits')}><GiShinyApple className="mr-3 ml-6 w-5 h-5" /><Link className='nav-link' to='/fruitsvegetables'>Fruits & Vegetables</Link></li>
                            {activeDropdown === 'fruits' && (
                                <ul className="space-y-4 mr-10 mt-1">
                                    <li className="hover:text-green-500 cursor-pointer mr-8"><Link className='nav-link' to='/fruits'>Fruits</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer"><Link className='nav-link' to='/vegetables'>Vegetables</Link></li>
                                </ul>
                            )}
                            <li className="flex items-center cursor-pointer hover:text-green-500" onClick={() => toggleDropdown('meat')}><TbMeat className="mr-3 ml-6 w-5 h-5" /><Link className='nav-link' to='/meat&fish'> Meat & Fish</Link></li>
                            {activeDropdown === 'meat' && (
                                <ul className="space-y-4 mr-10 mt-1">
                                    <li className="hover:text-green-500 cursor-pointer mr-2"><Link className='nav-link' to='/fish'>Fresh Fish</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-10"><Link className='nav-link' to='/meat'>Meat</Link></li>
                                </ul>
                            )}
                            <li className="flex items-center cursor-pointer hover:text-green-500" onClick={() => toggleDropdown('snacks')}><GiCoffeeCup className="mr-3 ml-6 w-5 h-5" /><Link className='nav-link' to='/snacks'> Snacks</Link></li>
                            {activeDropdown === 'snacks' && (
                                <ul className="space-y-4 mr-10 mt-1">
                                    <li className="hover:text-green-500 cursor-pointer ml-8"><Link className='nav-link' to='/nuts&biscuits'>Nuts & Biscuits</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-2"><Link className='nav-link' to='/chocolates'>Chocolates</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-8"><Link className='nav-link' to='/crisps'>Crisps</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer ml-10"><Link className='nav-link' to='/noodles&pasta'>Noodles & Pasta</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-8"><Link className='nav-link' to='/sauce'>Sauce</Link></li>
                                </ul>
                            )}
                            <li className="flex items-center cursor-pointer hover:text-green-500" onClick={() => toggleDropdown('pet')}><GiDogBowl className="mr-3 ml-6 w-5 h-5" /><Link className='nav-link' to='/petcare'>Pet Care</Link></li>
                            {activeDropdown === 'pet' && (
                                <ul className="space-y-4 mr-10 mt-1">
                                    <li className="hover:text-green-500 cursor-pointer mr-3"><Link className='nav-link' to='/catfood'>Cat Food</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-1"><Link className='nav-link' to='/dogfood'>Dog Food</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer ml-2"><Link className='nav-link' to='/accessories'>Accessories</Link></li>
                                </ul>
                            )}
                            <li className="flex items-center cursor-pointer hover:text-green-500" onClick={() => toggleDropdown('home')}><TfiSpray className="mr-3 ml-6 w-5 h-5" /><Link className='nav-link' to='/home&cleaning'>Home & Cleaning</Link></li>
                            {activeDropdown === 'home' && (
                                <ul className="space-y-4 mr-10 mt-1">
                                    <li className="hover:text-green-500 cursor-pointer ml-3"><Link className='nav-link' to='/airfreshner'>Air Freshner</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer ml-[53px]"><Link className='nav-link' to='/cleaning'>Cleaning Products</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer ml-[60px]"><Link className='nav-link' to='/kitchen'>Kitchen Accessories</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-5"><Link className='nav-link' to='/laundary'>Laundry</Link></li>
                                </ul>
                            )}
                            <li className="flex items-center cursor-pointer hover:text-green-500" onClick={() => toggleDropdown('dairy')}><LuMilk className="mr-3 ml-6 w-5 h-5" /><Link className='nav-link' to='/dairy'> Dairy</Link></li>
                            {activeDropdown === 'dairy' && (
                                <ul className="space-y-4 mr-10 mt-1">
                                    <li className="hover:text-green-500 cursor-pointer mr-10"><Link className='nav-link' to='/milk'>Milk</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-7"><Link className='nav-link' to='/butter'>Butter</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-10"><Link className='nav-link' to='/egg'>Egg</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-5"><Link className='nav-link' to='/yogurt'>Yogurt</Link></li>
                                </ul>
                            )}
                            <li className="flex items-center cursor-pointer hover:text-green-500" onClick={() => toggleDropdown('cooking')}><PiCookingPotFill className="mr-3 ml-6 w-5 h-5" /><Link className='nav-link' to='/cooking'> Cooking</Link></li>
                            {activeDropdown === 'cooking' && (
                                <ul className="space-y-4 mr-10 mt-1">
                                    <li className="hover:text-green-500 cursor-pointer mr-12"><Link className='nav-link' to='/oil'>Oil</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-10"><Link className='nav-link' to='/rice'>Rice</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer ml-4"><Link className='nav-link' to='/slat&sugar'>Salt & Sugar</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-6"><Link className='nav-link' to='/spices'>Spices</Link></li>
                                </ul>
                            )}
                            <li className="flex items-center cursor-pointer hover:text-green-500" onClick={() => toggleDropdown('breakfast')}><PiBowlFoodFill className="mr-3 ml-6 w-5 h-5" /><Link className='nav-link' to='/breakfast'> Breakfast</Link></li>
                            {activeDropdown === 'breakfast' && (
                                <ul className="space-y-4 mr-10 mt-1">
                                    <li className="hover:text-green-500 cursor-pointer mr-7"><Link className='nav-link' to='/bread'>Bread</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-6"><Link className='nav-link' to='/cereal'>Cereal</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-9"><Link className='nav-link' to='/jam'>Jam</Link></li>
                                </ul>
                            )}
                            <li className="flex items-center cursor-pointer hover:text-green-500" onClick={() => toggleDropdown('beverage')}><FaGlassCheers className="mr-3 ml-6 w-5 h-5" /><Link className='nav-link' to='/beverage'> Beverage</Link></li>
                            {activeDropdown === 'beverage' && (
                                <ul className="space-y-4 mr-10 mt-1">
                                    <li className="hover:text-green-500 cursor-pointer mr-5"><Link className='nav-link' to='/coffee'>Coffee</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer ml-8"><Link className='nav-link' to='/energy'>Energy Drinks</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-7"><Link className='nav-link' to='/juice'>Juice</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer ml-5"><Link className='nav-link' to='/fizzy'>Fizzy Drinks</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-9"><Link className='nav-link' to='/tea'>Tea</Link></li>
                                </ul>
                            )}
                            <li className="flex items-center cursor-pointer hover:text-green-500" onClick={() => toggleDropdown('health')}><GiHealthCapsule className="mr-3 ml-6 w-5 h-5" /><Link className='nav-link' to='/health&beauty'> Health & Beauty</Link></li>
                            {activeDropdown === 'health' && (
                                <ul className="space-y-4 mr-10 mt-1">
                                    <li className="hover:text-green-500 cursor-pointer mr-7"><Link className='nav-link' to='/bath'>Bath</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-4"><Link className='nav-link' to='/cream'>Cream</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer ml-4"><Link className='nav-link' to='/deodorant'>Deodorant</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer ml-2"><Link className='nav-link' to='/face'>Face Care</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer ml-1"><Link className='nav-link' to='/oral'>Oral Care</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer ml-11"><Link className='nav-link' to='/shaving'>Shaving Needs</Link></li>
                                </ul>
                            )}
                        </ul>
                    </div>
                    <div className='mt-6 mx-10'>
                        <div className='grid grid-cols-4 gap-4'>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F281%2Fair_freshner_acana_ozmo.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Ozmo Air Fabric Freshner</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$20.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$15.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F282%2Fair_freshner_air_wick_essential_oils.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Air Wick Essential Oils</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$20.00</p>
                                        <button className='ml-28 mt-11 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F283%2Fair_freshner_ambipur_air_sweet_citrus%2526zest.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Ambi Pure Air</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$15.00</p>
                                        <button className='ml-28 mt-11 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F284%2Fair_freshner_febreze_air_bora_bora.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Febreze Air Bora Waters</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$20.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$15.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F285%2Fair_freshner_febreze_air_hawaiian.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Febreze Air Hawaiian</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$15.00</p>
                                        <button className='ml-28 mt-11 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F286%2Fair_freshner_sc_johnson_glade_blue_odyssey.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Glade Blue Odssey</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$18.00</p>
                                        <button className='ml-28 font-semibold mt-11 rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F287%2Fair_freshner_sc_johnson_glade_clean_linen.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Glade Clean Linen</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$20.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$18.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F288%2Fair_freshner_febreze_air_effects.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Febreze Air Effects</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$15.00</p>
                                        <button className='ml-28 font-semibold mt-11 rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F289%2Fcleaning_supply_astonish.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Astonish Oven Power Spray</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$15.00</p>
                                        <button className='ml-28 mt-11 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F290%2Fcleaning_supply_bona.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Bona Hardwood Floor Cleaner</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$10.00</p>
                                        <button className='ml-28 mt-11 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F291%2Fcleaning_supply_ever_spring.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Ever Spring Glass Cleaner</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$10.00</p>
                                        <button className='ml-28 mt-11 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2Fcleaning_supply_glitz_steel_cleaner.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Glitz Bbq Stainless Steel Cleaner</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$20.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$15.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F293%2Fcleaning_supply_method.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Method All Purpose Cleaner</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$20.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$15.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F295%2Fcleaning_supply_glitz_glass_cleaner.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Glitz Outdoor Glass Cleaner</h1>
                                    <p className='font-thin text-sm mt-2'>1 Stuck)</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$40.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$32.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F297%2Flaundry_products_woolite.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center object-contain' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Woolite Gentle Cycle</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$30.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$24.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F298%2Flaundry_products_tide.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Tide Downy</h1>
                                    <p className='font-thin text-sm mt-2'>4lb</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$30.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$22.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F299%2Flaundry_products_seventh_generation.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>SeventH Generation Sensative Skin</h1>
                                    <p className='font-thin text-sm mt-2'>4lb</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$30.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$24.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F300%2Flaundry_products_safe_wash.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Safe Wash</h1>
                                    <p className='font-thin text-sm mt-2'>4lb</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$30.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$24.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F301%2Flaundry_products_purex.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Purex Oxi</h1>
                                    <p className='font-thin text-sm mt-2'>4lb</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$22.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl border mt-11 border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F302%2Flaundry_products_persil.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Persil Power Gel</h1>
                                    <p className='font-thin text-sm mt-2'>4lb</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$30.00</p>
                                        <button className='ml-28 mt-11 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md mb-10'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F862%2FDaz-2.png&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Daz Bright & Compact</h1>
                                    <p className='font-thin text-sm mt-2'>5lb</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$25.00</p>
                                        <button className='ml-28 mt-11 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeCleaning;

