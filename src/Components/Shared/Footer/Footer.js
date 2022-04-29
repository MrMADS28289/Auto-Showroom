import React from 'react';

const Footer = () => {
    return (
        <footer>
            <section>
                <div>
                    <h1 className='text-2xl font-bold'>CONTACT INFO</h1>
                    <p>We support to customize minor request as javascript conflict, css issue, etc. Enjoy the ultimate web design themes. Every layout is super flexible, amazingly powerful and visual by nature.</p>
                    <p className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>via G. Cesare 87/A 47838 Riccione (RN) Italia</p>
                    <p className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>+0123456789</p>
                    <p className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                    </svg>info@autoshowroom.com</p>
                </div>
            </section>
        </footer>
    );
};

export default Footer;