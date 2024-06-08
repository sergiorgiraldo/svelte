import { redirect } from "@sveltejs/kit";
import { find } from "../store";

export const prerender = false;

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get("email");
		const password = data.get("password");
		const usr = find({ email: email });

		if (
			typeof email !== "string" ||
			typeof password !== "string" ||
			!email ||
			!password
		) {
			return {
				status: 400,
				body: {
					success: false
				}
			};
		}

		if (usr) {
			if (email == usr.email && password == usr.password) {
				cookies.set("user", usr, {
					path: "/",
					maxAge: 60 * 60 * 24
				});

				throw redirect(302, "/dashboard");
			}
		} else {
			throw redirect(301, "/signin");
		}
	}
};
