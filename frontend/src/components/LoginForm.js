import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, resetLoginForm, setLoginForm } from "../stores/authReducer";

const LoginForm = () => {
	const loginForm = useSelector((state) => state.auth.loginForm);
	const loadingLogin = useSelector((state) => state.auth.loadingLogin);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const updateLoginForm = (e) => {
		const { name, value } = e.target;
		dispatch(
			setLoginForm({
				...loginForm,
				[name]: value,
			})
		);
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		dispatch(login(loginForm)).then(() => {
			dispatch(resetLoginForm());
			navigate("/");
		});
	};

	return (
		<div className="flex items-center justify-center min-h-[70vh]">
			<form
				onSubmit={handleLogin}
				className="w-full max-w-md px-8 pt-6 pb-8 bg-white/90 backdrop-blur-md rounded-xl shadow-lg"
			>
				<h2 className="mb-6 text-xl font-bold text-center text-gray-800">
					Login to QuickNotes
				</h2>

				<div className="mb-4">
					<label className="block mb-2 text-sm font-bold text-gray-700">
						Email
					</label>
					<input
						className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
						onChange={updateLoginForm}
						value={loginForm.email}
						type="email"
						name="email"
						required
						disabled={loadingLogin}
					/>
				</div>

				<div className="mb-6">
					<label className="block mb-2 text-sm font-bold text-gray-700">
						Password
					</label>
					<input
						className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
						onChange={updateLoginForm}
						value={loginForm.password}
						type="password"
						name="password"
						required
						disabled={loadingLogin}
					/>
				</div>

				<button
					className="w-full py-2 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-600 transition"
					type="submit"
					disabled={loadingLogin}
				>
					Login
				</button>
			</form>
		</div>
	);
};

export default LoginForm;