// import React from 'react';
// import Products from './pages/Products';
// import { Routes, Route } from 'react-router-dom';
// import Registration from './pages/Registration';
// import Login from './pages/Login';
// import CreateProducts from './pages/CreateProducts';
// import UsersProducts from './pages/UsersProducts';
// import Edit from './pages/Edit';
// import Cart from './pages/Cart';
// const App = () => {

// 	return (
// 		<Routes>
// 			<Route
// 				path="/"
// 				element={<Registration />}
// 			/>
// 			<Route
// 				path="/login"
// 				element={<Login />}
// 			/>
// 			<Route
// 				path="/products"
// 				element={<Products />}
// 			/>
// 			<Route
// 				path="/createproducts"
// 				element={<CreateProducts />}
// 			/>
// 			<Route
// 				path="/userproducts"
// 				element={<UsersProducts />}
// 			/>
// 			<Route
// 				path="/edit/:id"
// 				element={<Edit />}
// 			/>
// 			<Route
// 				path="/cart"
// 				element={<Cart />}
// 			/>
// 		</Routes>
// 	);
// };

// export default App;

// import React from 'react';
// import Products from './pages/Products';
// import { Routes, Route } from 'react-router-dom';
// import Registration from './pages/Registration';
// import Login from './pages/Login';
// import CreateProducts from './pages/CreateProducts';
// import UsersProducts from './pages/UsersProducts';
// import Edit from './pages/Edit';
// import Cart from './pages/Cart';
// import ProtectedRoute from './components/ProtectedRoute';

// const App = () => {
// 	return (
// 		<Routes>
// 			<Route
// 				path="/"
// 				element={<Registration />}
// 			/>

// 			<Route
// 				path="/login"
// 				element={<Login />}
// 			/>

// 			<Route element={<ProtectedRoute />}>
// 				<Route
// 					path="/products"
// 					element={<Products />}
// 				/>

// 				<Route
// 					path="/createproducts"
// 					element={<CreateProducts />}
// 				/>

// 				<Route
// 					path="/userproducts"
// 					element={<UsersProducts />}
// 				/>

// 				<Route
// 					path="/edit/:id"
// 					element={<Edit />}
// 				/>

// 				<Route
// 					path="/cart"
// 					element={<Cart />}
// 				/>
// 			</Route>
// 		</Routes>
// 	);
// };

// export default App;

import React from 'react';
import Products from './pages/Products';
import { Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import Login from './pages/Login';
import CreateProducts from './pages/CreateProducts';
import UsersProducts from './pages/UsersProducts';
import Edit from './pages/Edit';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';

const App = () => {
	return (
		<Routes>
			{/* Public Routes */}
			<Route element={<PublicRoute />}>
				<Route
					path="/"
					element={<Registration />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
			</Route>

			{/* Protected Routes */}
			<Route element={<ProtectedRoute />}>
				<Route
					path="/products"
					element={<Products />}
				/>
				<Route
					path="/createproducts"
					element={<CreateProducts />}
				/>
				<Route
					path="/userproducts"
					element={<UsersProducts />}
				/>
				<Route
					path="/edit/:id"
					element={<Edit />}
				/>
				<Route
					path="/cart"
					element={<Cart />}
				/>
			</Route>
			<Route
				path="*"
				element={<NotFound />}
			/>
		</Routes>
	);
};

export default App;
