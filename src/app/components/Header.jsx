import React from 'react';
import Link from 'next/link'
import { FaHome, FaInfoCircle } from "react-icons/fa";
import MenuItem from './MenuItem';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
    return (
        <div className='flex justify-between items-center py-3 max-w-6xl mx-auto'>
            <div className='flex gap-4'>
                <MenuItem title="home" address="/" Icon={FaHome} />
                <MenuItem title="about" address="/about" Icon={FaInfoCircle} />
            </div>
            <div className="flex items-center gap-4">
                <DarkModeSwitch />
                <Link href={"/"} className='flex gap-1 items-center'>
                    <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>Imdb</span>
                    <span className='text-xl hidden sm:inline'>Clone</span>
                </Link>
            </div>
        </div>

    )
}
