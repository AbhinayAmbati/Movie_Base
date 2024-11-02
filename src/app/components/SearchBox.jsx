'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa'; 

export default function SearchBox() {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.trim()) {
            router.push(`/search/${search}`);
        }
    }

    const handleIconClick = () => {
        if (search.trim()) {
            router.push(`/search/${search}`);
        }
    }

    return (
        <form className='flex items-center px-5 max-w-6xl mx-auto' onSubmit={handleSubmit}>
            <div className="relative w-full">
                <input
                    type='text'
                    placeholder='Search for a movie...'
                    className='border-2 border-slate-400 p-2 rounded-lg w-full h-12 mt-2 flex-1 pr-10' 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={handleIconClick}>
                    <FaSearch className="text-slate-400 mt-2" size={20} /> 
                </span>
            </div>
        </form>
    );
}
