<script lang="ts">
	import { onMount } from 'svelte';
	interface Props {
		canvasFillStyle?: string;
		containerStyle?: string;
	}
	let { canvasFillStyle = 'rgba(0, 0, 0, 0.5)', containerStyle = 'opacity-50' }: Props = $props();

	let containerDom: HTMLDivElement | null = $state(null);
	let canvas: HTMLCanvasElement | null = $state(null);
	let ctx: CanvasRenderingContext2D;
	let animationFrame: number;
	let W = 0,
		H = 0,
		pixels: { x: number; y: number; z: number }[] = [];

	function setupPixels() {
		pixels = [];
		for (let x = -400; x < 400; x += 5) {
			for (let z = -250; z < 250; z += 5) {
				pixels.push({ x, y: 100, z });
			}
		}
	}

	function resizeCanvas() {
		if (!canvas || !containerDom) return;
		W = canvas.width = containerDom.offsetWidth;
		H = canvas.height = containerDom.offsetHeight;
		setupPixels();
	}

	function render(ts: number) {
		const imageData = ctx.getImageData(0, 0, W, H);
		const len = pixels.length;
		const fov = 250;
		for (let i = 0; i < len; i++) {
			const pixel = pixels[i];
			const scale = fov / (fov + pixel.z);
			const x2d = pixel.x * scale + W / 2;
			const y2d = pixel.y * scale + H / 2;
			if (x2d >= 0 && x2d <= W && y2d >= 0 && y2d <= H) {
				const c = (Math.round(y2d) * imageData.width + Math.round(x2d)) * 4;
				imageData.data[c] = 17;
				imageData.data[c + 1] = 122;
				imageData.data[c + 2] = 181;
				imageData.data[c + 3] = 255;
			}
			pixel.z -= 0.4;
			pixel.y = H / 14 + Math.sin((i / len) * 15 + ts / 450) * 10;
			if (pixel.z < -fov) pixel.z += 2 * fov;
		}
		ctx.putImageData(imageData, 0, 0);
	}

	function drawFrame(ts: number) {
		ctx.fillStyle = canvasFillStyle;
		ctx.fillRect(0, 0, W, H);
		render(ts);
		animationFrame = requestAnimationFrame(drawFrame);
	}

	onMount(() => {
		if (!containerDom || !canvas) return;
		ctx = canvas.getContext('2d')!;
		resizeCanvas();
		containerDom.addEventListener('resize', resizeCanvas);
		animationFrame = requestAnimationFrame(drawFrame);
		return () => {
			if (!containerDom) return;
			containerDom.removeEventListener('resize', resizeCanvas);
			cancelAnimationFrame(animationFrame);
		};
	});
</script>

<div bind:this={containerDom} class="absolute top-0 left-0 -z-10 h-full w-full {containerStyle}">
	<canvas bind:this={canvas}></canvas>
</div>

<!--
@component
@name Backdrop3D
@description A 3D backdrop effect using canvas.
@ref: https://www.bootstrapmb.com/tag/dianliu
 -->