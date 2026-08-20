import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, Outlet } from 'react-router-dom';
import { API_URL } from '../api/config';

const PublicRoute = () => {
	const [loading, setLoading] = useState(true);
	const [authenticated, setAuthenticated] = useState(false);

	useEffect(() => {
		axios
			.get(`${API_URL}/api/auth/me`, {
				withCredentials: true,
			})
			.then(() => {
				setAuthenticated(true);
			})
			.catch(() => {
				setAuthenticated(false);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (authenticated) {
		return (
			<Navigate
				to="/products"
				replace
			/>
		);
	}

	return <Outlet />;
};

export default PublicRoute;
