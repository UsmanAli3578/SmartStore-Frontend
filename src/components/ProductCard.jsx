import React from 'react';

const ProductCard = ({ item, addtocart }) => {
	return (
		<div className=" font-['Zilla_Slab'] bg-brand-card border-brand-border rounded-xl overflow-hidden border">
			<div>
				<img
					className="w-full h-56 object-cover bg-brand-dark "
					src={item.image}
					alt={item.name}
				/>
			</div>

			<div className="font-semibold text-lg p-4">
				<div> {item.name}</div>
				<div className="text-brand-primary">$ {item.price}</div>
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
