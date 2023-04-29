<script lang="ts">
	export let href = '/#';
	export let number = '00.';
</script>

<a {href}>
	<h2 class="font-firacode text-gray-light transition-all hover:text-red">
		<span class="pr-1 text-red">
			{number}
		</span>
		<slot />
	</h2>
</a>
