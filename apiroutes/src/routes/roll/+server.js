import { json } from "@sveltejs/kit";

export async function GET() {
	const number = Math.floor(Math.random() * 6) + 1;

	return json("GET::" + number.toString());
}

export async function POST({ request}) {	
	const { description } = await request.json();

	const number = Math.floor(Math.random() * 6) + 1;

	return json("POST::" + number.toString() + " RECEIVED::" + description);
}
