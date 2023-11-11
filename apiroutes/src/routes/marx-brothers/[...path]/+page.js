import { error } from '@sveltejs/kit';
/** @type {import('./$types').PageLoad} */export function load(event) {	throw error(404, 'This brother was Not Found');}