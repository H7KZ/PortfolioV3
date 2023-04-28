<script lang="ts">
    export let href = '';
</script>

<a href={href} class="w-fit">
    <button class="border-2 border-red px-4 py-3 rounded-[4px] font-firacode text-red transition-all hover:bg-red hover:bg-opacity-5">
        <slot />
    </button>
</a>
