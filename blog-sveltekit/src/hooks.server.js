import { redirect } from '@sveltejs/kit';

// define the routes of we want to be possible to access without auth
const public_paths = ['/signup', '/signin', '/about', '/blog', '/contact', '/api', '/users'];

// function to verify if the request path is inside the public_paths array
function isPathAllowed(path) {
    return public_paths.some(
		(allowedPath) => path === allowedPath || path.startsWith(allowedPath + '/')
	);
}

export const handle = async ({ event, resolve }) => {
	let user = null;
    
	if (event.cookies.get('user') != undefined && event.cookies.get('user') != null) {
        user = JSON.parse(event.cookies.get('user'));
        event.locals.user = user;
	}
	const url = new URL(event.request.url);
    
	if (!user && !isPathAllowed(url.pathname)) {
        throw redirect(302, '/signin');
	}
    
	if (user) {
		if (url.pathname == '/signup' || url.pathname == '/signin') {
            throw redirect(302, '/dashboard');
		}
	}
    
	const response = await resolve(event);
    
	return response;
};
