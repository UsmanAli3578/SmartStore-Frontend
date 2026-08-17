import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../api/config';
const Products = () => {
	const navigate = useNavigate();
	const [allProducts, setAllProducts] = useState([]);

	function getProducts() {
		axios
			.get(`${API_URL}/api/product/allproducts`)
			.then((res) => {
				console.log(res.data.products);
				setAllProducts(res.data.products);
			});
	}

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div>
			<div>
				<button
					className="border"
					onClick={() => {
						navigate('/userproducts');
					}}
				>
					My profile
				</button>
			</div>
			<div>
				<button
					className="border m-2"
					onClick={() => {
						navigate('/createproducts');
					}}
				>
					create product
				</button>
			</div>
			{allProducts.map((item) => {
				return (
					<div>
						<div>{item.name}</div>
						<div>
							<img
								src={item.image}
								alt=""
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Products;
