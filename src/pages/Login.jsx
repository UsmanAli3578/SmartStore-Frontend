// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import { API_URL } from '../api/config';

// const Login = () => {
// 	const navigate = useNavigate();
// 	function submithandler(e) {
// 		e.preventDefault();

// 		const formData = new FormData(e.target);

// 		const data = {
// 			email: formData.get('email'),
// 			password: formData.get('password'),
// 		};

// 		axios
// 			.post(`${API_URL}/api/auth/login`, data, {
// 				withCredentials: true,
// 			})
// 			.then((res) => {
// 				console.log(res.data);
// 				navigate('/products', { replace: true });
// 				e.target.reset();
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 	}

// 	return (
// 		<div className=" min-h-screen flex w-full ">
// 			<div className="bg-[#16211D] flex-3 ">
// 				<div className="flex items-center gap-2 p-10">
// 					<div>
// 						<span className="flex bg-[#DC9C35] h-9 w-9 items-center justify-center rounded-full bg-marigold font-display text-base font-bold text-ink">
// 							S
// 						</span>
// 					</div>
// 					<div className='font-bold text-2xl text-amber-50 font-["Zilla_Slab"]'>
// 						Smart<span className="text-[#DC9C35]">Store</span>
// 					</div>
// 				</div>
// 				<div className="p-10 text-amber-50 mt-20 ">
// 					<div className="text-[#DC9C35] tracking-wider">
// 						Peer-To-Peer Marketplace
// 					</div>
// 					<div className='font-["Zilla_Slab"] text-4xl mt-4'>
// 						List it, tag it,{' '}
// 						<span className="text-[#DC9C35]">sell it.</span>
// 					</div>
// 					<div className="leading-6 mt-4 text-[#9CA598]">
// 						One account, two ways to use it — shop what your
// 						neighbours are selling, or open your own stall in
// 						minutes.
// 					</div>
// 				</div>
// 			</div>
// 			<div className=" flex items-center justify-center flex-4 bg-[#F2ECDB]">
// 				<div className="border border-[#b5adad] p-20 bg-[#E9E1CA] rounded-2xl ">
// 					<div className="mb-5">
// 						<div className=" tracking-widest text-green-800 ">
// 							WELLCOME BACK
// 						</div>
// 						<div className="font-semibold  text-2xl">
// 							Log in to your stall
// 						</div>
// 						<div className="text-sm text-[#79776B] mt-2">
// 							Pick up right where you left off.
// 						</div>
// 					</div>
// 					{/* <form
// 						action=""
// 						onSubmit={submithandler}
// 					>
// 						<div>
// 							<label htmlFor="">Email</label>
// 							<input
// 								type="text"
// 								name="email"
// 								id=""
// 								className="border"
// 							/>
// 						</div>
// 						<div>
// 							<label htmlFor="">Password</label>
// 							<input
// 								type="password"
// 								name="password"
// 								id=""
// 								className="border"
// 							/>
// 						</div>

// 						<button>Submit</button>
// 					</form> */}

// 					<form
// 						action=""
// 						onSubmit={submithandler}
// 					>
// 						<div className=" text-sm font-semibold ">
// 							<div>Email</div>
// 							<input
// 								type="text"
// 								name="email"
// 								id=""
// 								className="border outline-0 px-1 py-2 rounded w-70"
// 							/>
// 						</div>
// 						<div className=" text-sm font-semibold ">
// 							<div>Password</div>
// 							<input
// 								type="password"
// 								name="password"
// 								id=""
// 								className="border outline-0 px-1 py-2 rounded w-70"
// 							/>
// 						</div>

// 						<button className="border w-full mt-2 py-2 rounded-2xl bg-[#084a1c] text-amber-50 font-semibold hover:bg-[#1F4E36] ">
// 							Login
// 						</button>
// 					</form>

// 					<div className="font-semibold text-sm flex gap-2  justify-center ">
// 						<div className="text-[#6E7269]">New to SmartStore?</div>
// 						<Link
// 							to="/"
// 							className="text-blue-500"
// 						>
// 							Create an account
// 						</Link>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Login;

import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../api/config';
import { tenantConfig } from '../config/tenantConfig';

