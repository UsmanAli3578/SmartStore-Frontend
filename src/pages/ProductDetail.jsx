// // import React from 'react';
// // import { useParams } from 'react-router-dom';
// // import axios from 'axios';
// // import { API_URL } from '../api/config';
// // import { useEffect } from 'react';
// // import { useState } from 'react';
// // import Nav from '../components/Nav';

// // const ProductDetail = () => {
// // 	const { id } = useParams();
// // 	const [productdata, setProductdata] = useState({});

// // 	function getitem() {
// // 		axios.get(`${API_URL}/api/product/productdetail/${id}`).then((res) => {
// // 			console.log(res.data.product);
// // 			setProductdata(res.data.product);
// // 		});
// // 	}

// // 	useEffect(() => {
// // 		getitem();
// // 	}, []);

// // 	return (
// // 		<div>
// //             <Nav></Nav>
// // 			<div className='text-center font-["Zilla_Slab"] p-4 text-3xl'>
// // 				Product Detail
// // 			</div>

// //             <div>

// //             </div>
// // 		</div>
// // 	);
// // };

// // export default ProductDetail;

// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
// import { API_URL } from '../api/config';
// import Nav from '../components/Nav';
// import { Radius } from 'lucide-react';

// const ProductDetail = () => {
// 	const { id } = useParams();
// 	const navigate = useNavigate();
// 	const [productdata, setProductdata] = useState({});
// 	const [quantity, setQuantity] = useState(1);
// 	const [loading, setLoading] = useState(true);
// 	const [check, setCheck] = useState(0);
// 	let productId;
// 	function getitem() {
// 		axios
// 			.get(`${API_URL}/api/product/productdetail/${id}`)
// 			.then((res) => {
// 				console.log(res.data.product);
// 				setProductdata(res.data.product);
// 				productId = res.data.product.id;
// 				getcart(productId);
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			})
// 			.finally(() => {
// 				setLoading(false);
// 			});
// 	}

// 	useEffect(() => {
// 		getitem();
// 	}, [id]);

// 	function getcart(productId) {
// 		axios
// 			.get(`${API_URL}/api/cart/`, { withCredentials: true })
// 			.then((res) => {
// 				// console.log(res.data.cart);
// 				const cartdata = res.data.cart;

// 				const singleitem = cartdata.filter((item) => {
// 					return item.product_id == productId;
// 				});
// 				console.log(singleitem[0].quantity);
// 				setQuantity(singleitem[0].quantity);
// 			});
// 	}

// 	function addtocart(id) {
// 		axios.post(
// 			`${API_URL}/api/cart/add`,
// 			{ product_id: id, quantity: quantity },
// 			{ withCredentials: true },
// 		);
// 	}

// 	if (loading) {
// 		return (
// 			<div className="min-h-screen bg-paper">
// 				<Nav />

// 				<div className="flex min-h-[70vh] items-center justify-center">
// 					<p className="font-['Zilla_Slab'] text-xl text-brand-primary">
// 						Loading product...
// 					</p>
// 				</div>
// 			</div>
// 		);
// 	}

// 	return (
// 		<div className="min-h-screen bg-paper  font-['Zilla_Slab']">
// 			<Nav />

// 			<main className="mx-auto mt-6 max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
// 				<div className="overflow-hidden rounded-2xl border border-brand-border bg-brand-card shadow-lg">
// 					<div className="flex flex-col lg:flex-row">
// 						{/* Product Image */}
// 						<div className="flex h-[350px] w-full rounded-2xl  items-center justify-center  p-6 sm:h-[450px] lg:h-[550px] lg:w-1/2">
// 							<img
// 								src={productdata.image}
// 								alt={productdata.name}
// 								className="h-full w-full object-contain "
// 							/>
// 						</div>

// 						{/* Product Information */}
// 						<div className="flex w-full flex-col justify-between p-6 sm:p-8 lg:w-1/2 lg:p-10">
// 							{/* Details */}
// 							<div>
// 								<p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-brand-muted">
// 									Product
// 								</p>

// 								<h1 className="text-2xl font-bold text-brand-primary sm:text-3xl lg:text-4xl">
// 									{productdata.name}
// 								</h1>

