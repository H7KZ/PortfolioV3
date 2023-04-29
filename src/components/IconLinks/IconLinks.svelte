<script lang="ts">
	import Discord from '../../icons/Discord.svelte';
	import GitHub from '../../icons/GitHub.svelte';
	import Instagram from '../../icons/Instagram.svelte';
	import LinkedIn from '../../icons/LinkedIn.svelte';
	import Send from '../../icons/Send.svelte';
	import Steam from '../../icons/Steam.svelte';
</script>

<div class="fixed bottom-10 left-8 hidden flex-col gap-6 md:flex">
	<a href="https://github.com/H7KZ" target="_blank">
		<div class="w-8 text-gray transition-all hover:text-red">
			<GitHub />
		</div>
	</a>
	<a href="https://www.linkedin.com/in/jan-kominek" target="_blank">
		<div class="w-8 text-gray transition-all hover:text-red">
			<LinkedIn />
		</div>
	</a>
	<a href="https://www.instagram.com/jan_kominek" target="_blank">
		<div class="w-8 text-gray transition-all hover:text-red">
			<Instagram />
		</div>
	</a>
	<a href="https://discord.com/users/466867931821637632" target="_blank">
		<div class="w-8 text-gray transition-all hover:text-red">
			<Discord />
		</div>
	</a>
	<a href="https://steamcommunity.com/id/H7KZ/" target="_blank">
		<div class="w-8 text-gray transition-all hover:text-red">
			<Steam />
		</div>
	</a>
	<a href="mailto:jan.kominek.kmk@gmail.com" target="_blank">
		<div class="w-8 text-gray transition-all hover:text-red">
			<Send />
		</div>
	</a>
</div>
