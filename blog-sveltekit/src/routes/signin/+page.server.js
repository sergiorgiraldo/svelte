import { user } from '$lib/store/user.js';
import { redirect } from '@sveltejs/kit';

export const prerender = false;

export const actions = {
	default: async ({ cookies, request, fetch, locals }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
			return {
				status: 400,
				body: {
					success: false
				}
			};
		}
		if (email == locals.email && password == locals.password) {
			throw redirect(302, '/dashboard');
		} 
        else {
			throw redirect(301, '/signin');
        }
	}
};
