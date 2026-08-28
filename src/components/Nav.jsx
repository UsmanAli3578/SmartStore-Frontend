// import React from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { tenantConfig } from '../config/tenantConfig';

// import { API_URL } from '../api/config';
// const Nav = () => {
// 	const navigate = useNavigate();

// 	function logout() {
// 		axios
// 			.post(
// 				`${API_URL}/api/auth/logout`,
// 				{},
// 				{
// 					withCredentials: true,
// 				},
// 			)
// 			.then(() => {
// 				navigate('/login', { replace: true });
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 	}
// 	return (
// 		<div className="bg-[#16211D] p-4 px-20 flex items-center justify-between">
// 			<div className="flex items-center gap-2 ">
// 				<div>
// 					<span className="flex bg-[#DC9C35] h-9 w-9 items-center justify-center rounded-full bg-marigold font-display text-base font-bold text-ink">
// 						S
// 					</span>
// 				</div>
// 				<div className='font-bold text-2xl text-amber-50 font-["Zilla_Slab"]'>
// 					Smart<span className="text-[#DC9C35]">Store</span>
// 				</div>
// 			</div>
// 			<div className="flex gap-2">
// 				<div className="text-[#DC9C35]">
// 					<button
// 						onClickCapture={() => {
// 							navigate('/products');
// 						}}
// 					>
// 						Browse
// 					</button>
// 				</div>
// 				<div className=" text-[#F2ECDB] ">
// 					<button
// 						onClickCapture={() => {
// 							navigate('/userproducts');
// 						}}
// 					>
// 						My listing
// 					</button>
// 				</div>
// 			</div>
// 			<div className="flex items-center gap-5">
// 				<button
// 					onClick={() => {
// 						navigate('/createproducts');
// 					}}
// 					className="border p-2 rounded-4xl bg-[#DC9C35] font-semibold "
// 				>
// 					{' '}
// 					+ List an item
// 				</button>
// 				<div>
// 					<button
// 						onClick={() => {
// 							navigate('/cart');
// 						}}
// 						className=" text-lg text-amber-50 font-bold font-serif hover:text-[#DC9C35] cursor-pointer "
// 					>
// 						Cart
// 					</button>
// 				</div>
// 				<button
// 					onClick={logout}
// 					className="text-lg text-amber-50 font-bold font-serif hover:text-red-400 cursor-pointer"
// 				>
// 					Logout
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// export default Nav;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { tenantConfig } from '../config/tenantConfig';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

