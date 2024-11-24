"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path:string) => pathname === path;

    return (
        <>
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"></div>
            )}
            <nav className="sticky top-0 p-3 shadow-md z-50">
                <div className="flex flex-wrap items-center justify-between mx-auto">
                    <Link href={"/"} className="text-3xl text-white font-semibold">{"{}"}</Link> 
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="inline-flex items-center p-2 text-white rounded md:hidden hover:bg-gray-700"
                        aria-label="Toggle Menu"
                    >
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                    <div className={`${isMenuOpen ? "block" : "hidden"} md:flex flex-col md:flex-row md:space-x-8 w-full md:w-auto mt-4 md:mt-0`} id="navbar">
                        <ul className="flex flex-col items-center md:flex-row md:space-x-8 w-full">
                            <li>
                                <Link href={"/"} className={`block py-2 ${
                                        isActive("/") ? "text-white" : "text-[#ADB7BE]"
                                    } hover:text-white`}>
                                    Home
                                    </Link>
                                </li>
                            <li>
                                <Link href={"/about"} className={`block py-2 ${
                                        isActive("/about") ? "text-white" : "text-[#ADB7BE]"
                                    } hover:text-white`}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href={"/projects"} className={`block py-2 ${
                                        isActive("/projects") ? "text-white" : "text-[#ADB7BE]"
                                    } hover:text-white`}>
                                    Projects
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;