// 								<p className="mt-5 text-base leading-7 text-brand-main sm:text-lg">
// 									{productdata.description}
// 								</p>
// 							</div>

// 							{/* Price & Quantity */}
// 							<div className="mt-8 space-y-6">
// 								{/* Price */}
// 								<div>
// 									<p className="text-sm text-brand-muted">
// 										Price
// 									</p>

// 									<p className="mt-1 text-3xl font-bold text-brand-primary">
// 										${productdata.price}
// 									</p>
// 								</div>

// 								{/* Quantity */}
// 								<div>
// 									<p className="mb-2 text-sm text-brand-muted">
// 										Quantity
// 									</p>

// 									<div className="flex w-fit items-center overflow-hidden rounded-xl border border-brand-border">
// 										<button
// 											onClick={() => {
// 												if (quantity > 0) {
// 													setQuantity(quantity - 1);
// 												}
// 												axios
// 													.put(
// 														`${API_URL}/api/cart/update/${id} `,
// 														{
// 															product_id: id,
// 															quantity: quantity,
// 														},
// 														{
// 															withCredentials: true,
// 														},
// 													)
// 													.then((res) => {
// 														console.log(res.data);
// 													});
// 											}}
// 											className="px-4 py-2 text-lg text-brand-main transition hover:bg-brand-primary hover:text-brand-dark"
// 										>
// 											-
// 										</button>

// 										<span className="min-w-12 border-x border-brand-border px-4 py-2 text-center text-brand-main">
// 											{quantity}
// 										</span>

// 										<button
// 											onClick={() => {
// 												setQuantity(quantity + 1);
// 												axios.put(
// 													`${API_URL}/api/cart/update/${id} `,
// 													{
// 														product_id: id,
// 														quantity: quantity,
// 													},
// 													{ withCredentials: true },
// 												);
// 											}}
// 											className="px-4 py-2 text-lg text-brand-main transition hover:bg-brand-primary hover:text-brand-dark"
// 										>
// 											+
// 										</button>
// 									</div>
// 								</div>
// 							</div>

// 							{/* Buttons */}
// 							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
// 								<button
// 									onClick={() => {
// 										addtocart(id);
// 										setCheck(check + 1);
// 										if (check > 0) {
// 											setQuantity(quantity + 1);
// 										}
// 									}}
// 									className="w-full rounded-xl border-2 border-brand-primary px-6 py-3 font-semibold text-brand-primary transition duration-300 hover:bg-brand-primary hover:text-brand-dark sm:w-1/2"
// 								>
// 									Add to Cart
// 								</button>

// 								<button
// 									onClick={() => {
// 										addtocart(id);
// 										navigate('/cart');
// 									}}
// 									className="w-full rounded-xl bg-brand-primary px-6 py-3 font-semibold text-brand-dark transition duration-300 hover:bg-brand-primary-hover sm:w-1/2"
// 								>
// 									Buy Now
// 								</button>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</main>
// 		</div>
// 	);
// };

