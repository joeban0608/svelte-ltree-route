<script lang="ts">
	import type { PageData } from './$types';
	interface Props {
		data: PageData;
	}
	let { data }: Props = $props();
</script>

<main class="z-0 m-auto flex h-full flex-col items-center justify-start gap-4 overflow-y-scroll py-4">
	<h1>Ops Panel</h1>
</main>
