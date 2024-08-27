import React, { useState } from 'react';
import {Menu, X} from "lucide-react";

import myLogo from "../assets/myLogo.webp";
import { navItems } from '../constants';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

        const toggleNavBar = () => {
            setMobileDrawerOpen(!mobileDrawerOpen);
        };
    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-800/80">
            <div className="container px-4 mx-auto flex justify-between items-center">
                {/* Logo and Text Container */}
                <div className="flex items-center flex-shrink-0">
                    <img className="h-10 w-10 mr-2" src={myLogo} alt="myLogo"/>
                    <span className="text-xl tracking-tight">KrisCh</span>
                </div>
                {/* Centered Navigation Items */}
                <div className="flex-1 flex justify-center">
                    <ul className="hidden lg:flex space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="hover:underline">{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavBar}>
                        {mobileDrawerOpen ? <X /> : <Menu/>}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    <ul>
                        {navItems.map((item,index) => (
                            <li key={index} className="py-4">
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
