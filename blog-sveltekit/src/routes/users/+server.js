import { user } from '$lib/store/user.js';
import { json } from '@sveltejs/kit';

export async function GET(event) {
	// TESTING
	const companyDetails = {
		name: 'My Company',
		employees: [{ name: 'John Doe', salary: 45000 }]
	};

	return json(companyDetails);
}

export async function POST(event) {
    console.log('POST');
	try {
		const { email, password, name } = await event.request.json();

        console.log(email, password, name);

		user.update((currentUser) => ({
			...currentUser,
			email,
			name,
			password
		}));

		const updatedUser = get(user);

		return json({ user: updatedUser });
	} 
    catch (error) {
		console.error('Error:', error);
		return json({ error: 'An error occurred' }, { status: 500 });
	}
}
