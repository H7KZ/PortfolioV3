<script lang="ts">
	export let href = '';
</script>

<a {href} class="w-fit">
	<button
		class="rounded-[4px] border-2 border-red px-4 py-3 font-firacode text-sm text-red transition-all hover:bg-red hover:bg-opacity-5 md:text-base"
	>
		<slot />
	</button>
</a>
