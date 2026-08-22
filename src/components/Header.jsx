import React, { useState } from 'react';
import { tenantConfig } from '../config/tenantConfig';

export default function Header({ cartCount = 3 }) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<header className="bg-brand-card border-b border-brand-border sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* 1. Dynamic Logo & Brand Name */}
					<a
						href="/"
						className="flex items-center gap-3"
					>
						{tenantConfig.logoUrl ? (
							<img
								src={tenantConfig.logoUrl}
								alt={tenantConfig.brandName}
								className="h-8 w-auto"
							/>
						) : (
							<div className="w-9 h-9 border-2 border-brand-primary flex items-center justify-center font-bold text-brand-primary text-lg rounded">
								{tenantConfig.logoText}
							</div>
						)}
						<span className="text-xl font-bold text-brand-text tracking-wide">
							{tenantConfig.brandName}
						</span>
					</a>

					{/* 2. Desktop Navigation Links */}
					<nav className="hidden md:flex items-center gap-6">
						<a
							href="/products"
							className="text-brand-muted hover:text-brand-primary text-sm font-medium transition-colors"
						>
							Products
						</a>
						<a
							href="/categories"
							className="text-brand-muted hover:text-brand-primary text-sm font-medium transition-colors"
						>
							Categories
						</a>
						<a
							href="/deals"
							className="text-brand-muted hover:text-brand-primary text-sm font-medium transition-colors"
						>
							Deals
						</a>
						<a
							href="/sell"
							className="text-brand-muted hover:text-brand-primary text-sm font-medium transition-colors"
						>
							Sell on Store
						</a>
					</nav>

					{/* 3. Cart & Mobile Menu Toggle */}
					<div className="flex items-center gap-4">
						{/* Cart Icon */}
						<a
							href="/cart"
							className="relative p-2 text-brand-text hover:text-brand-primary transition-colors"
						>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1.5}
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
								/>
							</svg>
							{cartCount > 0 && (
								<span className="absolute -top-1 -right-1 bg-brand-primary text-brand-textDark font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center">
									{cartCount}
								</span>
							)}
						</a>

						{/* Hamburger Icon for Mobile */}
						<button
							onClick={() =>
								setIsMobileMenuOpen(!isMobileMenuOpen)
							}
							className="md:hidden p-2 text-brand-text hover:text-brand-primary"
						>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d={
										isMobileMenuOpen
											? 'M6 18L18 6M6 6l12 12'
											: 'M4 6h16M4 12h16M4 18h16'
									}
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* 4. Mobile Dropdown Menu */}
			{isMobileMenuOpen && (
				<div className="md:hidden bg-brand-card border-t border-brand-border px-4 pt-3 pb-4 space-y-2">
					<a
						href="/products"
						className="block text-brand-text hover:text-brand-primary py-2 text-base font-medium"
					>
						Products
					</a>
					<a
						href="/categories"
						className="block text-brand-text hover:text-brand-primary py-2 text-base font-medium"
					>
						Categories
					</a>
					<a
						href="/deals"
						className="block text-brand-text hover:text-brand-primary py-2 text-base font-medium"
					>
						Deals
					</a>
					<a
						href="/sell"
						className="block text-brand-text hover:text-brand-primary py-2 text-base font-medium"
					>
						Sell on Store
					</a>
				</div>
			)}
		</header>
	);
}
