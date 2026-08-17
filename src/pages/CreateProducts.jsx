import React from 'react';
import axios from 'axios';
import { API_URL } from '../api/config';
const CreateProducts = () => {
	function handlesubmit(e) {
		e.preventDefault();

		const formData = new FormData(e.target);

		// const data = {
		// 	name: formData.get('name'),
		// 	description: formData.get('description'),
		// 	price: formData.get('price'),
		// 	file: formData.get('file'),
		// };

		axios
			.post(
				`${API_URL}/api/product/productCreated`,
				formData,
				{
					withCredentials: true,
				},
			)
			.then((res) => {
				console.log(res.data);
				e.target.reset();
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<div>
			<div>usman</div>
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
					<label htmlFor="">description</label>
					<input
						type="text"
						name="description"
						id=""
						className="border"
					/>
				</div>

				<div>
					<label htmlFor="">price</label>
					<input
						type="number"
						name="price"
						id=""
						className="border"
					/>
				</div>

				<div>
					<input
						type="file"
						name="image"
						id=""
					/>
				</div>

				<button>submit</button>
			</form>
		</div>
	);
};

export default CreateProducts;
