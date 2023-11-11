export const actions = {
	default: async ({ request }) => {
        let vls: { k: string, v: string }[] = [];
		const formData:FormData = await request.formData();
		formData.forEach((value:FormDataEntryValue, key:string) => {
			vls.push({
				k: key,
				v: value.toString()
			});
		});
        return vls;
	}
};
