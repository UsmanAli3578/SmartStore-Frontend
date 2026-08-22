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

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { tenantConfig } from '../config/tenantConfig';

import { API_URL } from '../api/config';
const Nav = () => {
	const navigate = useNavigate();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

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
				<div className=" text-brand-text hover:text-brand-primary  ">
					<button
						onClickCapture={() => {
							navigate('/userproducts');
						}}
						className="cursor-pointer"
					>
						My Products
					</button>
				</div>
			</div>
			{/* <div className="flex items-center gap-5 font-['Zilla_Slab']"> */}
			<div className="hidden md:flex items-center gap-5 font-['Zilla_Slab']">
				<button
					onClick={() => {
						navigate('/createproducts');
					}}
					className="border p-2 rounded-4xl text-brand-dark  font-semibold border-brand-primary hover:bg-brand-hover cursor-pointer bg-brand-primary "
				>
					{' '}
					+ List sell item
				</button>
				<div>
					<button
						onClick={() => {
							navigate('/cart');
						}}
						className=" text-lg text-brand-text font-bold font-serif hover:text-brand-primary cursor-pointer "
					>
						Cart
					</button>
				</div>
				<button
					onClick={logout}
					className="text-lg text-brand-text font-bold font-serif hover:text-red-400 cursor-pointer"
				>
					Logout
				</button>
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
						<button
							onClickCapture={() => {
								navigate('/userproducts');
								setIsMenuOpen(false);
							}}
							className="cursor-pointer"
						>
							My Products
						</button>
					</div>
					<div>
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
					</div>

					<div>
						<button
							onClick={() => {
								navigate('/cart');
								setIsMenuOpen(false);
							}}
							className=" text-lg text-brand-text font-bold font-serif hover:text-brand-primary cursor-pointer "
						>
							Cart
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
