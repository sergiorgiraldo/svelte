export const actions = {
	default: async ({ request }) => {
        let vls:string = "";
		const formData = await request.formData();
		formData.forEach((value, key) => {
			vls += key + "-" + value + "**";
		});
        console.log(vls);
	}
};
