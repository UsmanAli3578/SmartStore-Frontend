import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../api/config';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	function getCartItems() {
		axios
			.get(`${API_URL}/api/cart/`, {
				withCredentials: true,
			})
			.then((res) => {
				setCartItems(res.data.cart);
			})
			.catch((error) => {
				console.log('Cart error:', error);
			});
	}

	useEffect(() => {
		getCartItems();
	}, []);

	const quantity = cartItems.reduce(
		(total, item) => total + item.quantity,
		0,
	);

	return (
		<CartContext.Provider
			value={{
				cartItems,
				setCartItems,
				quantity,
				getCartItems,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	return useContext(CartContext);
};
