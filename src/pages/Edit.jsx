// import React from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { API_URL } from '../api/config';
// const Edit = () => {
// 	const { id } = useParams();
// 	function handlesubmit(e) {
// 		e.preventDefault();

// 		const formData = new FormData(e.target);

// 		// const data = {
// 		// 	name: formData.get('name'),
// 		// 	description: formData.get('description'),
// 		// 	price: formData.get('price'),
// 		// 	file: formData.get('file'),
// 		// };

// 		axios
// 			.put(
// 				`${API_URL}/api/product/editproduct/${id}`,
// 				formData,
// 				{
// 					withCredentials: true,
// 				},
// 			)
// 			.then((res) => {
// 				console.log(res.data);
// 				e.target.reset();
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 	}

// 	return (
// 		<div>
// 			<form
// 				action=""
// 				onSubmit={handlesubmit}
// 			>
// 				<div>
// 					<label htmlFor="">name</label>
// 					<input
// 						type="text"
// 						name="name"
// 						id=""
// 						className="border"
// 					/>
// 				</div>

// 				<div>
// 					<label htmlFor="">description</label>
// 					<input
// 						type="text"
// 						name="description"
// 						id=""
// 						className="border"
// 					/>
// 				</div>

// 				<div>
// 					<label htmlFor="">price</label>
// 					<input
// 						type="number"
// 						name="price"
// 						id=""
// 						className="border"
// 					/>
// 				</div>

// 				<div>
// 					<input
// 						type="file"
// 						name="image"
// 						id=""
// 					/>
// 				</div>

// 				<button>submit</button>
// 			</form>
// 		</div>
// 	);
// };

// export default Edit;

// import React from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { API_URL } from '../api/config';
// import Nav from '../components/Nav';
// const Edit = () => {
// 	const { id } = useParams();
// 	function handlesubmit(e) {
// 		e.preventDefault();

// 		const formData = new FormData(e.target);

// 		// const data = {
// 		// 	name: formData.get('name'),
// 		// 	description: formData.get('description'),
// 		// 	price: formData.get('price'),
// 		// 	file: formData.get('file'),
// 		// };

// 		axios
// 			.put(`${API_URL}/api/product/editproduct/${id}`, formData, {
// 				withCredentials: true,
// 			})
// 			.then((res) => {
// 				console.log(res.data);
// 				e.target.reset();
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 	}

// 	return (
// 		<div>
// 			<Nav></Nav>
// 			<div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-8">
// 				<div className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
// 					<h1 className="mb-6 text-2xl font-bold text-gray-800">
// 						Edit Product
// 					</h1>

// 					<form
// 						action=""
// 						onSubmit={handlesubmit}
// 						className="space-y-4"
// 					>
// 						<div>
// 							<label
// 								htmlFor=""
// 								className="mb-1 block text-sm font-medium text-gray-700"
// 							>
// 								name
// 							</label>
// 							<input
// 								type="text"
// 								name="name"
// 								id=""
// 								className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-gray-500 focus:outline-none"
// 							/>
// 						</div>

// 						<div>
// 							<label
// 								htmlFor=""
// 								className="mb-1 block text-sm font-medium text-gray-700"
// 							>
// 								description
// 							</label>
// 							<input
// 								type="text"
// 								name="description"
// 								id=""
// 								className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-gray-500 focus:outline-none"
// 							/>
// 						</div>

// 						<div>
// 							<label
// 								htmlFor=""
// 								className="mb-1 block text-sm font-medium text-gray-700"
// 							>
// 								price
// 							</label>
// 							<input
// 								type="number"
// 								name="price"
// 								id=""
// 								className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-gray-500 focus:outline-none"
// 							/>
// 						</div>

// 						<div>
// 							<label
// 								htmlFor=""
// 								className="mb-1 block text-sm font-medium text-gray-700"
// 							>
// 								photo
// 							</label>
// 							<input
// 								type="file"
// 								name="image"
// 								id=""
// 								className="w-full text-sm text-gray-600"
// 							/>
// 						</div>

// 						<button className="w-full rounded-lg bg-gray-800 py-2 font-medium text-white hover:bg-gray-900">
// 							submit
// 						</button>
// 					</form>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Edit;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../api/config';

const Edit = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [product, setProduct] = useState(null);

	function getProduct() {
		axios
			.get(`${API_URL}/api/product/myproducts`, { withCredentials: true })
			.then((res) => {
				const found = res.data.products.find(
					(item) => item.id === Number(id),
				);
				setProduct(found);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	useEffect(() => {
		getProduct();
	}, [id]);

	function handlesubmit(e) {
		e.preventDefault();

		const formData = new FormData(e.target);

		axios
			.put(`${API_URL}/api/product/editproduct/${id}`, formData, {
				withCredentials: true,
			})
			.then((res) => {
				console.log(res.data);
				navigate('/userproducts');
			})
			.catch((error) => {
				console.log(error);
			});
	}

	if (!product) {
		return (
			<div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-8">
				<p className="mx-auto max-w-md text-gray-500">
					Loading product...
				</p>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-8">
			<div className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
				<h1 className="mb-6 text-2xl font-bold text-gray-800">
					Edit Product
				</h1>

				<form
					onSubmit={handlesubmit}
					className="space-y-4"
				>
					<div>
						<label className="mb-1 block text-sm font-medium text-gray-700">
							name
						</label>
						<input
							type="text"
							name="name"
							defaultValue={product.name}
							className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-gray-500 focus:outline-none"
						/>
					</div>

					<div>
						<label className="mb-1 block text-sm font-medium text-gray-700">
							description
						</label>
						<input
							type="text"
							name="description"
							defaultValue={product.description}
							className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-gray-500 focus:outline-none"
						/>
					</div>

					<div>
						<label className="mb-1 block text-sm font-medium text-gray-700">
							price
						</label>
						<input
							type="number"
							name="price"
							defaultValue={product.price}
							className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-gray-500 focus:outline-none"
						/>
					</div>

					<div>
						<label className="mb-1 block text-sm font-medium text-gray-700">
							current photo
						</label>
						<img
							src={product.image}
							alt={product.name}
							className="mb-2 h-24 w-24 rounded-lg object-cover"
						/>
						<input
							type="file"
							name="image"
							className="w-full text-sm text-gray-600"
						/>
						<p className="mt-1 text-xs text-gray-400">
							Leave empty to keep the current photo.
						</p>
					</div>

					<button className="w-full rounded-lg bg-gray-800 py-2 font-medium text-white hover:bg-gray-900">
						submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Edit;
