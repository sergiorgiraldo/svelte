// src/stores/user.js
import { writable } from "svelte/store";

export const user = writable();

export const customUser = {
	add: (u) => {
        user.set(u);
	}
};
