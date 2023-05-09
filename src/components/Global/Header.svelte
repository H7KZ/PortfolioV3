<script lang="ts">
	export let number = '';
</script>

<h1 class="font-inter text-3xl font-semibold text-gray-light">
	<span class="pr-2 font-firacode font-normal text-red">
		{number}
	</span>
	<slot />
</h1>
