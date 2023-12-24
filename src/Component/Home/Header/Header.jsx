import React from 'react';
import { Link } from 'react-router-dom';
import navbar from '../../../assets/buss.avif'

const Header = () => {
    return (
        <div>
            <div className='bg-cover bg-center h-screen w-full' style={{ background: `url(${navbar})` }}  >
                <div className='flex justify-around'>
                    <div> <p className='mt-5 shadow-2xl text-white'>BD_TICKET</p></div>
                    <div className='list-none flex justify-end gap-5 p-6'>
                        <Link> <li> Bus</li></Link>
                        <Link> <li> Tour</li></Link>
                        <Link> <li> Events</li></Link>
                        <Link> <li> Offers</li></Link>
                        <Link> <li> Options</li></Link>

                    </div>
                </div>
                {/* <div>
                <img src={navbar} alt="" />
            </div> */}
                <div className='text-center mt-16'>
                    <h1>More Routes, More Tickets
                    </h1>

                    <p className='mt-5'>No 1 online Ticketing Platform</p>
                </div>
                <div className='p-10 my-auto mx-auto  mt-10 rounded-lg bg-white w-[800px] md:flexflex justify-center items-center'>
                    <form action="" >
                        <input type="text" placeholder="Type here" className="mr-2 input input-bordered input-md w-fullmax-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered input-md w-fulmax-w-xs" />
                        <input type="date" className='m-1' name="" id="" />
                        <input className='btn' type="submit" value="Search" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Header;