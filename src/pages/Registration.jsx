import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../api/config';
import { tenantConfig } from '../config/tenantConfig';

const Registration = () => {
	const [nameError, setNameError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [confirmPasswordError, setConfirmPasswordError] = useState('');
	const [apiError, setApiError] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const navigate = useNavigate();
	function handlesubmit(e) {
		e.preventDefault();
		setNameError('');
		setEmailError('');
		setPasswordError('');
		setConfirmPasswordError('');
		setApiError('');

		const formData = new FormData(e.target);

		const name = formData.get('name').trim();

		if (!name) {
			setNameError('Name is required');
			return;
		}
		if (name.length < 3) {
			setNameError('Name must be at least 3 characters');
			return;
		}
		const nameRegex = /^[A-Za-z\s]+$/;

		if (!nameRegex.test(name)) {
			setNameError('Name can only contain letters and spaces');

			return;
		}
		setNameError('');

		const email = formData.get('email').trim();
		if (!email) {
			setEmailError('Email is required');
			return;
		}
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			setEmailError('Please enter a valid email address');
			return;
		}
		setEmailError('');

		const password = formData.get('password');
		if (!password) {
			setPasswordError('Password is required');
			return;
		}

		if (password.length < 8) {
			setPasswordError('Password must be at least 8 characters');
			return;
		}

		const passwordRegex =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

		if (!passwordRegex.test(password)) {
			setPasswordError(
				'Password must contain uppercase, lowercase, number and special character',
			);
			return;
		}

		setPasswordError('');
		const confirmPassword = formData.get('confirmPassword');
		if (!confirmPassword) {
			setConfirmPasswordError('Please confirm your password');
			return;
		}

		if (password !== confirmPassword) {
			setConfirmPasswordError('Passwords do not match');
			return;
		}

		setConfirmPasswordError('');

		const data = {
			name,
			email,
			password,
			role: formData.get('role'),
		};

		setIsSubmitting(true);
		axios
			.post(`${API_URL}/api/auth/register`, data, {
				withCredentials: true,
			})
			.then((res) => {
				console.log(res.data);
				e.target.reset();
				navigate('/products', { replace: true });
			})
			.catch((error) => {
				console.log(error.response?.data);
				if (error.response?.status === 409) {
					setEmailError(error.response.data.message);
					return;
				}

				setApiError(
					error.response?.data?.message ||
						'Something went wrong. Please try again.',
				);
			})
			.finally(() => {
				setIsSubmitting(false);
			});
	}

	return (
		<div className="min-h-screen flex flex-col lg:flex-row w-full">
			<div className="bg-brand-dark flex-3">
				<div className="flex items-center gap-2 p-10">
					<div>
						<span className="flex bg-brand-primary h-9 w-9 items-center justify-center rounded-full font-display text-base font-bold">
							S
						</span>
					</div>
					<div className='font-bold text-2xl text-brand-text font-["Zilla_Slab"]'>
						{tenantConfig.brandName}
					</div>
				</div>
				<div className="p-6 sm:p-10 text-brand-text mt-6 lg:mt-20">
					<div className="text-brand-primary tracking-wider">
						Peer-To-Peer Marketplace
					</div>
					<div className='font-["Zilla_Slab"] text-4xl mt-4'>
						List it, tag it,{' '}
						<span className="text-brand-primary">sell it.</span>
					</div>
					<div className="leading-6 mt-4 text-[#9CA598]">
						One account, two ways to use it — shop what your
						neighbours are selling, or open your own stall in
						minutes.
					</div>
				</div>
			</div>

			<div className="flex items-center justify-center flex-4 bg-[#F2ECDB] py-10">
				<div className="w-full max-w-md lg:max-w-lg border border-[#b5adad] p-6 sm:p-12 lg:p-20 bg-[#E9E1CA] rounded-2xl mx-4">
					<div className="mb-5">
						<div className="tracking-widest text-green-800">
							GET STARTED
						</div>
						<div className="font-semibold text-2xl text-brand-text-dark">
							Open your account
						</div>
						<div className="text-sm text-[#79776B] mt-2">
							It takes less than a minute.
						</div>
					</div>
					<form onSubmit={handlesubmit}>
						{apiError && (
							<div className="text-red-500 text-xs mt-1">
								{apiError}
							</div>
						)}
						<div className="text-sm font-semibold text-brand-text-dark mb-4">
							<div className="mb-1">FullName</div>
							<input
								type="text"
								name="name"
								placeholder="Enter your full name"
								className="border border-brand-border outline-0 px-4 py-3 rounded-xl w-full text-brand-text-dark bg-white"
							/>
							{nameError && (
								<div className="text-red-500 text-xs  border-red-200 bg-red-50 rounded-xl text-center mt-1">
									{nameError}
								</div>
							)}
						</div>
						<div className="text-sm font-semibold text-brand-text-dark mb-4">
							<div className="mb-1">Email</div>
							<input
								type="text"
								name="email"
								placeholder="e.g. usman@gmail.com"
								className="border border-brand-border outline-0 px-4 py-3 rounded-xl w-full text-brand-text-dark bg-white"
							/>
							{emailError && (
								<div className="text-red-500 text-xs border-red-200 bg-red-50 rounded-xl text-center mt-1">
									{emailError}
								</div>
							)}
						</div>
						<div className="text-sm font-semibold text-brand-text-dark mb-4">
							<div className="mb-1">CreatePassword</div>
							<input
								type="password"
								name="password"
								placeholder="Create a password"
								className="border border-brand-border outline-0 px-4 py-3 rounded-xl w-full text-brand-text-dark bg-white"
							/>
							<div className="text-[#79776B] text-xs mt-1">
								At least 8 characters, one uppercase, one
								lowercase, one number and one special character.
							</div>
							{passwordError && (
								<div className="text-red-500 text-xs border-red-200 bg-red-50 rounded-xl text-center mt-1">
									{passwordError}
								</div>
							)}
						</div>

						<div className="text-sm font-semibold text-brand-text-dark mb-4">
							<div className="mb-1">Confirm Password</div>
							<input
								type="password"
								name="confirmPassword"
								placeholder="Confirm your password"
								className="border border-brand-border outline-0 px-4 py-3 rounded-xl w-full text-brand-text-dark bg-white"
							/>

							{confirmPasswordError && (
								<div className="text-red-500 text-xs border-red-200 bg-red-50 rounded-xl text-center mt-1">
									{confirmPasswordError}
								</div>
							)}
						</div>

						<div className="text-sm font-semibold text-brand-text-dark mb-4">
							<div className="mb-1">Role</div>
							<select
								name="role"
								className="border border-brand-border outline-0 px-4 py-3 rounded-xl w-full text-brand-text-dark bg-white"
							>
								<option
									className="rounded-xl"
									value="user"
								>
									User
								</option>
								<option
									className="rounded-xl"
									value="seller"
								>
									Seller
								</option>
							</select>
						</div>
						<button
							disabled={isSubmitting}
							className="border w-full mt-2 py-3 rounded-2xl bg-brand-dark text-brand-text font-semibold hover:bg-[#1F4E36] disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{isSubmitting
								? 'Creating account...'
								: 'Create account'}
						</button>
					</form>
					<div className="font-semibold text-sm flex gap-2 justify-center">
						<div className="text-[#6E7269]">
							Already have an account?
						</div>
						<button
							type="button"
							onClick={() =>
								navigate('/login', { replace: true })
							}
							className="text-blue-500"
						>
							Login
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Registration;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import { API_URL } from '../api/config';
// import { tenantConfig } from '../config/tenantConfig';

// const Registration = () => {
// 	const [nameError, setNameError] = useState('');
// 	const [emailError, setEmailError] = useState('');
// 	const [passwordError, setPasswordError] = useState('');
// 	const [confirmPasswordError, setConfirmPasswordError] = useState('');
// 	const [apiError, setApiError] = useState('');
// 	const [formValues, setFormValues] = useState({
// 		name: '',
// 		email: '',
// 		password: '',
// 		confirmPassword: '',
// 		role: 'user',
// 	});
// 	const navigate = useNavigate();

// 	function handleChange(e) {
// 		const { name, value } = e.target;
// 		setFormValues((prev) => ({ ...prev, [name]: value }));
// 	}

// 	const isFormFilled =
// 		formValues.name.trim() &&
// 		formValues.email.trim() &&
// 		formValues.password &&
// 		formValues.confirmPassword;

// 	function handlesubmit(e) {
// 		e.preventDefault();
// 		setNameError('');
// 		setEmailError('');
// 		setPasswordError('');
// 		setConfirmPasswordError('');
// 		setApiError('');

// 		const formData = new FormData(e.target);

// 		const name = formData.get('name').trim();

// 		if (!name) {
// 			setNameError('Name is required');
// 			return;
// 		}
// 		if (name.length < 3) {
// 			setNameError('Name must be at least 3 characters');
// 			return;
// 		}
// 		const nameRegex = /^[A-Za-z\s]+$/;

// 		if (!nameRegex.test(name)) {
// 			setNameError('Name can only contain letters and spaces');

// 			return;
// 		}
// 		setNameError('');

// 		const email = formData.get('email').trim();
// 		if (!email) {
// 			setEmailError('Email is required');
// 			return;
// 		}
// 		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// 		if (!emailRegex.test(email)) {
// 			setEmailError('Please enter a valid email address');
// 			return;
// 		}
// 		setEmailError('');

// 		const password = formData.get('password');
// 		if (!password) {
// 			setPasswordError('Password is required');
// 			return;
// 		}

// 		if (password.length < 8) {
// 			setPasswordError('Password must be at least 8 characters');
// 			return;
// 		}

// 		const passwordRegex =
// 			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

// 		if (!passwordRegex.test(password)) {
// 			setPasswordError(
// 				'Password must contain uppercase, lowercase, number and special character',
// 			);
// 			return;
// 		}

// 		setPasswordError('');
// 		const confirmPassword = formData.get('confirmPassword');
// 		if (!confirmPassword) {
// 			setConfirmPasswordError('Please confirm your password');
// 			return;
// 		}

// 		if (password !== confirmPassword) {
// 			setConfirmPasswordError('Passwords do not match');
// 			return;
// 		}

// 		setConfirmPasswordError('');

// 		const data = {
// 			name,
// 			email,
// 			password,
// 			role: formData.get('role'),
// 		};

// 		axios
// 			.post(`${API_URL}/api/auth/register`, data, {
// 				withCredentials: true,
// 			})
// 			.then((res) => {
// 				console.log(res.data);
// 				e.target.reset();
// 				navigate('/products', { replace: true });
// 			})
// 			.catch((error) => {
// 				console.log(error.response?.data);
// 				if (error.response?.status === 409) {
// 					setEmailError(error.response.data.message);
// 					return;
// 				}

// 				setApiError(
// 					error.response?.data?.message ||
// 						'Something went wrong. Please try again.',
// 				);
// 			});
// 	}

// 	return (
// 		<div className="min-h-screen flex flex-col lg:flex-row w-full">
// 			<div className="bg-brand-dark flex-3">
// 				<div className="flex items-center gap-2 p-10">
// 					<div>
// 						<span className="flex bg-brand-primary h-9 w-9 items-center justify-center rounded-full font-display text-base font-bold">
// 							S
// 						</span>
// 					</div>
// 					<div className='font-bold text-2xl text-brand-text font-["Zilla_Slab"]'>
// 						{tenantConfig.brandName}
// 					</div>
// 				</div>
// 				<div className="p-6 sm:p-10 text-brand-text mt-6 lg:mt-20">
// 					<div className="text-brand-primary tracking-wider">
// 						Peer-To-Peer Marketplace
// 					</div>
// 					<div className='font-["Zilla_Slab"] text-4xl mt-4'>
// 						List it, tag it,{' '}
// 						<span className="text-brand-primary">sell it.</span>
// 					</div>
// 					<div className="leading-6 mt-4 text-[#9CA598]">
// 						One account, two ways to use it — shop what your
// 						neighbours are selling, or open your own stall in
// 						minutes.
// 					</div>
// 				</div>
// 			</div>

// 			<div className="flex items-center justify-center flex-4 bg-[#F2ECDB] py-10">
// 				<div className="w-full max-w-md lg:max-w-lg border border-[#b5adad] p-6 sm:p-12 lg:p-20 bg-[#E9E1CA] rounded-2xl mx-4">
// 					<div className="mb-5">
// 						<div className="tracking-widest text-green-800">
// 							GET STARTED
// 						</div>
// 						<div className="font-semibold text-2xl text-brand-text-dark">
// 							Open your account
// 						</div>
// 						<div className="text-sm text-[#79776B] mt-2">
// 							It takes less than a minute.
// 						</div>
// 					</div>
// 					<form onSubmit={handlesubmit}>
// 						{apiError && (
// 							<div className="text-red-500 text-xs mt-1">
// 								{apiError}
// 							</div>
// 						)}
// 						<div className="text-sm font-semibold text-brand-text-dark mb-4">
// 							<div className="mb-1">FullName</div>
// 							<input
// 								type="text"
// 								name="name"
// 								placeholder="Enter your full name"
// 								value={formValues.name}
// 								onChange={handleChange}
// 								className="border border-brand-border outline-0 px-4 py-3 rounded-xl w-full text-brand-text-dark bg-white"
// 							/>
// 							{nameError && (
// 								<div className="text-red-500 text-xs border-red-200 bg-red-50 rounded-xl text-center mt-1">
// 									{nameError}
// 								</div>
// 							)}
// 						</div>
// 						<div className="text-sm font-semibold text-brand-text-dark mb-4">
// 							<div className="mb-1">Email</div>
// 							<input
// 								type="text"
// 								name="email"
// 								placeholder="e.g. usman@gmail.com"
// 								value={formValues.email}
// 								onChange={handleChange}
// 								className="border border-brand-border outline-0 px-4 py-3 rounded-xl w-full text-brand-text-dark bg-white"
// 							/>
// 							{emailError && (
// 								<div className="text-red-500 text-xs border-red-200 bg-red-50 rounded-xl text-center mt-1">
// 									{emailError}
// 								</div>
// 							)}
// 						</div>
// 						<div className="text-sm font-semibold text-brand-text-dark mb-4">
// 							<div className="mb-1">CreatePassword</div>
// 							<input
// 								type="password"
// 								name="password"
// 								placeholder="Create a password"
// 								value={formValues.password}
// 								onChange={handleChange}
// 								className="border border-brand-border outline-0 px-4 py-3 rounded-xl w-full text-brand-text-dark bg-white"
// 							/>
// 							<div className="text-[#79776B] text-xs mt-1">
// 								At least 8 characters, one uppercase, one
// 								lowercase, one number and one special character.
// 							</div>
// 							{passwordError && (
// 								<div className="text-red-500 text-xs border-red-200 bg-red-50 rounded-xl text-center mt-1">
// 									{passwordError}
// 								</div>
// 							)}
// 						</div>

// 						<div className="text-sm font-semibold text-brand-text-dark mb-4">
// 							<div className="mb-1">Confirm Password</div>
// 							<input
// 								type="password"
// 								name="confirmPassword"
// 								placeholder="Confirm your password"
// 								value={formValues.confirmPassword}
// 								onChange={handleChange}
// 								className="border border-brand-border outline-0 px-4 py-3 rounded-xl w-full text-brand-text-dark bg-white"
// 							/>

// 							{confirmPasswordError && (
// 								<div className="text-red-500 text-xs border-red-200 bg-red-50 rounded-xl text-center mt-1">
// 									{confirmPasswordError}
// 								</div>
// 							)}
// 						</div>

// 						<div className="text-sm font-semibold text-brand-text-dark mb-4">
// 							<div className="mb-1">Role</div>
// 							<select
// 								name="role"
// 								value={formValues.role}
// 								onChange={handleChange}
// 								className="border border-brand-border outline-0 px-4 py-3 rounded-xl w-full text-brand-text-dark bg-white"
// 							>
// 								<option
// 									className="rounded-xl"
// 									value="user"
// 								>
// 									User
// 								</option>
// 								<option
// 									className="rounded-xl"
// 									value="seller"
// 								>
// 									Seller
// 								</option>
// 							</select>
// 						</div>
// 						<button
// 							disabled={!isFormFilled}
// 							className="border w-full mt-2 py-3 rounded-2xl bg-brand-dark text-brand-text font-semibold hover:bg-[#1F4E36] disabled:opacity-50 disabled:cursor-not-allowed"
// 						>
// 							Create account
// 						</button>
// 					</form>
// 					<div className="font-semibold text-sm flex gap-2 justify-center">
// 						<div className="text-[#6E7269]">
// 							Already have an account?
// 						</div>
// 						<button
// 							type="button"
// 							onClick={() =>
// 								navigate('/login', { replace: true })
// 							}
// 							className="text-blue-500"
// 						>
// 							Login
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Registration;
