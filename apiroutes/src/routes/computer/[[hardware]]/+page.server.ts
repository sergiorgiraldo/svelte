export function load({ params, url }) {
	const what = params.hardware;
	const location = url.href;

	return {
		w: what,
		u: location
	};
}
