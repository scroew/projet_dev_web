<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<!-- et être fermés par la balise 
<div class="app">
	<Header />

	<main>
		<slot />
	</main>
	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>
-->

<body>		
	<div class="lignes">
		<div class="l1"></div>
		<div class="l2"></div>
	</div>

		<div class="container-first">

			<h1><span>You </span><span>need </span><span>some </span><span>nae </span></h1>
			<div class="container-btns"> 
				<button class="btn-first b1"></button>
				<button class="btn-first b2">Contact</button>
			</div>
		</div>

	<img src="ressources/canadian-maple-leaf-brands.svg" alt="" class="logo">

	<ul class="medias">
	   <li class="bulle"><img src="data:image/png;base64,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" alt="" class="logo-medias"></li>
		 <li class="bulle"><img src="ressources/insta.svg" alt="" class="logo-medias"></li>
		 <li class="bulle"><img src="ressources/yt.svg" alt="" class="logo-medias"></li>
		 <li class="bulle"><img src="ressources/fb.svg" alt="" class="logo-medias"></li>
	</ul>

</body>

<style>

</style>

