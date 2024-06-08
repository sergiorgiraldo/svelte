import { create } from '../store/'
import { redirect } from '@sveltejs/kit';

export const prerender = false;

export const actions = {
	default: async ({ cookies, request, fetch }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
		const name = data.get('name');

		if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
			return {
				status: 400,
				body: {
					success: false
				}
			};
		}

        const user = create({ name, email, password });

		if (user) {
            cookies.set('user', user, { 
                path: '/',
                maxAge: 60 * 60 * 24 }
            );

			throw redirect(302, '/dashboard');
		} else {
			const { errors } = await response.json();
			return {
				status: 400,
				body: {
					success: false,
					errors
				}
			};
		}
	}
};
