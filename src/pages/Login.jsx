import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../api/config';

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
				navigate('/products');
				e.target.reset();
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<div className=" min-h-screen flex w-full ">
			<div className="bg-[#16211D] flex-3 ">
				<div className="flex items-center gap-2 p-10">
					<div>
						<span class="flex bg-[#DC9C35] h-9 w-9 items-center justify-center rounded-full bg-marigold font-display text-base font-bold text-ink">
							S
						</span>
					</div>
					<div className='font-bold text-2xl text-amber-50 font-["Zilla_Slab"]'>
						Smart<span className="text-[#DC9C35]">Store</span>
					</div>
				</div>
				<div className="p-10 text-amber-50 mt-20 ">
					<div className="text-[#DC9C35] tracking-wider">
						Peer-To-Peer Marketplace
					</div>
					<div className='font-["Zilla_Slab"] text-4xl mt-4'>
						List it, tag it,{' '}
						<span className="text-[#DC9C35]">sell it.</span>
					</div>
					<div className="leading-6 mt-4 text-[#9CA598]">
						One account, two ways to use it — shop what your
						neighbours are selling, or open your own stall in
						minutes.
					</div>
				</div>
			</div>
			<div className=" flex items-center justify-center flex-4 bg-[#F2ECDB]">
				<div className="border border-[#b5adad] p-20 bg-[#E9E1CA] rounded-2xl ">
					<div className="mb-5">
						<div className=" tracking-widest text-green-800 ">
							WELLCOME BACK
						</div>
						<div className="font-semibold  text-2xl">
							Log in to your stall
						</div>
						<div className="text-sm text-[#79776B] mt-2">
							Pick up right where you left off.
						</div>
					</div>
					{/* <form
						action=""
						onSubmit={submithandler}
					>
						<div>
							<label htmlFor="">Email</label>
							<input
								type="text"
								name="email"
								id=""
								className="border"
							/>
						</div>
						<div>
							<label htmlFor="">Password</label>
							<input
								type="password"
								name="password"
								id=""
								className="border"
							/>
						</div>

						<button>Submit</button>
					</form> */}

					<form
						action=""
						onSubmit={submithandler}
					>
						<div className=" text-sm font-semibold ">
							<div>Email</div>
							<input
								type="text"
								name="email"
								id=""
								className="border outline-0 px-1 py-2 rounded w-70"
							/>
						</div>
						<div className=" text-sm font-semibold ">
							<div>Password</div>
							<input
								type="password"
								name="password"
								id=""
								className="border outline-0 px-1 py-2 rounded w-70"
							/>
						</div>

						<button className="border w-full mt-2 py-2 rounded-2xl bg-[#084a1c] text-amber-50 font-semibold hover:bg-[#1F4E36] ">
							Login
						</button>
					</form>

					<div className="font-semibold text-sm flex gap-2  justify-center ">
						<div className='text-[#6E7269]'>New to SmartStore?</div>
						<Link
							to="/"
							className="text-blue-500"
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
