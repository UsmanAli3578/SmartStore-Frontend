// import React from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import { API_URL } from '../api/config';

// const Registration = () => {
// 	const navigate = useNavigate();
// 	function handlesubmit(e) {
// 		e.preventDefault();

// 		const formData = new FormData(e.target);

// 		const data = {
// 			name: formData.get('name'),
// 			email: formData.get('email'),
// 			password: formData.get('password'),
// 			role: formData.get('role'),
// 		};

// 		axios
// 			.post(`${API_URL}/api/auth/register`, data)
// 			.then((res) => {
// 				console.log(res.data);
// 				e.target.reset();
// 				navigate('/products');
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 	}

// 	return (
// 		<div className=" min-h-screen bg-gray-700   ">
// 			<div className='text-center text-amber-50 font-bold text-4xl mb-10'>Registration</div>
// 			<div
// 				className="flex
// 				justify-center
// 				flex-col
// 				items-center

// 				"
// 			>
// 				<div className="border px-10 py-10 bg-amber-50 rounded-xl ">
// 					<div className=" text-center font-bold text-xl ">
// 						Create Account
// 					</div>
// 					<form
// 						action=""
// 						onSubmit={handlesubmit}
// 					>
// 						<div className=" text-sm font-semibold ">
// 							<div>FullName</div>
// 							<input
// 								type="text"
// 								name="name"
// 								id=""
// 								className="border outline-0 px-1"
// 							/>
// 						</div>
// 						<div className=" text-sm font-semibold ">
// 							<div>Email</div>
// 							<input
// 								type="text"
// 								name="email"
// 								id=""
// 								className="border outline-0 px-1"
// 							/>
// 						</div>
// 						<div className=" text-sm font-semibold ">
// 							<div>CreatePassword</div>
// 							<input
// 								type="password"
// 								name="password"
// 								id=""
// 								className="border outline-0 px-1"
// 							/>
// 						</div>

// 						<div className=" text-sm font-semibold ">
// 							<div>Roll</div>
// 							<select
// 								name="role"
// 								className="border w-full"
// 							>
// 								<option value="user">User</option>
// 								<option value="seller">Seller</option>
// 							</select>
// 						</div>
// 						<button className="border w-full mt-2 rounded bg-[#03747B] text-amber-50 font-semibold ">
// 							Submit
// 						</button>
// 					</form>
// 					<div className="font-semibold text-xs flex gap-2">
// 						<div>Already have an account?</div>
// 						<Link
// 							to="/login"
// 							className="text-blue-500"
// 						>
// 							Login
// 						</Link>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Registration;
import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../api/config';
import { tenantConfig } from '../config/tenantConfig';

const Registration = () => {
	const navigate = useNavigate();
	function handlesubmit(e) {
		e.preventDefault();

		const formData = new FormData(e.target);

		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			password: formData.get('password'),
			role: formData.get('role'),
		};

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
				console.log(error);
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
						<div className="text-sm font-semibold text-brand-text-dark mb-4">
							<div className="mb-1">FullName</div>
							<input
								type="text"
								name="name"
								placeholder="Enter your full name"
								className="border border-brand-border outline-0 px-4 py-3 rounded-xl w-full text-brand-text-dark bg-white"
							/>
						</div>
						<div className="text-sm font-semibold text-brand-text-dark mb-4">
							<div className="mb-1">Email</div>
							<input
								type="text"
								name="email"
								placeholder="Enter your email"
								className="border border-brand-border outline-0 px-4 py-3 rounded-xl w-full text-brand-text-dark bg-white"
							/>
						</div>
						<div className="text-sm font-semibold text-brand-text-dark mb-4">
							<div className="mb-1">CreatePassword</div>
							<input
								type="password"
								name="password"
								placeholder="Create a password"
								className="border border-brand-border outline-0 px-4 py-3 rounded-xl w-full text-brand-text-dark bg-white"
							/>
						</div>

						<div className="text-sm font-semibold text-brand-text-dark mb-4">
							<div className="mb-1">Role</div>
							<select
								name="role"
								className="border border-brand-border outline-0 px-4 py-3 rounded-xl w-full text-brand-text-dark bg-white"
							>
								<option className='rounded-xl' value="user">User</option>
								<option className='rounded-xl' value="seller">Seller</option>
							</select>
						</div>
						<button className="border w-full mt-2 py-3 rounded-2xl bg-brand-dark text-brand-text font-semibold hover:bg-[#1F4E36]">
							Create account
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
