import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon
} from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'
import '../Header/Header.css'

export default function Header() {
    return (
        <Popover className="menu bg-neutral-100">
            <div className="mx-auto max-w-7xl px-3 sm:px-3">
                <div className="flex items-center justify-between border-b-2 border-gray-100 py-3 md:justify-start md:space-x-5">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <NavLink to="/home">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="	https://www.galaxycine.vn/website/images/galaxy-logo.png"
                                alt=""
                            />
                        </NavLink>
                    </div>
                    <div className="my-2 -mr-2 md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden space-x-10 link md:flex">
                        <NavLink style={isActive => ({
                            color: isActive ? "darkorange" : "black"
                        })} to="/movies" className="text-base font-medium">
                            Phim
                        </NavLink >
                        <NavLink style={isActive => ({
                            color: isActive ? "darkorange" : "black"
                        })}
                            to="/movieTheater" className="text-base font-medium ">
                            Cụp Rạp
                        </NavLink>
                        <NavLink style={isActive => ({
                            color: isActive ? "darkorange" : "black"
                        })} to="/news" className="text-base font-medium">
                            Tin Tức
                        </NavLink>
                        <NavLink style={isActive => ({
                            color: isActive ? "darkorange" : "black"
                        })} to="/application" className="text-base font-medium ">
                            Ứng Dụng
                        </NavLink>
                    </Popover.Group>
                    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                        <NavLink style={isActive => ({
                            color: isActive ? "darkorange" : "darkgray"
                        })} to="/login" className="whitespace-nowrap px-2 text-base font-medium ">
                            <i className="fa-solid fa-user px-1" />
                            Sign in
                        </NavLink>
                        <NavLink style={isActive => ({
                            color: isActive ? "darkorange" : "darkgray"
                        })} to="/register" className="whitespace-nowrap px-2 border-l-2 border-l-gray-300 text-base font-medium ">
                             <i className="fa-solid fa-user-plus px-1" ></i>
                            Sign up
                        </NavLink>
                    </div>
                </div>
            </div>
            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                    <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className=" pt-2 pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://www.galaxycine.vn/website/images/galaxy-logo.png"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <div className='text-center my-2'>
                                    <NavLink style={isActive => ({
                                        color: isActive ? "darkorange" : "darkgray"
                                    })} to="/home" className="text-base font-medium ">
                                        Phim
                                    </NavLink >
                                </div>
                                <div className='text-center my-2'>
                                    <NavLink style={isActive => ({
                                        color: isActive ? "darkorange" : "darkgray"
                                    })}
                                        to="/movieTheater" className="text-base font-medium ">
                                        Cụp Rạp
                                    </NavLink>
                                </div >
                                <div className='text-center my-2'>
                                    <NavLink style={isActive => ({
                                        color: isActive ? "darkorange" : "darkgray"
                                    })} to="/news" className="text-base font-medium">
                                        Tin Tức
                                    </NavLink>
                                </div>
                                <div className='text-center my-2'>
                                    <NavLink style={isActive => ({
                                        color: isActive ? "darkorange" : "darkgray"
                                    })} to="/application" className="text-base font-medium ">
                                        Ứng Dụng
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-1 px-5 pb-4  flex flex-col">
                                <NavLink style={isActive => ({
                                    color: isActive ? "darkorange" : "white"
                                })} to="/login" className="whitespace-nowraptext-base font-medium bg-orange-500 text-center mb-2 py-1 rounded-lg">
                                    <i className="fa-solid fa-user px-1" />
                                    Sign in
                                </NavLink>
                                <NavLink style={isActive => ({
                                    color: isActive ? "darkorange" : "white"
                                })} to="/register" className="whitespace-nowrap text-base font-medium bg-orange-500 text-center pl-3 py-1 rounded-lg">
                                    <i className="fa-solid fa-user-plus"></i>
                                    Sign up
                                </NavLink>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
