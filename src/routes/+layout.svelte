<script lang="ts">
	import { onMount } from 'svelte';

	import '../app.css';
	import IconLinks from '../components/IconLinks/IconLinks.svelte';
	import Navbar from '../components/Global/Navbar/Navbar.svelte';
	import Footer from '../components/Footer/Footer.svelte';

	import AOS from 'aos';
	import 'aos/dist/aos.css';

	onMount(() => {
		AOS.init();
	});
</script>

<div>
	<Navbar />
	<slot />
	<IconLinks />
	<Footer />
</div>
