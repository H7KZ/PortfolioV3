<script lang="ts">
	import Discord from '../../icons/Discord.svelte';
	import GitHub from '../../icons/GitHub.svelte';
	import Instagram from '../../icons/Instagram.svelte';
	import LinkedIn from '../../icons/LinkedIn.svelte';
	import Send from '../../icons/Send.svelte';
	import Steam from '../../icons/Steam.svelte';
</script>

<div class="flex w-full flex-col items-center justify-center gap-8 py-8 text-center">
	<div class="flex gap-6 md:hidden">
		<a href="https://github.com/H7KZ" target="_blank">
			<div class="w-6 text-gray transition-all hover:text-red">
				<GitHub />
			</div>
		</a>
		<a href="https://www.linkedin.com/in/jan-kominek" target="_blank">
			<div class="w-6 text-gray transition-all hover:text-red">
				<LinkedIn />
			</div>
		</a>
		<a href="https://www.instagram.com/jan_kominek" target="_blank">
			<div class="w-6 text-gray transition-all hover:text-red">
				<Instagram />
			</div>
		</a>
		<a href="https://discord.com/users/466867931821637632" target="_blank">
			<div class="w-6 text-gray transition-all hover:text-red">
				<Discord />
			</div>
		</a>
		<a href="https://steamcommunity.com/id/H7KZ/" target="_blank">
			<div class="w-6 text-gray transition-all hover:text-red">
				<Steam />
			</div>
		</a>
		<a href="mailto:contact@kominekjan.cz" target="_blank">
			<div class="w-6 text-gray transition-all hover:text-red">
				<Send />
			</div>
		</a>
	</div>
	<div class="flex flex-col gap-2 font-firacode text-sm text-gray">
		<p>
			Inspirated by <a href="https://brittanychiang.com" class="transition-all hover:text-red"
				>Brittany Chiang</a
			>
		</p>
		<p>
			{new Date().getFullYear()} © Komínek Jan. All rights reserved.
		</p>
	</div>
</div>
