export function isEmpty(val) {
	return val.trim().length === 0;
}

export function isValidEmail(val) {
	var r = new RegExp(
		"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
	);
	return r.test(val);
}

export function isValidURI(val) {
	var r = new RegExp(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/);
	return r.test(val);
}