// export default ProductDetail;
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../api/config';
import Nav from '../components/Nav';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [toast, setToast] = useState(false);
	const [productdata, setProductdata] = useState({});
	const [quantity, setQuantity] = useState(1);
	const [loading, setLoading] = useState(true);
	const { getCartItems } = useCart();

	function getitem() {
		axios
			.get(`${API_URL}/api/product/productdetail/${id}`)
			.then((res) => {
				const product = res.data.product;

				console.log('Product:', product);

				setProductdata(product);
			})
			.catch((err) => {
				console.log('Product error:', err);
			})
			.finally(() => {
				setLoading(false);
			});
	}

	// function getcart(productId) {
	// 	axios
	// 		.get(`${API_URL}/api/cart/`, {
	// 			withCredentials: true,
	// 		})
	// 		.then((res) => {
	// 			const cartdata = res.data.cart;

	// 			const singleitem = cartdata.find(
	// 				(item) => item.product_id == productId,
	// 			);

	// 			console.log('Cart item:', singleitem);

	// 			/*
	// 				Agar product already cart mein hai
	// 				to uski quantity show hogi.
	// 			*/
	// 		})
	// 		.catch((err) => {
	// 			console.log('Cart error:', err);
	// 		});
	// }

	function showToast() {
		setToast(true);

		setTimeout(() => {
			setToast(false);
		}, 2000);
	}

	function addtocart(id) {
		axios
			.post(
				`${API_URL}/api/cart/add`,
				{
					product_id: id,
					quantity: quantity,
				},
				{
					withCredentials: true,
				},
			)
			.then((res) => {
				console.log('Added to cart:', res.data);
				getCartItems();
				showToast();
			})
			.catch((err) => {
				console.log('Add to cart error:', err);
			});
	}

	function increaseQuantity() {
		setQuantity((prevQuantity) => prevQuantity + 1);
	}

	function decreaseQuantity() {
		if (quantity > 1) {
			setQuantity((prevQuantity) => prevQuantity - 1);
		}
	}

	useEffect(() => {
		getitem();
	}, [id]);

	if (loading) {
		return (
			<div className="min-h-screen bg-paper">
				<Nav />

				<div className="flex min-h-[70vh] items-center justify-center">
					<p className="font-['Zilla_Slab'] text-xl text-brand-primary">
						Loading product...
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-paper font-['Zilla_Slab']">
			<Nav />

			{toast && (
				<div className="fixed right-5 top-5 z-50 rounded-xl border border-brand-primary bg-brand-card px-5 py-3 shadow-lg">
					<p className="font-semibold text-brand-primary">
						Product added to cart!
					</p>
				</div>
			)}

			<main className="mx-auto mt-6 max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="overflow-hidden rounded-2xl border border-brand-border bg-brand-card shadow-lg">
					<div className="flex flex-col lg:flex-row">
						{/* Product Image */}
						<div className="flex h-[350px] w-full items-center justify-center p-6 sm:h-[450px] lg:h-[550px] lg:w-1/2">
							<img
								src={productdata.image}
								alt={productdata.name}
								className="h-full w-full object-contain"
								style={{
									borderRadius: '8px',
								}}
							/>
						</div>

						{/* Product Information */}
						<div className="flex w-full flex-col justify-between p-6 sm:p-8 lg:w-1/2 lg:p-10">
							{/* Details */}
							<div>
								<p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-brand-muted">
									Product
								</p>

								<h1 className="text-2xl font-bold text-brand-primary sm:text-3xl lg:text-4xl">
									{productdata.name}
								</h1>

								<p className="mt-5 text-base leading-7 text-brand-main sm:text-lg">
									{productdata.description}
								</p>
							</div>

							{/* Price & Quantity */}
							<div className="mt-8 space-y-6">
								{/* Price */}
								<div>
									<p className="text-sm text-brand-muted">
										Price
									</p>

									<p className="mt-1 text-3xl font-bold text-brand-primary">
										${productdata.price}
									</p>
								</div>

								{/* Quantity */}
								<div>
									<p className="mb-2 text-sm text-brand-muted">
										Quantity
									</p>

									<div className="flex w-fit items-center overflow-hidden rounded-xl border border-brand-border">
										<button
											onClick={decreaseQuantity}
											className="px-4 py-2 text-lg text-brand-main transition hover:bg-brand-primary hover:text-brand-dark"
										>
											-
										</button>

										<span className="min-w-12 border-x border-brand-border px-4 py-2 text-center text-brand-main">
											{quantity}
										</span>

										<button
											onClick={increaseQuantity}
											className="px-4 py-2 text-lg text-brand-main transition hover:bg-brand-primary hover:text-brand-dark"
										>
											+
										</button>
									</div>
								</div>
							</div>

							{/* Buttons */}
							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								{/* Add To Cart */}
								<button
									onClick={() => addtocart(id)}
									className="w-full rounded-xl border-2 border-brand-primary px-6 py-3 font-semibold text-brand-primary transition duration-300 hover:bg-brand-primary hover:text-brand-dark sm:w-1/2"
								>
									Add to Cart
								</button>

								{/* Buy Now */}
								<button
									onClick={() => {
										addtocart(id);
										navigate('/cart');
									}}
									className="w-full rounded-xl bg-brand-primary px-6 py-3 font-semibold text-brand-dark transition duration-300 hover:bg-brand-primary-hover sm:w-1/2"
								>
									Buy Now
								</button>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default ProductDetail;
