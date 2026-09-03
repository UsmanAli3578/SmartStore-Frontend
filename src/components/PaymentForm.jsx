import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import {
	PaymentElement,
	useStripe,
	useElements,
} from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const navigate = useNavigate();
	const { setCartItems } = useCart();

	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		setLoading(true);
		setErrorMessage('');

		const { error } = await stripe.confirmPayment({
			elements,
			redirect: 'if_required',
		});

		if (error) {
			console.error('Stripe Payment Error:', error);
			setErrorMessage(error.message);
			setLoading(false);
			return;
		}

		console.log('Payment successful');
		setCartItems([]);

		// Webhook ko order create karne ka thora time dein
		setTimeout(() => {
			navigate('/my-orders');
		}, 1500);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="mt-4"
		>
			<PaymentElement />

			{errorMessage && (
				<p className="mt-3 text-red-500">{errorMessage}</p>
			)}

			<button
				type="submit"
				disabled={!stripe || loading}
				className="mt-4 w-full cursor-pointer rounded-full bg-brand-primary py-3 font-semibold text-brand-text-dark hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-50"
			>
				{loading ? 'Processing...' : 'Pay Now'}
			</button>
		</form>
	);
};

export default PaymentForm;
