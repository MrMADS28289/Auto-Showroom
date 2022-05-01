import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-3xl text-center text-[#FF5400] my-9'>Blogs</h1>
            <div className='w-2/3 mx-auto my-10 p-6 bg-gray-300'>
                <h3 className='text-xl my-2'>Difference between javascript and nodejs.</h3>
                <p>JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</p>
            </div>
            <div className='w-2/3 mx-auto my-10 p-6 bg-gray-300'>
                <h3 className='text-xl my-2'>When should We use Nodejs?</h3>
                <p>Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind. So when we need to do backend development, that's a good time for use Nodejs.</p>
                <h3 className='text-xl my-2 mt-5'>When we should use MongoDB?</h3>
                <p>MongoDB facilitate to store database in json(javascript object notation) (or simply when data in form of key value pair) this is very fast and efficient so you should use it when you have key value pair to store(json data)</p>
            </div>
            <div className='w-2/3 mx-auto my-10 p-6 bg-gray-300'>
                <h3 className='text-xl'>Difference between SQL and NoSQL.</h3>
                <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
            <div className='w-2/3 mx-auto my-10 p-6 bg-gray-300'>
                <h3 className='text-xl'>The Purpose of JWT  and how does it work.</h3>
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
            </div>
        </div>
    );
};

export default Blogs;