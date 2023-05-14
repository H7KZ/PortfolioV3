<script lang="ts">
	import GitHub from '../../icons/GitHub.svelte';
	import Link from '../../icons/Link.svelte';
	import { work } from './work';

	const workList = work.sort((a, b) => b.year.localeCompare(a.year));
</script>

<div class="relative w-full overflow-x-scroll">
	<table class="w-full text-left text-sm text-gray-light">
		<thead class="font-inter text-xl text-gray">
			<tr>
				<th scope="col" class="px-4 py-2 max-sm:hidden"> Year </th>
				<th scope="col" class="px-4 py-2"> Title </th>
				<th scope="col" class="px-4 py-2 max-xl:hidden"> Made at </th>
				<th scope="col" class="px-4 py-2 max-lg:hidden"> Skills </th>
				<th scope="col" class="px-4 py-2"> Links </th>
			</tr>
		</thead>
		<tbody>
			{#each workList as work}
				<tr class="font-firacode">
					<th scope="row" class="px-5 py-3 font-medium text-red max-sm:hidden">
						<p class="w-12 truncate">
							{work.year}
						</p>
					</th>
					<td class="text-ellipsis px-5 py-3 font-bold">
						<p class="w-48 truncate sm:w-72">
							{work.title}
						</p>
					</td>
					<td class="px-5 py-3 font-medium max-xl:hidden">
						<p class="w-24 truncate">
							{work.firm ?? 'Personal'}
						</p>
					</td>
					<td class="text-ellipsis px-5 py-3 text-gray-light max-lg:hidden">
						<p class="w-96 truncate">
							{#each work.skills as skill, i}
								<span class="font-medium">
									<span>
										{skill}
									</span>
									{#if i != work.skills.length - 1}
										<span> • </span>
									{/if}
								</span>
							{/each}
						</p>
					</td>
					<td class="flex w-20 items-end gap-3 px-5 py-3">
						{#if work.links?.github}
							<a
								href={work.links.github}
								target="_blank"
								rel="noopener noreferrer"
								class="transition-all hover:text-red"
							>
								<div class="h-5 w-5">
									<GitHub />
								</div>
							</a>
						{/if}
						{#if work.links?.website}
							<a
								href={work.links.website}
								target="_blank"
								rel="noopener noreferrer"
								class="transition-all hover:text-red"
							>
								<div class="h-4 w-4">
									<Link />
								</div>
							</a>
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
