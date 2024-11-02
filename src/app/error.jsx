'use client';
import React, { useEffect } from 'react';

export default function ErrorComponent({ error, reset }) {
    useEffect(() => {
        reset();
    }, [error, reset]);

    const handleTryAgain = () => {
        reset();
    };

    return (
        <div className='text-center mt-10'>
            <h1>Something went wrong. Please try again later.</h1>
            <button 
                className='hover:text-amber-600' 
                onClick={handleTryAgain}
            >
                Try Again
            </button>
        </div>
    );
}
