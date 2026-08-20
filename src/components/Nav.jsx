import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../api/config';
const Nav = () => {
	const navigate = useNavigate();

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
		<div className="bg-[#16211D] p-4 px-20 flex items-center justify-between">
			<div className="flex items-center gap-2 ">
				<div>
					<span className="flex bg-[#DC9C35] h-9 w-9 items-center justify-center rounded-full bg-marigold font-display text-base font-bold text-ink">
						S
					</span>
				</div>
				<div className='font-bold text-2xl text-amber-50 font-["Zilla_Slab"]'>
					Smart<span className="text-[#DC9C35]">Store</span>
				</div>
			</div>
			<div className="flex gap-2">
				<div className="text-[#DC9C35]">
					<button
						onClickCapture={() => {
							navigate('/products');
						}}
					>
						Browse
					</button>
				</div>
				<div className=" text-[#F2ECDB] ">
					<button
						onClickCapture={() => {
							navigate('/userproducts');
						}}
					>
						My listing
					</button>
				</div>
			</div>
			<div className="flex items-center gap-5">
				<button
					onClick={() => {
						navigate('/createproducts');
					}}
					className="border p-2 rounded-4xl bg-[#DC9C35] font-semibold "
				>
					{' '}
					+ List an item
				</button>
				<div>
					<button
						onClick={() => {
							navigate('/cart');
						}}
						className=" text-lg text-amber-50 font-bold font-serif hover:text-[#DC9C35] cursor-pointer "
					>
						Cart
					</button>
				</div>
				<button
					onClick={logout}
					className="text-lg text-amber-50 font-bold font-serif hover:text-red-400 cursor-pointer"
				>
					Logout
				</button>
			</div>
		</div>
	);
};

export default Nav;
