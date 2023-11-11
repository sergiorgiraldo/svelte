export function load({ params }) {
	const what = params.hardware;
	const url = "anything you want to pass";

	return {
		w: what,
		u: url
	};
}
