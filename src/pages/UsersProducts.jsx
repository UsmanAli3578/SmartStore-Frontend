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
// 			.delete(`${API_URL}/api/product/deleteproduct/${item.id}`, {
// 				withCredentials: true,
// 			})
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
// 			<div className="min-h-screen bg-brand-dark font-['Zilla_Slab'] px-4 py-10 sm:px-8">
// 				<h1 className="mx-auto mb-8 max-w-4xl text-3xl font-bold text-brand-text">
// 					My Products
// 				</h1>

// 				{userProducts.length === 0 ? (
// 					<p className="mx-auto max-w-4xl text-gray-500">
// 						You haven't listed any products yet.
// 					</p>
// 				) : (
// 					<div className="mx-auto max-w-4xl space-y-4">
// 						{userProducts.map((item) => {
// 							return (
// 								<div
// 									key={item.id}
// 									className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
// 								>
// 									<img
// 										src={item.image}
// 										alt={item.name}
// 										className="h-20 w-20 rounded-xl object-cover"
// 									/>

// 									<div className="flex-1">
// 										<h3 className="text-lg font-semibold text-gray-800">
// 											{item.name}
// 										</h3>
// 										<p className="text-sm text-gray-500">
// 											${item.price}
// 										</p>
// 									</div>

// 									<div className="flex gap-2">
// 										<button
// 											onClick={() => {
// 												edit(item);
// 											}}
// 											className="rounded-full border border-gray-300 px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
// 										>
// 											Edit
// 										</button>
// 										<button
// 											onClick={() => {
// 												deleted(item);
// 											}}
// 											className="rounded-full border border-red-300 px-4 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50"
// 										>
// 											Delete
// 										</button>
// 									</div>
// 								</div>
// 							);
// 						})}
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// export default UsersProducts;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../api/config';
import { Pencil, Trash2 } from 'lucide-react';
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
		<div>
			<Nav></Nav>
			<div className="min-h-screen bg-brand-dark font-['Zilla_Slab']  py-10 sm:px-8">
				<h1 className="mx-auto mb-8 max-w-4xl text-3xl font-bold text-brand-text text-center">
					My Products
				</h1>

				{userProducts.length === 0 ? (
					<p className="mx-auto max-w-4xl text-brand-muted">
						You haven't listed any products yet.
					</p>
				) : (
					<div className="overflow-x-auto flex justify-center">
						<table className="border border-brand-primary w-[80%]">
							<thead>
								<tr className="  px-2 ">
									<th className="border border-brand-primary text-left px-2 text-brand-text">
										Product
									</th>
									<th className="border border-brand-primary text-left px-2 text-brand-text">
										Price
									</th>
									<th className="border-t border-brand-primary text-left px-2 text-brand-text">
										Actions
									</th>
								</tr>
							</thead>
							<tbody>
								{userProducts.map((item) => {
									return (
										<tr
											key={item.id}
											className=""
										>
											<td className="px-2  border  border-brand-primary text-brand-text">
												<div className="flex items-center gap-3">
													<img
														src={item.image}
														alt={item.name}
														className="h-12 w-12 rounded-lg object-cover"
													/>
													<span>{item.name}</span>
												</div>
											</td>
											<td className="px-2 border border-brand-primary text-brand-text">
												{item.price}
											</td>
											<td className="px-2 py-2 border-t border-brand-primary">
												<div className="flex gap-2 ">
													<button
														onClick={() => {
															edit(item);
														}}
														className="rounded-full border border-brand-primary px-4 py-2   text-brand-text hover:bg-brand-hover"
													>
														<Pencil size={16} />
													</button>
													<button
														onClick={() => {
															deleted(item);
														}}
														className="rounded-full border border-red-300 p-2 text-red-600 hover:bg-red-500/10"
													>
														<Trash2 size={16} />
													</button>
												</div>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				)}
			</div>
		</div>
	);
};

export default UsersProducts;