import { API_URL } from '../api/config';
const Nav = () => {
	const navigate = useNavigate();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [user, setUser] = useState(null);
	const [isProfileOpen, setIsProfileOpen] = useState(false);
	const { quantity } = useCart();

	useEffect(() => {
		axios
			.get(`${API_URL}/api/auth/me`, {
				withCredentials: true,
			})
			.then((res) => {
				setUser(res.data.user);
				console.log(res.data.user);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	function logout() {
		axios
			.post(
				`${API_URL}/api/auth/logout`,
				{},
				{
					withCredentials: true,
				},
			)
			.then(() => {
				navigate('/login', { replace: true });
			})
			.catch((error) => {
				console.log(error);
			});
	}
	return (
		<div className="bg-brand-dark border-b border-brand-border p-4 px-4 sm:px-8 lg:px-20  flex items-center justify-between flex-wrap">
			<div className="flex items-center gap-2 ">
				<div>
					<span className="flex border border-brand-primary font-['Zilla_Slab'] text-brand-primary text-3xl h-12 w-12 items-center justify-center rounded-full  font-display  font-bold">
						{tenantConfig.logoText}
					</span>
				</div>
				<div className='font-bold text-2xl text-brand-text font-["Zilla_Slab"]'>
					{tenantConfig.brandName}
				</div>
			</div>
			{/* <div className="flex gap-2 font-['Zilla_Slab']"> */}
			<div className="hidden md:flex gap-2 font-['Zilla_Slab']">
				<div className="text-brand-text hover:text-brand-primary">
					<button
						onClickCapture={() => {
							navigate('/products');
						}}
						className="cursor-pointer"
					>
						Products
					</button>
				</div>
			</div>
			{/* <div className="flex items-center gap-5 font-['Zilla_Slab']"> */}
			<div className="hidden md:flex items-center gap-5 font-['Zilla_Slab']">
				{/* <div>
					<button
						onClick={() => {
							navigate('/cart');
						}}
						className=" text-lg text-brand-text font-bold font-serif hover:text-brand-primary cursor-pointer "
					>
						<div className='border h-10 flex items-center w-10 rounded-4xl  justify-center'>
							<ShoppingCart size={25} />
						</div>
					</button>
				</div> */}

				<div>
					<button
						onClick={() => {
							navigate('/cart');
						}}
						className="group cursor-pointer"
					>
						<div className="h-10 w-10 flex flex-col items-center justify-center rounded-full border border-brand-border text-brand-text transition-colors duration-200 group-hover:border-brand-primary group-hover:text-brand-primary group-hover:bg-brand-primary/10">
							<div className="text-xs ml-4  h-3 w-3 rounded-4xl bg-[#E7000B] flex justify-center items-center">{quantity}</div>
							<ShoppingCart size={20} />
						</div>
					</button>
				</div>
				<div className="relative">
					<button
						type="button"
						onClick={() => setIsProfileOpen((prev) => !prev)}
						className="flex items-center gap-2 text-brand-text hover:text-brand-primary cursor-pointer"
					>
						{/* <div className="h-10 w-10 shrink-0 rounded-full border border-brand-primary flex items-center justify-center font-bold text-brand-primary">
							{user?.name
								? user.name.charAt(0).toUpperCase()
								: 'U'}
						</div> */}

						<div className="h-11 w-11 shrink-0 rounded-full border border-brand-primary overflow-hidden flex items-center justify-center font-bold text-brand-primary">
							{user?.avatar ? (
								<img
									src={user.avatar}
									alt={user.name}
									className="w-full h-full object-cover"
								/>
							) : (
								user?.name?.charAt(0).toUpperCase() || 'U'
							)}
						</div>

						<div className="flex flex-col items-start">
							<span className="font-semibold text-brand-text">
								{user?.name || 'User'}
							</span>
							<span className="text-xs text-brand-text/60 capitalize">
								{user?.role || 'user'}
							</span>
						</div>

						<span className="text-sm">⌄</span>
					</button>

					{isProfileOpen && (
						<div className="absolute right-0 top-full mt-3 w-64 bg-brand-dark border border-brand-border rounded-xl shadow-xl p-4 z-50">
							<div className="flex items-center gap-3 pb-4 border-b border-brand-border">
								<div className="h-11 w-11 shrink-0 rounded-full border border-brand-primary overflow-hidden flex items-center justify-center font-bold text-brand-primary">
									{user?.avatar ? (
										<img
											src={user.avatar}
											alt={user.name}
											className="w-full h-full object-cover"
										/>
									) : (
										user?.name?.charAt(0).toUpperCase() ||
										'U'
									)}
								</div>

								<div className="min-w-0">
									<p className="text-brand-text font-bold truncate">
										{user?.name || 'User'}
									</p>

									<p className="text-sm text-brand-text/60 truncate">
										{user?.email}
									</p>

									<p className="text-xs text-brand-primary capitalize mt-1">
										{user?.role}
									</p>
								</div>
							</div>

							<div className="py-2 ">
								<button
									type="button"
									className="w-full  text-left px-3 py-2 text-brand-text border border-transparent hover:border-brand-primary rounded-lg cursor-pointer"
									onClick={() => {
										navigate('/profile');
										setIsProfileOpen(false);
									}}
								>
									Profile
								</button>
								<div className="">
									{user?.role === 'seller' && (
										<button
											onClick={() => {
												navigate('/createproducts');
											}}
											className="border my-2 p-2 rounded-4xl text-brand-text  font-semibold   border-transparent hover:border-brand-primary cursor-pointer  "
										>
											{' '}
											+ List sell item
										</button>
									)}
								</div>

								{user?.role === 'seller' && (
									<button
										type="button"
										onClick={() => {
											navigate('/userproducts');
											setIsProfileOpen(false);
										}}
										className="w-full text-left px-3 py-2 text-brand-text border  border-transparent hover:border-brand-primary rounded-lg cursor-pointer"
									>
										My Product
									</button>
								)}
							</div>

							<div className="border-t border-brand-border pt-2">
								<button
									type="button"
									onClick={logout}
									className="w-full text-left px-3 py-2 text-red-400 hover:bg-red-400/10 rounded-lg cursor-pointer"
								>
									Logout
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
			<button
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				className="md:hidden text-brand-text text-2xl"
			>
				☰
			</button>

			{isMenuOpen && (
				<div className="md:hidden w-full flex flex-col gap-2 text-sm items-center font-['Zilla_Slab']">
					<div className="text-brand-text hover:text-brand-primary">
						<button
							onClickCapture={() => {
								navigate('/products');
								setIsMenuOpen(false);
							}}
							className="cursor-pointer"
						>
							Products
						</button>
					</div>
					<div className=" text-brand-text hover:text-brand-primary  ">
						{/* <button
							onClickCapture={() => {
								navigate('/userproducts');
								setIsMenuOpen(false);
							}}
							className="cursor-pointer"
						>
							My Products
						</button> */}

						{user?.role === 'seller' && (
							<button
								type="button"
								onClick={() => {
									navigate('/userproducts');
									setIsProfileOpen(false);
								}}
								className="w-full text-left px-3 py-2 text-brand-text border  border-transparent hover:border-brand-primary rounded-lg cursor-pointer"
							>
								My Product
							</button>
						)}
					</div>
					<div className="text-brand-text hover:text-brand-primary">
						<button
							onClick={() => {
								navigate('/profile');
								setIsMenuOpen(false);
							}}
							className="cursor-pointer"
						>
							Profile
						</button>
					</div>
					<div>
						{user?.role === 'seller' && (
							<button
								onClick={() => {
									navigate('/createproducts');
									setIsMenuOpen(false);
								}}
								className="border p-2 rounded-2xl text-brand-text  font-semibold border-brand-primary hover:bg-brand-hover cursor-pointer  "
							>
								{' '}
								+ List sell item
							</button>
						)}
					</div>

					<div>
						<button
							onClick={() => {
								navigate('/cart');
							}}
							className="group cursor-pointer"
						>
							<div className="h-10 w-10 flex items-center justify-center rounded-full border border-brand-border text-brand-text transition-colors duration-200 group-hover:border-brand-primary group-hover:text-brand-primary group-hover:bg-brand-primary/10">
								<ShoppingCart size={20} />
							</div>
						</button>
					</div>
					<button
						onClick={logout}
						className="text-lg text-brand-text font-bold font-serif hover:text-red-400 cursor-pointer"
					>
						Logout
					</button>
				</div>
			)}
		</div>
	);
};

export default Nav;
