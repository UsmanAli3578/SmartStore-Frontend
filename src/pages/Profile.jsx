// import React from 'react';
// import { useState } from 'react';
// import axios from 'axios';
// import { API_URL } from '../api/config';
// import { useEffect } from 'react';
// import Nav from '../components/Nav';
// const Profile = () => {
// 	const [userProfile, setUserProfile] = useState({});

// 	function getuserdata() {
// 		axios
// 			.get(`${API_URL}/api/auth/me`, {
// 				withCredentials: true,
// 			})
// 			.then((res) => {
// 				setUserProfile(res.data.user);
// 				console.log(res.data.user);
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 	}

// 	useEffect(() => {
// 		getuserdata();
// 	}, []);

// 	return (
// 		<div className=" font-['Zilla_Slab']">
// 			<Nav></Nav>
// 			<div className="text-center text-4xl py-5">Profile</div>
// 			<div className="flex flex-col items-center  py-2">
// 				<div className="border border-brand-border flex gap-10 px-2 py-2">
// 					<div className="px-2  text-brand-primary text-4xl h-10 rounded-4xl border">
// 						{userProfile?.name?.at(0)?.toUpperCase()}
// 					</div>
// 					<div className="text-2xl">
// 						<div>{userProfile.name}</div>
// 					</div>
// 				</div>
// 				<div className="py-6">Email: {userProfile.email}</div>
// 				<div>Role: {userProfile.role}</div>
// 				<div className="mt-5">
// 					<div>Account Created Date </div>
// 				</div>
// 				<div>
// 					{' '}
// 					{userProfile?.created_at
// 						? new Date(userProfile.created_at).toLocaleDateString()
// 						: 'N/A'}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Profile;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../api/config';
import Nav from '../components/Nav';

const Profile = () => {
	const [userProfile, setUserProfile] = useState({});
	const [isUploading, setIsUploading] = useState(false);

	function getUserData() {
		axios
			.get(`${API_URL}/api/auth/me`, {
				withCredentials: true,
			})
			.then((res) => {
				setUserProfile(res.data.user);
				console.log(res.data.user);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	useEffect(() => {
		getUserData();
	}, []);

	async function handleAvatarChange(e) {
		const file = e.target.files[0];

		if (!file) return;

		const formData = new FormData();
		formData.append('avatar', file);

		try {
			setIsUploading(true);

			const res = await axios.put(
				`${API_URL}/api/auth/avatar`,
				formData,
				{
					withCredentials: true,
				},
			);

			setUserProfile(res.data.user);
			console.log(res.data.user);
		} catch (error) {
			console.log(error);
		} finally {
			setIsUploading(false);
		}
	}

	return (
		<div className="min-h-screen bg-brand-dark text-brand-text font-['Zilla_Slab']">
			<Nav />

			<div className="max-w-3xl mx-auto px-4 py-10">
				<h1 className="text-4xl font-bold text-center mb-8">
					My Profile
				</h1>

				<div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden">
					{/* Profile Header */}
					<div className="flex flex-col items-center py-8 border-b border-brand-border">
						{/* Avatar */}
						<div className="h-24 w-24 rounded-full border-2 border-brand-primary flex items-center justify-center text-4xl font-bold text-brand-primary overflow-hidden">
							{userProfile?.avatar ? (
								<img
									src={userProfile.avatar}
									alt={userProfile.name}
									className="w-full h-full object-cover"
								/>
							) : (
								userProfile?.name?.charAt(0).toUpperCase() ||
								'U'
							)}
						</div>

						{/* Upload Avatar */}
						<label className="mt-4 cursor-pointer">
							<span className="inline-block border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-dark px-4 py-2 rounded-lg">
								{isUploading ? 'Uploading...' : 'Change Avatar'}
							</span>

							<input
								type="file"
								accept="image/*"
								onChange={handleAvatarChange}
								disabled={isUploading}
								className="hidden"
							/>
						</label>

						<h2 className="text-3xl font-bold mt-5">
							{userProfile?.name || 'User'}
						</h2>

						<p className="text-brand-text/60 mt-1">
							{userProfile?.email || 'No email'}
						</p>

						<span className="mt-3 px-4 py-1 rounded-full border border-brand-primary text-brand-primary text-sm capitalize">
							{userProfile?.role || 'user'}
						</span>
					</div>

					{/* Account Information */}
					<div className="p-6">
						<h3 className="text-xl font-bold mb-5">
							Account Information
						</h3>

						<div className="space-y-4">
							<div className="flex justify-between border-b border-brand-border pb-3">
								<span className="text-brand-text/60">Name</span>

								<span className="font-semibold">
									{userProfile?.name || 'N/A'}
								</span>
							</div>

							<div className="flex justify-between border-b border-brand-border pb-3">
								<span className="text-brand-text/60">
									Email
								</span>

								<span className="font-semibold">
									{userProfile?.email || 'N/A'}
								</span>
							</div>

							<div className="flex justify-between border-b border-brand-border pb-3">
								<span className="text-brand-text/60">Role</span>

								<span className="font-semibold capitalize">
									{userProfile?.role || 'N/A'}
								</span>
							</div>

							<div className="flex justify-between">
								<span className="text-brand-text/60">
									Account Created
								</span>

								<span className="font-semibold">
									{userProfile?.created_at
										? new Date(
												userProfile.created_at,
											).toLocaleDateString()
										: 'N/A'}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
