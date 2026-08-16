import axios from 'axios';
import React, { use } from 'react';
import { useNavigate } from 'react-router-dom';

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
			.post('http://localhost:3000/api/auth/login', data, {
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
		<div>
			<div>
				<form
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
				</form>
			</div>
		</div>
	);
};

export default Login;
