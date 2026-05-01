export const NavBar = () => {
	const user = useSelector((state) => state.auth.user);

	return (
		<nav className="p-4 text-white bg-gray-800">
			<div className="flex items-center justify-between max-w-4xl mx-auto">
				<Link to="/" className="flex items-center">
					<img src={logo} alt="Logo" className="h-8 mr-2" />
					<span className="font-bold">QuickNotes Pro</span>
				</Link>

				<ul className="flex items-center space-x-4">
					{user ? (
						<>
							<p className="px-3 py-2">{user}</p>
							<li>
								<Link to="/logout">Logout</Link>
							</li>
						</>
					) : (
						<>
							<li><Link to="/login">Login</Link></li>
							<li><Link to="/signup">Signup</Link></li>
						</>
					)}
				</ul>
			</div>
		</nav>
	);
};
