<script lang="ts">
	export let isNavbarOpen = false;
</script>

<div>
	<button class="relative" on:click|preventDefault={() => (isNavbarOpen = !isNavbarOpen)}>
		<div
			class="relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden transition-all duration-200"
		>
			<div
				class="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300"
			>
				<div
					class="h-[2px] w-7 origin-left transform bg-gray-light transition-all duration-300 {isNavbarOpen
						? 'rotate-[42deg]'
						: ''}"
				/>
				<div
					class="h-[2px] w-1/2 transform rounded bg-gray-light transition-all duration-300 {isNavbarOpen
						? '-translate-x-10'
						: ''}"
				/>
				<div
					class="h-[2px] w-7 origin-left transform bg-gray-light transition-all duration-300 {isNavbarOpen
						? '-rotate-[42deg]'
						: ''}"
				/>
			</div>
		</div>
	</button>
</div>
