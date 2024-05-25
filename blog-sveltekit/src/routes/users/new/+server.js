import { customUser } from '$lib/store/user.js';
import { json } from '@sveltejs/kit';

export async function POST(event) {
	try {
        let body = await event.request.json();
        let user = body.user;
		customUser.add(user);

		return json({ "user": user });
	} 
    catch (error) {
		console.error('Error:', error);
		return json({ error: 'An error occurred' }, { status: 500 });
	}
}