const Login = () => {
	const navigate = useNavigate();
	function submithandler(e) {
		e.preventDefault();

		const formData = new FormData(e.target);

		const data = {
			email: formData.get('email'),
			password: formData.get('password'),
		};

		axios
			.post(`${API_URL}/api/auth/login`, data, {
				withCredentials: true,
			})
			.then((res) => {
				console.log(res.data);
				navigate('/products', { replace: true });
				e.target.reset();
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<div className="min-h-screen flex flex-col lg:flex-row w-full">
			{/* Left branding panel */}
			<div className="bg-brand-dark flex-3">
				<div className="flex items-center gap-2 p-6 sm:p-10">
					<span className="flex border border-brand-primary text-brand-primary text-2xl h-12 w-12 items-center justify-center rounded-full font-bold font-['Zilla_Slab']">
						{tenantConfig.logoText}
					</span>
					<div>
						<div className='font-bold text-2xl text-brand-text font-["Zilla_Slab"]'>
							{tenantConfig.brandName}
						</div>
						<div className="text-brand-primary text-xs tracking-widest">
							Peer-To-Peer Marketplace
						</div>
					</div>
				</div>

				<div className="p-6 sm:p-10 text-brand-text mt-6 lg:mt-20">
					<div className='font-["Zilla_Slab"] text-4xl sm:text-5xl'>
						Welcome back.
					</div>
					<div className="w-16 h-1 bg-brand-primary my-4"></div>
					<div className="leading-6 text-brand-muted">
						{tenantConfig.description}
					</div>

					<div className="mt-10 border border-brand-border rounded-2xl p-6 bg-brand-card max-w-md">
						<div className="text-brand-primary text-3xl leading-none">
							"
						</div>
						<div className="text-brand-text">
							{tenantConfig.brandName} made it so easy to find
							exactly what I needed — right in my neighbourhood.
						</div>
						<div className="mt-4 text-sm">
							<div className="font-semibold text-brand-text">
								JESSICA L.
							</div>
							<div className="text-brand-primary text-xs">
								{tenantConfig.brandName} member since 2022
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Right form panel */}
			<div className="flex items-center justify-center flex-4 bg-[#F2ECDB] py-10">
				<div className="w-full max-w-md lg:max-w-lg border border-[#b5adad] p-6 sm:p-12 lg:p-16 bg-[#E9E1CA] rounded-2xl mx-4">
					<div className="mb-6">
						<div className="font-semibold text-2xl text-brand-text-dark">
							Log in to your account
						</div>
					</div>

					<form onSubmit={submithandler}>
						<div className="text-sm font-semibold text-brand-text-dark mb-4">
							<div className="mb-1">Email</div>
							<input
								type="text"
								name="email"
								placeholder="name@example.com"
								className="border border-brand-border outline-0 px-4 py-3 rounded-xl w-full text-brand-text-dark bg-white"
							/>
						</div>

						<div className="text-sm font-semibold text-brand-text-dark mb-2">
							<div className="mb-1">Password</div>
							<input
								type="password"
								name="password"
								placeholder="Enter your password"
								className="border border-brand-border outline-0 px-4 py-3 rounded-xl w-full text-brand-text-dark bg-white"
							/>
						</div>

						<div className="flex items-center justify-between text-sm mb-4 mt-2">
							<label className="flex items-center gap-2 text-brand-text-dark">
								<input type="checkbox" />
								Remember me
							</label>
							<button
								type="button"
								className="text-brand-primary hover:underline"
							>
								Forgot password?
							</button>
						</div>

						<button className="border w-full py-3 rounded cursor-pointer bg-brand-primary text-brand-dark border-none font-semibold ">
							Log in
						</button>
					</form>

					<div className="flex items-center gap-3 my-5">
						<div className="flex-1 h-px bg-[#b5adad]"></div>
						<div className="text-xs text-[#79776B]">or</div>
						<div className="flex-1 h-px bg-[#b5adad]"></div>
					</div>

					<button
						type="button"
						className="border border-[#b5adad] w-full py-3 rounded-xl bg-white text-brand-text-dark font-medium"
					>
						Continue with Google
					</button>

					<div className="font-semibold text-sm flex gap-2 justify-center mt-5">
						<div className="text-[#6E7269]">New here?</div>
						<Link
							to="/"
							className="text-brand-primary hover:underline"
						>
							Create an account
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
