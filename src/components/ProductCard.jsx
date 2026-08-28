import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item, addtocart }) => {
	const navigate = useNavigate();
	return (
		<div
			onClick={() => {
				navigate(`/productdetail/${item.id}`);
			}}
			className=" font-['Zilla_Slab'] bg-brand-card border-brand-border   hover:border-brand-primary  rounded-xl overflow-hidden border-2 transition-transform duration-300 hover:scale-105"
		>
			<div>
				<img
					className="w-full h-60 object-cover	 bg-brand-dark "
					src={item.image}
					alt={item.name}
				/>
			</div>

			{/* <div className="h-64 w-full bg-blackr">
				<img
					src={item.image}
					alt={item.name}
					className=" object-cover "
				/>
			</div> */}

			{/* <div className="font-semibold text-lg p-4">
					<div> {item.name}</div>
					<div className="text-brand-primary">$ {item.price}</div>
				</div> */}

			<div className="font-semibold text-lg p-4">
				<div>{item.name}</div>
				<p className="mt-2 text-sm text-brand-text/70 line-clamp-2 break-all">
					{item.description}
				</p>

				<div className="text-brand-primary">$ {item.price}</div>
				<div className="flex items-center gap-2 mt-3">
					{/* <div className="h-8 w-8 rounded-full border border-brand-primary flex items-center justify-center text-brand-primary font-bold">
						{item.seller_name?.at(0)?.toUpperCase() || 'U'}
					</div> */}

					<div className="h-8 w-8 rounded-full border border-brand-primary overflow-hidden flex items-center justify-center text-brand-primary font-bold">
						{item.seller_avatar ? (
							<img
								src={item.seller_avatar}
								alt={item.seller_name}
								className="w-full h-full object-cover"
							/>
						) : (
							item.seller_name?.at(0)?.toUpperCase() || 'U'
						)}
					</div>

					<div className="flex flex-col">
						<span className="text-sm text-brand-text">
							{item.seller_name || 'Unknown Seller'}
						</span>

						<span className="text-xs text-brand-text/60">
							Seller
						</span>
					</div>
				</div>
			</div>

			<div className="px-4 pb-4">
				<button
					onClick={() => {
						addtocart(item);
					}}
					className="w-full bg-brand-primary hover:bg-brand-hover text-brand-text-dark font-semibold py-2 rounded-lg"
				>
					Addtocart
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
