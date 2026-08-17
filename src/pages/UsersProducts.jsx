import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../api/config';
const UsersProducts = () => {
	const [render, setRender] = useState(0);
	const navigate = useNavigate();
	const [userProducts, setUserProducts] = useState([]);
	function getuserproducts() {
		axios
			.get(`${API_URL}/api/product/myproducts`, {
				withCredentials: true,
			})
			.then((res) => {
				console.log(res.data.products);
				setUserProducts(res.data.products);
			});
	}
	function deleted(item) {
		axios
			.delete(
				`${API_URL}/api/product/deleteproduct/${item.id}`,
				{
					withCredentials: true,
				},
			)
			.then(() => {
				setRender((prev) => prev + 1);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function edit(item) {
		navigate(`/edit/${item.id}`);
	}

	useEffect(() => {
		getuserproducts();
	}, [render]);

	return (
		<div>
			<div>
				{userProducts.map((item) => {
					return (
						<div key={item.id}>
							<div>
								<img
									src={item.image}
									alt=""
								/>
							</div>
							<div>Name {item.name}</div>
							<div>Price {item.price}</div>
							<button
								onClick={() => {
									edit(item);
								}}
							>
								Edit
							</button>
							<button
								onClick={() => {
									deleted(item);
								}}
							>
								delete
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default UsersProducts;
