import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-[#F2ECDB]">
			<div className="text-center">
				<h1 className="text-7xl font-bold text-[#16211D]">404</h1>

				<h2 className="mt-4 text-2xl font-semibold text-[#16211D]">
					Page Not Found
				</h2>

				<p className="mt-2 text-gray-600">
					The page you're looking for doesn't exist.
				</p>

				<Link
					to="/products"
					className="inline-block mt-6 rounded-2xl bg-[#084a1c] px-6 py-3 font-semibold text-white"
				>
					Go to Products
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
