import React, { Suspense } from 'react';
import NavbarItem from './NavbarItem'; 

const Custom404 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl mb-4">404 - Page Not Found</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <div className="flex space-x-4">
                    <NavbarItem title="Home" param="home" />
                    <NavbarItem title="About" param="about" />
                </div>
            </Suspense>
        </div>
    );
};

export default Custom404;
