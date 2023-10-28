<script>
	import meetups from "./Meetups/meetups-store.js";
	import Header from "./UI/Header.svelte";
	import MeetupGrid from "./Meetups/MeetupGrid.svelte";
	import EditMeetup from "./Meetups/EditMeetup.svelte";
	import MeetupDetail from "./Meetups/MeetupDetail.svelte";

	// let meetups = ;

	let editMode;
	let editedId;
	let page = "overview";
	let pageData = {};

	fetch(
		"https://svelte-001-411ee-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
	)
		.then((res) => {
			if (!res.ok) {
				throw new Error(
					"An error occurred fetching, please try again!"
				);
			}
			return res.json();
		})
		.then((data) => {
			const loadedMeetups= [];
			for (const key in data) {
				loadedMeetups.push({
					...data[key],
					id: key
				});
			}
			meetups.setMeetups(loadedMeetups);
		})
		.catch((err) => {
			console.log(err);
		});

	function savedMeetup(event) {
		editMode = null;
		editedId = null;
	}

	function cancelEdit() {
		editMode = null;
		editedId = null;
	}

	function showDetails(event) {
		page = "details";
		pageData.id = event.detail;
	}

	function closeDetails() {
		page = "overview";
		pageData = {};
	}

	function startEdit(event) {
		editMode = "edit";
		editedId = event.detail;
	}
</script>

<Header />

<main>
	{#if page === "overview"}
		{#if editMode === "edit"}
			<EditMeetup
				id={editedId}
				on:save={savedMeetup}
				on:cancel={cancelEdit} />
		{/if}
		<MeetupGrid
			meetups={$meetups}
			on:showdetails={showDetails}
			on:edit={startEdit}
			on:add={() => {
				editMode = "edit";
			}} />
	{:else}
		<MeetupDetail id={pageData.id} on:close={closeDetails} />
	{/if}
</main>

<style>
	main {
		margin-top: 5rem;
	}
</style>
