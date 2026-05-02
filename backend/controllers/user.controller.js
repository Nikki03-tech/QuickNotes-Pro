const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

/* [POST] Signup Credentials */
const signup = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		// check if user already exists
		const existingUser = await User.findOne({ email });

		if (existingUser) {
			return res.status(400).json({
				message: "User already exists. Please login.",
			});
		}

		// hash password
		const hashedPassword = bcrypt.hashSync(password, 8);

		// create user
		await User.create({
			email,
			password: hashedPassword,
		});

		// auto login after signup
		req.body = { email, password };
		await login(req, res, next);
	} catch (err) {
		next(err);
	}
};

/* [POST] Login Credentials */
const login = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email });

		if (!user) {
			return next(
				Object.assign(new Error("Authentication failed"), {
					statusCode: 401,
				})
			);
		}

		const passwordMatch = bcrypt.compareSync(
			password,
			user.password
		);

		if (!passwordMatch) {
			return next(
				Object.assign(new Error("Authentication failed"), {
					statusCode: 401,
				})
			);
		}

		const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;

		const token = jwt.sign(
			{ sub: user._id, exp },
			process.env.SECRET
		);

		res.cookie("Authorization", token, {
	expires: new Date(exp),
	httpOnly: true,
	sameSite: "none",
	secure: true,
});

		res.status(200).json({
			email: user.email,
		});
	} catch (err) {
		next(err);
	}
};

/* [GET] Logout */
const logout = (req, res, next) => {
	try {
		res.cookie("Authorization", "", {
			expires: new Date(),
		});
		res.sendStatus(200);
	} catch (err) {
		next(err);
	}
};

/* [GET] Check Auth */
const checkAuth = (req, res, next) => {
	try {
		res.status(200).json({
			email: req.user.email,
		});
	} catch (err) {
		next(err);
	}
};

module.exports = {
	signup,
	login,
	logout,
	checkAuth,
};
