import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../api/config';
import Nav from '../components/Nav';
const Products = () => {
	const [allProducts, setAllProducts] = useState([]);

	function getProducts() {
		axios.get(`${API_URL}/api/product/allproducts`).then((res) => {
			console.log(res.data.products);
			setAllProducts(res.data.products);
		});
	}

	function addtocart(item) {
		axios.post(
			`${API_URL}/api/cart/add`,
			{ product_id: item.id },
			{ withCredentials: true },
		);
	}

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div>
			<Nav></Nav>

			{/* <div className=' grid grid-cols-3 gap-2  '>
				{allProducts.map((item) => {
					return (
						<div className='border'>
							<div>{item.name}</div>
							<div>
								<img
									src={item.image}
									alt=""
								/>
							</div>
						</div>
					);
				})}
			</div> */}

			<div className="grid grid-cols-3 gap-2 p-2">
				{allProducts.map((item) => {
					return (
						<div
							className="border p-2 border-[#a7a2a2] rounded-2xl"
							key={item._id || item.id}
						>
							<div>
								<img
									src={item.image}
									alt={item.name || ''}
									className="h-60 w-full object-cover rounded-2xl"
								/>
							</div>
							<div>
								<span className="font-semibold">Title: </span>
								{item.name}
							</div>
							<div>
								<span className="font-semibold">Price: </span>
								{item.price}
							</div>
							{/* <div>
								<button
									onClick={() => {
										addtocart(item);
									}}
								>
									addtocart
								</button>
							</div> */}
							<div>
								<button
									onClick={() => {
										addtocart(item);
									}}
									className="w-full rounded-full bg-gray-800 py-2 text-sm font-medium text-white hover:bg-gray-900"
								>
									Add to Cart
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Products;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { API_URL } from '../api/config';
// import Nav from '../components/Nav';

// const Products = () => {
// 	const [allProducts, setAllProducts] = useState([]);
// 	const [addedId, setAddedId] = useState(null);

// 	function getProducts() {
// 		axios.get(`${API_URL}/api/product/allproducts`).then((res) => {
// 			console.log(res.data.products);
// 			setAllProducts(res.data.products);
// 		});
// 	}

// 	function addtocart(item) {
// 		axios
// 			.post(
// 				`${API_URL}/api/cart/add`,
// 				{ product_id: item.id },
// 				{ withCredentials: true },
// 			)
// 			.then(() => {
// 				setAddedId(item.id);
// 				setTimeout(() => setAddedId(null), 1500);
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 	}

// 	useEffect(() => {
// 		getProducts();
// 	}, []);

// 	return (
// 		<div className="min-h-screen bg-gray-50">
// 			<Nav></Nav>

// 			<div className="px-4 py-10 sm:px-8">
// 				<h1 className="mx-auto mb-8 max-w-6xl text-3xl font-bold text-gray-800">
// 					Products
// 				</h1>

// 				{allProducts.length === 0 ? (
// 					<p className="mx-auto max-w-6xl text-gray-500">
// 						No products found.
// 					</p>
// 				) : (
// 					<div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
// 						{allProducts.map((item) => {
// 							return (
// 								<div
// 									key={item.id}
// 									className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm"
// 								>
// 									<img
// 										src={item.image}
// 										alt={item.name || ''}
// 										className="h-56 w-full rounded-xl object-cover"
// 									/>

// 									<div className="mt-3">
// 										<h3 className="text-lg font-semibold text-gray-800">
// 											{item.name}
// 										</h3>
// 										<p className="text-sm text-gray-500">
// 											${item.price}
// 										</p>
// 									</div>

// 									<button
// 										onClick={() => {
// 											addtocart(item);
// 										}}
// 										className={`mt-3 w-full rounded-full py-2 text-sm font-medium text-white transition ${
// 											addedId === item.id
// 												? 'bg-green-600'
// 												: 'bg-gray-800 hover:bg-gray-900'
// 										}`}
// 									>
// 										{addedId === item.id
// 											? 'Added ✓'
// 											: 'Add to Cart'}
// 									</button>
// 								</div>
// 							);
// 						})}
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// export default Products;
