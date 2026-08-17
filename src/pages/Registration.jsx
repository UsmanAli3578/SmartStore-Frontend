import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../api/config';

const Registration = () => {
	const navigate = useNavigate()
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
			.post(`${API_URL}/api/auth/register`, data)
			.then((res) => {
				console.log(res.data);
				e.target.reset();
				navigate('/products')
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<div>
			<Link to="/login">login</Link>

			<form
				action=""
				onSubmit={handlesubmit}
			>
				<div>
					<label htmlFor="">name</label>
					<input
						type="text"
						name="name"
						id=""
						className="border"
					/>
				</div>
				<div>
					<label htmlFor="">email</label>
					<input
						type="text"
						name="email"
						id=""
						className="border"
					/>
				</div>
				<div>
					<label htmlFor="">password</label>
					<input
						type="password"
						name="password"
						id=""
						className="border"
					/>
				</div>

				<div>
					<label>Role</label>
					<select name="role">
						<option value="user">User</option>
						<option value="seller">Seller</option>
					</select>
				</div>
				<button>submit</button>
			</form>
		</div>
	);
};

export default Registration;
