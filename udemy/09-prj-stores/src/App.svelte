<script>
	import meetups from "./Meetups/meetups-store.js";
	import Header from "./UI/Header.svelte";
	import MeetupGrid from "./Meetups/MeetupGrid.svelte";

	import EditMeetup from "./Meetups/EditMeetup.svelte";
	import MeetupDetail from "./Meetups/MeetupDetail.svelte";

	let loadedMeetups = meetups;

	let editMode;
	let editedId;
	let page = "overview";
	let pageData = {};

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
			meetups={$loadedMeetups}
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
