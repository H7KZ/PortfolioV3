<script lang="ts">
	import WorkTable from '../../components/Work/WorkTable.svelte';
</script>

<div class="flex min-h-screen w-full flex-col items-center justify-center">
	<div class="flex flex-col gap-12">
		<div>
			<h1 class="break-words font-inter text-5xl font-bold text-gray-light sm:text-6xl">
				Work <span class="text-lg sm:text-2xl">:)</span>
			</h1>
			<h3 class="font-firacode text-xs text-red sm:text-base">
				List of all my projects through the years
			</h3>
		</div>
		<WorkTable />
	</div>
</div>
