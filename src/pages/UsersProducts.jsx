// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { API_URL } from '../api/config';
// import Nav from '../components/Nav';
// const UsersProducts = () => {
// 	const [render, setRender] = useState(0);
// 	const navigate = useNavigate();
// 	const [userProducts, setUserProducts] = useState([]);
// 	function getuserproducts() {
// 		axios
// 			.get(`${API_URL}/api/product/myproducts`, {
// 				withCredentials: true,
// 			})
// 			.then((res) => {
// 				console.log(res.data.products);
// 				setUserProducts(res.data.products);
// 			});
// 	}

// 	function deleted(item) {
// 		axios
// 			.delete(
// 				`${API_URL}/api/product/deleteproduct/${item.id}`,
// 				{
// 					withCredentials: true,
// 				},
// 			)
// 			.then(() => {
// 				setRender((prev) => prev + 1);
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 	}

// 	function edit(item) {
// 		navigate(`/edit/${item.id}`);
// 	}

// 	useEffect(() => {
// 		getuserproducts();
// 	}, [render]);

// 	return (
// 		<div>
// 			<Nav></Nav>
// 			<div>
// 				{userProducts.map((item) => {
// 					return (
// 						<div key={item.id}>
// 							<div>
// 								<img
// 									src={item.image}
// 									alt=""
// 								/>
// 							</div>
// 							<div>Name {item.name}</div>
// 							<div>Price {item.price}</div>
// 							<button
// 								onClick={() => {
// 									edit(item);
// 								}}
// 							>
// 								Edit
// 							</button>
// 							<button
// 								onClick={() => {
// 									deleted(item);
// 								}}
// 							>
// 								delete
// 							</button>
// 						</div>
// 					);
// 				})}
// 			</div>
// 		</div>
// 	);
// };

// export default UsersProducts;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../api/config';
import Nav from '../components/Nav';
const UsersProducts = () => {
	const [render, setRender] = useState(0);
	const navigate = useNavigate();
	const [userProducts, setUserProducts] = useState([]);
	function getuserproducts() {
		axios
			.get(`${API_URL}/api/product/myproducts`, {
				withCredentials: true,
			})
			.then((res) => {
				console.log(res.data.products);
				setUserProducts(res.data.products);
			});
	}

	function deleted(item) {
		axios
			.delete(`${API_URL}/api/product/deleteproduct/${item.id}`, {
				withCredentials: true,
			})
			.then(() => {
				setRender((prev) => prev + 1);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function edit(item) {
		navigate(`/edit/${item.id}`);
	}

	useEffect(() => {
		getuserproducts();
	}, [render]);

	return (
		<div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-8">
			<Nav></Nav>

			<h1 className="mx-auto mb-8 max-w-4xl text-3xl font-bold text-gray-800">
				My Products
			</h1>

			{userProducts.length === 0 ? (
				<p className="mx-auto max-w-4xl text-gray-500">
					You haven't listed any products yet.
				</p>
			) : (
				<div className="mx-auto max-w-4xl space-y-4">
					{userProducts.map((item) => {
						return (
							<div
								key={item.id}
								className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
							>
								<img
									src={item.image}
									alt={item.name}
									className="h-20 w-20 rounded-xl object-cover"
								/>

								<div className="flex-1">
									<h3 className="text-lg font-semibold text-gray-800">
										{item.name}
									</h3>
									<p className="text-sm text-gray-500">
										${item.price}
									</p>
								</div>

								<div className="flex gap-2">
									<button
										onClick={() => {
											edit(item);
										}}
										className="rounded-full border border-gray-300 px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
									>
										Edit
									</button>
									<button
										onClick={() => {
											deleted(item);
										}}
										className="rounded-full border border-red-300 px-4 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50"
									>
										Delete
									</button>
								</div>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default UsersProducts;
