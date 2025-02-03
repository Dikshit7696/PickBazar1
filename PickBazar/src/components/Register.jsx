import React from 'react'
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

function Register() {
    return (
        <div>
            <ScrollToTop/>
            <div className='pt-28 mb-10'>
                <div className='bg-gray-50 py-10 mx-[500px] h-auto w-auto rounded-xl'>
                    <div className='justify-self-center'>
                        <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2295%2FLogo-new.png&w=1920&q=75" className="ml-10 mr-8 mt-2 h-7 w-36" alt="" />
                        <h1 className='mt-6'>By signing up, you agree to our <span className='text-green-500 font-semibold underline hover:no-underline cursor-pointer'>terms</span> & <span className='text-green-500 font-semibold underline hover:no-underline cursor-pointer'>policy</span></h1>
                    </div>
                    <div className='px-10'>
                        <div className='mt-10'>
                            <label htmlFor="Name" className='font-sans font-semibold'>Name</label>
                            <input type="name" name="name" id="name" className='border h-12 w-[440px] rounded-md mt-2' placeholder='     Your Name' required />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="Password" className='font-sans font-semibold'>Email</label>
                            <input type="email" name="email" id="email" className='border h-12 w-[440px] rounded-md mt-2' placeholder='     customer@demo.com' required />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="Password" className='font-sans font-semibold'>Password</label>
                            <input type="password" name='password' id="password" className='border h-12 w-[440px] rounded-md mt-2' placeholder='     Your Password' required />
                        </div>
                        <button className='mt-7 h-12 w-full bg-green-600 hover:bg-green-700 rounded-md justify-self-center text-white font-semibold'>Register</button>
                    </div>
                    <div className='relative mx-10 mt-14'>
                        <hr />
                        {/* <div className='mt-16 h-[1px] mx-10 bg-gray-300'></div> */}
                        <span className='absolute top-[-13px] left-[50%] px-[10px] bg-gray-50 '>Or</span>
                    </div>
                    <div className='mt-10 justify-self-center'>
                        <h1>Already have an account? <Link className='nav-link' to='/join'><span className='text-green-500 font-semibold underline hover:no-underline'>Login</span></Link></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
