<script lang="ts">
	import Button from '../Global/Button.svelte';
	import Header from '../Global/Header.svelte';
	import WorkSection from './WorkSection.svelte';
	import { featured } from './work';
</script>

<div class="flex flex-col items-center justify-center gap-20 px-8 pt-48" id="work">
	<Header number="03.">My Work & Projects</Header>
	<div class="flex flex-col gap-24">
		{#each featured as work}
			<WorkSection {work} />
		{/each}
	</div>
	<Button href="/work" target="">See more of my work -&gt;</Button>
</div>
