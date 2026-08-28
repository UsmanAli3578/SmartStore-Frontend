import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../api/config';
import Nav from '../components/Nav';
import ProductCard from '../components/ProductCard';
const Products = () => {
	const [allProducts, setAllProducts] = useState([]);
	const [search, setSearch] = useState('');

	function getProducts() {
		axios.get(`${API_URL}/api/product/allproducts`).then((res) => {
			console.log(res.data.products);
			setAllProducts(res.data.products);
		});
	}

	useEffect(() => {
		getProducts();
	}, []);
	const filteredProducts = allProducts.filter((item) =>
		item.name.toLowerCase().includes(search.toLowerCase()),
	);
	return (
		<div>
			<Nav></Nav>
			<div className=" items-center justify-center ">
				<div className="font-semibold text-center font-['Zilla_Slab'] px-5 py-2 text-2xl ">
					Products
				</div>
				<div className="px-5 py-4 flex justify-center ">
					<input
						type="text"
						placeholder="Search products..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="w-full max-w-md rounded-xl border border-brand-border bg-brand-card px-4 py-3 text-brand-text outline-none focus:border-brand-primary"
					/>
				</div>
				<div className="flex justify-center ">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5  p-5  ">
						{filteredProducts.map((item) => {
							return (
								<ProductCard
									item={item}
									key={item._id || item.id}
								/>
							);
						})}
					</div>
				</div>
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
