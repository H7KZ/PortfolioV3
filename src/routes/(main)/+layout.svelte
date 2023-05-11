<script lang="ts">
	import '../../app.css';
	import IconLinks from '../../components/IconLinks/IconLinks.svelte';
	// import Paging from '../components/Paging/Paging.svelte';
	import Navbar from '../../components/Global/Navbar/Navbar.svelte';
</script>

<div>
	<Navbar />
	<slot />
	<IconLinks />
	<!--<Paging />-->
</div>
