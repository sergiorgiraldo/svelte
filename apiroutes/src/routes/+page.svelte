<script lang="ts">
	let nb: string = "";

	async function getRoll() {
		const response = await fetch("/roll");
		nb = await response.json();
	}

	async function postRoll() {
		const response = await fetch("/roll", {
			method: "POST",
			body: JSON.stringify({ description: "SENT TO ROLL" }),
			headers: {
				"Content-Type": "application/json"
			}
		});
		nb = await response.json();
	}
</script>

<h1>Welcome to SvelteKit Routing</h1>
<p>
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<hr />

<h2>Form</h2>
<ul>
	<li><a href="/login">LOGIN FORM</a>&nbsp;&nbsp;/login</li>
</ul>
<hr />

<h2>Company</h2>
<ul>
	<li><a href="/company/about">ABOUT</a>&nbsp;&nbsp;/company/about</li>
	<li><a href="/company/ri">INVESTORS</a>&nbsp;&nbsp;/company/ri</li>
	<li><a href="/company/dashboard">DASHBOARD</a>&nbsp;&nbsp;/company/dashboard</li>
</ul>
<hr />

<h2>Computer</h2>
<ul>
	<li><a href="/computer/mouse">MOUSE</a>&nbsp;&nbsp;/computer/mouse</li>
	<li><a href="/computer/screen">SCREEN</a>&nbsp;&nbsp;/computer/screen</li>
	<li><a href="/computer">DEFAULT</a>&nbsp;&nbsp;/computer</li>
	<li><a href="/computer/mouse/home">MOUSE HOME</a>&nbsp;&nbsp;/computer/mouse/home</li>
	<li><a href="/computer/home">DEFAULT HOME</a>&nbsp;&nbsp;/computer/home</li>
</ul>
<hr />

<h2>Language courses</h2>
<ul>
	<li><a href="/courses/lang/english">ENGLISH</a>&nbsp;&nbsp;/courses/lang/english</li>
	<li><a href="/courses/lang/dutch">DUTCH</a>&nbsp;&nbsp;/courses/lang/dutch</li>
</ul>
<hr />

<h2>Roll the dice</h2>
<ul>
	<li><button on:click={getRoll}>Roll the dice GET</button>&nbsp;&nbsp; GET /roll</li>
	<li><button on:click={postRoll}>Roll the dice POST</button>&nbsp;&nbsp; POST /roll</li>
	<li>RESULT:: <b>{nb}</b></li>
</ul>
<hr />

<h2>Archives</h2>
<ul>
	<li><a href="/archive/42">42</a>&nbsp;&nbsp;/archive/42</li>
	<li><a href="/archive/foomamacita">MAMACITA</a>&nbsp;&nbsp;/archive/foomamacita</li>
	<li><a href="/archive/bar">BAR (404)</a>&nbsp;&nbsp;/archive/bar</li>
</ul>
<hr />

<h2>Sports courses</h2>
<ul>
	<li><a href="/courses/sports/cricket">CRICKET</a>/&nbsp;&nbsp;courses/sports/cricket</li>
	<li><a href="/courses/sports/squash">SQUASH</a>&nbsp;&nbsp;/courses/sports/squash</li>
</ul>
<hr />

<h2>Marx brothers</h2>
<ul>
	<li><a href="/marx-brothers/chico">CHICO</a>&nbsp;&nbsp;/marx-brothers/chico</li>
	<li><a href="/marx-brothers/groucho">GROUCHO</a>&nbsp;&nbsp;/marx-brothers/groucho</li>
	<li><a href="/marx-brothers/harpo">HARPO</a>&nbsp;&nbsp;/marx-brothers/harpo</li>
	<li><a href="/marx-brothers/karl">KARL (404)</a>&nbsp;&nbsp;/marx-brothers/karl</li>
</ul>
<hr />
