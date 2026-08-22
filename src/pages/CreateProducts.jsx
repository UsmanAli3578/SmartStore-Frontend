// // import React from 'react';
// // import axios from 'axios';
// // import { API_URL } from '../api/config';
// // import Nav from '../components/Nav';
// // const CreateProducts = () => {
// // 	function handlesubmit(e) {
// // 		e.preventDefault();

// // 		const formData = new FormData(e.target);

// // 		// const data = {
// // 		// 	name: formData.get('name'),
// // 		// 	description: formData.get('description'),
// // 		// 	price: formData.get('price'),
// // 		// 	file: formData.get('file'),
// // 		// };

// // 		axios
// // 			.post(`${API_URL}/api/product/productCreated`, formData, {
// // 				withCredentials: true,
// // 			})
// // 			.then((res) => {
// // 				console.log(res.data);
// // 				e.target.reset();
// // 			})
// // 			.catch((error) => {
// // 				console.log(error);
// // 			});
// // 	}

// // 	return (
// // 		<div>
// // 			<Nav></Nav>
// // 			<div>usman</div>
// // 			<form
// // 				action=""
// // 				onSubmit={handlesubmit}
// // 			>
// // 				<div>
// // 					<label htmlFor="">name</label>
// // 					<input
// // 						type="text"
// // 						name="name"
// // 						id=""
// // 						className="border"
// // 					/>
// // 				</div>

// // 				<div>
// // 					<label htmlFor="">description</label>
// // 					<input
// // 						type="text"
// // 						name="description"
// // 						id=""
// // 						className="border"
// // 					/>
// // 				</div>

// // 				<div>
// // 					<label htmlFor="">price</label>
// // 					<input
// // 						type="number"
// // 						name="price"
// // 						id=""
// // 						className="border"
// // 					/>
// // 				</div>

// // 				<div>
// // 					<input
// // 						type="file"
// // 						name="image"
// // 						id=""
// // 					/>
// // 				</div>

// // 				<button>submit</button>
// // 			</form>
// // 		</div>
// // 	);
// // };

// // export default CreateProducts;

// import React from 'react';
// import axios from 'axios';
// import { API_URL } from '../api/config';
// import Nav from '../components/Nav';

// const CreateProducts = () => {
// 	function handlesubmit(e) {
// 		e.preventDefault();

// 		const formData = new FormData(e.target);

// 		axios
// 			.post(`${API_URL}/api/product/productCreated`, formData, {
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
// 				<Nav></Nav>
// 			<div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-8">

// 				<div className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
// 					<h1 className="mb-6 text-2xl font-bold text-gray-800">
// 						Create Product
// 					</h1>

// 					<form
// 						onSubmit={handlesubmit}
// 						className="space-y-4"
// 					>
// 						<div>
// 							<label className="mb-1 block text-sm font-medium text-gray-700">
// 								name
// 							</label>
// 							<input
// 								type="text"
// 								name="name"
// 								className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-gray-500 focus:outline-none"
// 							/>
// 						</div>

// 						<div>
// 							<label className="mb-1 block text-sm font-medium text-gray-700">
// 								description
// 							</label>
// 							<input
// 								type="text"
// 								name="description"
// 								className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-gray-500 focus:outline-none"
// 							/>
// 						</div>

// 						<div>
// 							<label className="mb-1 block text-sm font-medium text-gray-700">
// 								price
// 							</label>
// 							<input
// 								type="number"
// 								name="price"
// 								className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-gray-500 focus:outline-none"
// 							/>
// 						</div>

// 						<div>
// 							<label className="mb-1 block text-sm font-medium text-gray-700">
// 								photo
// 							</label>
// 							<input
// 								type="file"
// 								name="image"
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

// export default CreateProducts;

// import React from 'react';
// import axios from 'axios';
// import { API_URL } from '../api/config';
// import Nav from '../components/Nav';
// const CreateProducts = () => {
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
// 			.post(`${API_URL}/api/product/productCreated`, formData, {
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
// 			<div>usman</div>
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

// export default CreateProducts;

import React from 'react';
import axios from 'axios';
import { API_URL } from '../api/config';
import Nav from '../components/Nav';

const CreateProducts = () => {
	function handlesubmit(e) {
		e.preventDefault();

		const formData = new FormData(e.target);

		axios
			.post(`${API_URL}/api/product/productCreated`, formData, {
				withCredentials: true,
			})
			.then((res) => {
				console.log(res.data);
				e.target.reset();
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<div>
			<Nav></Nav>
			<div className="min-h-screen bg-brand-dark px-4 py-10 sm:px-8 font-['Zilla_Slab']">
				<div className="mx-auto max-w-4xl rounded-2xl border border-brand-border bg-brand-card p-6 shadow-sm">
					<div className="mb-6">
						<h1 className="text-2xl font-bold text-brand-text">
							List a new product
						</h1>
						<p className="text-sm text-brand-muted mt-1">
							Fill in the details below to create your product
							listing.
						</p>
					</div>

					<form
						onSubmit={handlesubmit}
						className="grid grid-cols-1 lg:grid-cols-3 gap-6"
					>
						<div className="lg:col-span-2 space-y-4">
							<div>
								<label className="mb-1 block text-sm font-medium text-brand-text">
									name
								</label>
								<input
									type="text"
									name="name"
									className="w-full rounded-lg border border-brand-border bg-brand-dark text-brand-text px-3 py-2 focus:border-brand-primary focus:outline-none"
								/>
							</div>

							<div>
								<label className="mb-1 block text-sm font-medium text-brand-text">
									description
								</label>
								<input
									type="text"
									name="description"
									className="w-full rounded-lg border border-brand-border bg-brand-dark text-brand-text px-3 py-2 focus:border-brand-primary focus:outline-none"
								/>
							</div>

							<div>
								<label className="mb-1 block text-sm font-medium text-brand-text">
									price
								</label>
								<input
									type="number"
									name="price"
									className="w-full rounded-lg border border-brand-border bg-brand-dark text-brand-text px-3 py-2 focus:border-brand-primary focus:outline-none"
								/>
							</div>
						</div>

						<div className="lg:col-span-1">
							<label className="mb-1 block text-sm font-medium text-brand-text">
								photo
							</label>
							<input
								type="file"
								name="image"
								className="w-full text-sm text-brand-muted"
							/>
						</div>

						<button className="w-full rounded-lg bg-brand-primary py-2 font-semibold text-brand-text-dark hover:bg-brand-hover">
							submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CreateProducts;
