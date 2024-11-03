import React from 'react';
import Link from 'next/link';

function NotFoundPage() {
    return (
        <div className="flex items-center justify-center h-screen ">
            <div className="max-w-lg text-center bg-white shadow-xl rounded-2xl p-10">
                <h1 className="text-9xl font-bold text-gray-800">404</h1>
                <p className="text-2xl font-semibold text-gray-600 mt-4">
                    Oops! Page not found.
                </p>
                <p className="text-gray-500 mt-2">
                    The page you are looking for doesn't exist or has been moved.
                </p>
                <Link href="/" className="mt-8 inline-block bg-[var(--accent)] text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out">
                    Go to Homepage
                </Link>
            </div>
        </div>
    );
}

export default NotFoundPage;
