import React, { useEffect } from 'react';
import { useState } from 'react';
import { API_URL } from '../api/config';
import { Trash2 } from 'lucide-react';
import axios from 'axios';
import Nav from '../components/Nav';
import { useCart } from '../context/CartContext';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from '../config/stripe';
import PaymentForm from '../components/PaymentForm';

const Cart = () => {
	const { cartItems, getCartItems } = useCart();
	const [clientSecret, setClientSecret] = useState(null);

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

	const checkout = () => {
		axios
			.post(
				`${API_URL}/api/order/payment-intent`,
				{},
				{
					withCredentials: true,
				},
			)
			.then((res) => {
				console.log(res.data);
				setClientSecret(res.data.clientSecret);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	function increaseQuantity(item) {
		const newQuantity = item.quantity + 1;

		axios
			.put(
				`${API_URL}/api/cart/update/${item.product_id}`,
				{
					product_id: item.product_id,
					quantity: newQuantity,
				},
				{
					withCredentials: true,
				},
			)
			.then(() => {
				getCartItems();
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function decreaseQuantity(item) {
		if (item.quantity <= 1) return;

		const newQuantity = item.quantity - 1;

		axios
			.put(
				`${API_URL}/api/cart/update/${item.product_id}`,
				{
					product_id: item.product_id,
					quantity: newQuantity,
				},
				{
					withCredentials: true,
				},
			)
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
			<Nav />

			<div className="min-h-screen bg-brand-dark px-4 py-10 font-['Zilla_Slab'] sm:px-8 flex flex-col lg:flex-row">
				{/* Cart Section */}
				<div className="flex-5 border border-brand-border">
					<div className="border-b border-brand-border p-2 text-3xl font-bold text-brand-text">
						Your Cart
					</div>

					{cartItems.length === 0 ? (
						<p className="p-4 text-brand-muted">
							Your cart is empty.
						</p>
					) : (
						<div>
							{/* Header */}
							<div className="flex items-center justify-between border-b border-brand-border p-2 text-sm text-brand-muted">
								<div className="flex-1">Items</div>

								<div className="flex items-center">
									<div className="w-26 text-right">Price</div>

									<div className="w-30 text-center">Qty</div>

									<div className="w-12 text-center">
										Delete
									</div>
								</div>
							</div>

							{/* Cart Items */}
							{cartItems.map((item) => {
								return (
									<div
										key={item.id}
										className="flex items-center gap-2 justify-between border-b border-brand-border p-2"
									>
										{/* Item */}
										<div className="flex min-w-0 flex-1 items-center gap-2">
											<img
												src={item.image}
												alt={item.name}
												className="h-12 w-12 shrink-0 rounded-lg object-cover"
											/>

											<div className="truncate text-brand-main">
												{item.name}
											</div>
										</div>

										{/* Price */}
										<div className="w-20 text-right text-brand-primary">
											${item.price}
										</div>

										{/* Quantity */}
										<div className="flex w-24 shrink-0 items-center justify-center">
											<button
												onClick={() =>
													decreaseQuantity(item)
												}
												className="flex h-9 w-8 items-center justify-center rounded-l-lg border border-brand-border text-brand-main transition hover:bg-brand-primary hover:text-brand-dark"
											>
												-
											</button>

											<span className="flex h-9 min-w-10 items-center justify-center border-y border-brand-border px-2 text-brand-main">
												{item.quantity}
											</span>

											<button
												onClick={() =>
													increaseQuantity(item)
												}
												className="flex h-9 w-8 items-center justify-center rounded-r-lg border border-brand-border text-brand-main transition hover:bg-brand-primary hover:text-brand-dark"
											>
												+
											</button>
										</div>

										{/* Delete */}
										<div className="flex w-12 justify-center">
											<button
												onClick={() => deleted(item)}
												className="rounded-full border border-red-300 p-2 text-red-600 transition hover:bg-red-500/10"
											>
												<Trash2 size={16} />
											</button>
										</div>
									</div>
								);
							})}
						</div>
					)}
				</div>

				{/* Order Summary */}
				<div className="flex-2 flex items-center justify-center border border-brand-border">
					<div className="rounded-2xl border border-brand-primary p-10">
						<div className="text-2xl font-bold text-brand-text">
							Order Summary
						</div>

						<div className="font-bold text-brand-text">
							Total:{' '}
							<span className="text-brand-primary">
								${total.toFixed(2)}
							</span>
						</div>

						<button
							onClick={checkout}
							className="mt-4 w-full rounded-full bg-brand-primary py-3 font-semibold text-brand-text-dark hover:bg-brand-hover cursor-pointer"
						>
							Checkout
						</button>

						{clientSecret && (
							<Elements
								stripe={stripePromise}
								options={{ clientSecret }}
							>
								<PaymentForm />
							</Elements>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
