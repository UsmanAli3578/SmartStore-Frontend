import React, { useEffect, useState } from 'react';
import { API_URL } from '../api/config';
import axios from 'axios';
import Nav from '../components/Nav';

const SellerOrders = () => {
	const [orders, setOrders] = useState([]);

	function getSellerOrders() {
		axios
			.get(`${API_URL}/api/order/seller-orders`, {
				withCredentials: true,
			})
			.then((res) => {
				console.log(res.data.orders);
				setOrders(res.data.orders);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function approveOrder(orderItemId) {
		axios
			.put(
				`${API_URL}/api/order/approve/${orderItemId}`,
				{},
				{
					withCredentials: true,
				},
			)
			.then((res) => {
				console.log(res.data);

				// Approve hone ke baad orders dobara fetch karo
				getSellerOrders();
			})
			.catch((error) => {
				console.log(error);
			});
	}

	useEffect(() => {
		getSellerOrders();
	}, []);

	return (
		<div>
			<Nav />

			<div className="min-h-screen bg-brand-dark px-4 py-10 font-['Zilla_Slab'] sm:px-8">
				<div className="mx-auto max-w-5xl">
					<h1 className="mb-8 text-3xl font-bold text-brand-text">
						Seller Orders
					</h1>

					{orders.length === 0 ? (
						<p className="text-brand-muted">
							No orders for your products yet.
						</p>
					) : (
						<div className="space-y-4">
							{orders.map((order) => (
								<div
									key={order.order_item_id}
									className="border border-brand-border"
								>
									{/* Order Header */}
									<div className="border-b border-brand-border p-4">
										<h2 className="text-xl font-bold text-brand-text">
											Order #{order.order_id}
										</h2>

										<p className="text-sm text-brand-muted">
											Quantity: {order.quantity}
										</p>
									</div>

									{/* Product */}
									<div className="flex items-center gap-4 p-4">
										<img
											src={order.product_image}
											alt={order.product_name}
											className="h-20 w-20 rounded-lg object-cover"
										/>

										<div className="flex-1">
											<h3 className="text-lg font-semibold text-brand-text">
												{order.product_name}
											</h3>

											<p className="text-brand-primary">
												${order.price}
											</p>
										</div>

										{/* Status + Approve Button */}
										<div className="flex items-center gap-3">
											<div
												className={`rounded-full border px-4 py-2 ${
													order.item_status ===
													'approved'
														? 'border-green-500 text-green-400'
														: 'border-yellow-500 text-yellow-400'
												}`}
											>
												{order.item_status ===
												'approved'
													? '✓ Approved'
													: '⏳ Pending'}
											</div>

											{order.item_status ===
												'pending' && (
												<button
													onClick={() =>
														approveOrder(
															order.order_item_id,
														)
													}
													className="cursor-pointer rounded-full bg-brand-primary px-4 py-2 font-semibold text-brand-text-dark transition hover:bg-brand-hover"
												>
													Approve
												</button>
											)}
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default SellerOrders;
