import Lenis from '@studio-freight/lenis';
import React, { useEffect } from 'react';

const Navbar = () => {
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    });

    return (
        <nav className="nav">
            <div>
                <h1 className="text-red-600 font-Wittgensteins logo">Beauty Pro</h1>
            </div>
            <ul className="nav_links">
                <li>Our Services</li>
                <li>Bridal</li>
                <li>Franchise</li>
                <li>About Us</li>
                <li>Media</li>
                <li>Salon</li>
                <li>Locator</li>
                <li>Pricing</li>
            </ul>
        </nav>
    );
};

export default Navbar;
