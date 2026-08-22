// import React, { useEffect, useState } from 'react';
// import { API_URL } from '../api/config';

// import axios from 'axios';
// const Cart = () => {
// 	const [cartItems, setCartItems] = useState([]);

// 	function getCartItems() {
// 		axios
// 			.get(`${API_URL}/api/cart/`, { withCredentials: true })
// 			.then((res) => {
// 				console.log(res.data.cart);
// 				setCartItems(res.data.cart);
// 			});
// 	}
// 	useEffect(() => {
// 		getCartItems();
// 	}, []);

// 	return (
// 		<div>
// 			<div>
// 				{cartItems.map((item) => {
// 					return (
// 						<div>
// 							<div>
// 								<img
// 									src={item.image}
// 									alt=""
// 									className="h-60 w-full object-cover rounded-2xl"
// 								/>
// 							</div>
// 							<div>{item.name}</div>
// 							<div>{item.price}</div>
// 							<div>{item.quantity}</div>
// 						</div>
// 					);
// 				})}
// 			</div>
// 		</div>
// 	);
// };

// export default Cart;

// import React, { useEffect, useState } from 'react';
// import { API_URL } from '../api/config';

// import axios from 'axios';
// import Nav from '../components/Nav';
// const Cart = () => {
// 	const [cartItems, setCartItems] = useState([]);

// 	function getCartItems() {
// 		axios
// 			.get(`${API_URL}/api/cart/`, { withCredentials: true })
// 			.then((res) => {
// 				console.log(res.data.cart);
// 				setCartItems(res.data.cart);
// 			});
// 	}
// 	function deleted(item) {
// 		axios
// 			.delete(`${API_URL}/api/cart/remove/${item.product_id}`, {
// 				withCredentials: true,
// 			})
// 			.then(() => {
// 				getCartItems();
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 	}

// 	useEffect(() => {
// 		getCartItems();
// 	}, []);

// 	const total = cartItems.reduce(
// 		(sum, item) => sum + Number(item.price) * item.quantity,
// 		0,
// 	);

// 	return (
// 		<div>
// 			<Nav></Nav>
// 			<div className="min-h-screen bg-brand-dark px-4 py-10 sm:px-8 font-['Zilla_Slab']">
// 				<h1 className="mx-auto mb-8 max-w-4xl text-3xl font-bold text-brand-text">
// 					Your Cart
// 				</h1>

// 				{cartItems.length === 0 ? (
// 					<p className="mx-auto max-w-4xl text-gray-500">
// 						Your cart is empty.
// 					</p>
// 				) : (
// 					<div className="mx-auto max-w-4xl space-y-4">
// 						{cartItems.map((item) => (
// 							<div
// 								key={item.id}
// 								className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
// 							>
// 								<img
// 									src={item.image}
// 									alt={item.name}
// 									className="h-24 w-24 rounded-xl object-cover"
// 								/>

// 								<div className="flex-1">
// 									<h3 className="text-lg font-semibold text-gray-800">
// 										{item.name}
// 									</h3>
// 									<p className="text-sm text-gray-500">
// 										${item.price} each
// 									</p>
// 								</div>

// 								<div className="rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700">
// 									Qty: {item.quantity}
// 								</div>

// 								<div className="w-20 text-right font-semibold text-gray-800">
// 									$
// 									{(
// 										Number(item.price) * item.quantity
// 									).toFixed(2)}
// 								</div>
// 								<div>
// 									<button
// 										onClick={() => {
// 											deleted(item);
// 										}}
// 										className="rounded-full border border-red-300 px-4 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50"
// 									>
// 										Delete
// 									</button>
// 								</div>
// 							</div>
// 						))}

// 						<div className="flex items-center justify-between rounded-2xl bg-gray-800 px-6 py-4 text-white">
// 							<span className="text-sm uppercase tracking-wide text-gray-300">
// 								Total
// 							</span>
// 							<span className="text-2xl font-bold">
// 								${total.toFixed(2)}
// 							</span>
// 						</div>
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// export default Cart;

import React, { useEffect, useState } from 'react';
import { API_URL } from '../api/config';
import { Trash2 } from 'lucide-react';
import axios from 'axios';
import Nav from '../components/Nav';
const Cart = () => {
	const [cartItems, setCartItems] = useState([]);

	function getCartItems() {
		axios
			.get(`${API_URL}/api/cart/`, { withCredentials: true })
			.then((res) => {
				console.log(res.data.cart);
				setCartItems(res.data.cart);
			});
	}
	function deleted(item) {
		axios
			.delete(`${API_URL}/api/cart/remove/${item.product_id}`, {
				withCredentials: true,
			})
			.then(() => {
				getCartItems();
			})
			.catch((error) => {
				console.log(error);
			});
	}

	useEffect(() => {
		getCartItems();
	}, []);

	const total = cartItems.reduce(
		(sum, item) => sum + Number(item.price) * item.quantity,
		0,
	);

	return (
		<div>
			<Nav></Nav>
			<div className="min-h-screen bg-brand-dark px-4 py-10 sm:px-8 font-['Zilla_Slab'] flex flex-col lg:flex-row">
				<div className="flex-5 border border-brand-border">
					<div className="font-bold text-3xl border-b border-brand-border text-brand-text p-2">
						Your Cart
					</div>

					{cartItems.length === 0 ? (
						<p className="text-brand-muted p-4">
							Your cart is empty.
						</p>
					) : (
						<div>
							{cartItems.map((item) => {
								return (
									<div
										key={item.id}
										className="border-b border-brand-border flex items-center justify-between p-2"
									>
										<div className="flex items-center flex-1 min-w-0 gap-2">
											<img
												src={item.image}
												alt={item.name}
												className="h-12 w-12 rounded-lg object-cover"
											/>
											<div className="text-brand-text truncate">
												{item.name}
											</div>
										</div>
										<div className="w-20 text-right text-brand-primary">
											${item.price}
										</div>
										<div className="w-10 text-center text-brand-muted">
											{item.quantity}
										</div>
										<button
											onClick={() => {
												deleted(item);
											}}
											className="rounded-full border border-red-300 p-2 text-red-600 hover:bg-red-500/10"
										>
											<Trash2 size={16} />
										</button>
									</div>
								);
							})}
						</div>
					)}
				</div>

				<div className="flex-2 border border-brand-border flex items-center justify-center">
					<div className="border p-10 rounded-2xl border-brand-primary">
						<div className="font-bold text-2xl text-brand-text">
							Order Summary
						</div>
						<div className="font-bold text-brand-text">
							Total:{' '}
							<span className="text-brand-primary">
								{' '}
								${total.toFixed(2)}
							</span>
						</div>
						<button className="w-full mt-4 rounded-full bg-brand-primary py-3 font-semibold text-brand-text-dark hover:bg-brand-hover">
							Checkout
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
