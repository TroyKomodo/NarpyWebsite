<template>
	<div class="image-layer">
		<div class="container">
			<img
				:src="src"
				:srcset="srcset"
				:style="{
					filter,
					transform,
					width: outsetSize,
					height: outsetSize,
					top: outsetLocation,
					left: outsetLocation,
				}"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";

const FALLOFF_FAC = 0.7;

const props = withDefaults(
	defineProps<{
		src: string;
		srcset?: string;
		parallax?: number;
		blur?: number;
	}>(),
	{
		parallax: 30,
	},
);

const x = ref(0);
const y = ref(0);

const filter = computed(() => (props.blur ? `blur(${props.blur}px)` : undefined));
const transform = computed(() => `translate(${x.value}px, ${y.value}px)`);

const outset = computed(() => props.parallax + (props.blur ? props.blur * 2 : 0));

const outsetSize = computed(() => `calc(100% + ${outset.value * 2}px)`);
const outsetLocation = computed(() => `-${outset.value}px`);

let moveTimeout: number | undefined;

function onMouseMove(ev: MouseEvent) {
	if (moveTimeout) return;

	moveTimeout = requestAnimationFrame(() => {
		moveTimeout = undefined;

		const halfW = window.innerWidth / 2;
		const halfH = window.innerHeight / 2;

		const deltaX = Math.min(Math.max((halfW - ev.pageX) / halfW, -1), 1);
		const deltaY = Math.min(Math.max((halfH - ev.pageY) / halfH, -1), 1);

		const falloffX = deltaX < 0 ? Math.abs(deltaX) ** FALLOFF_FAC * -1 : deltaX ** FALLOFF_FAC;
		const falloffY = deltaY < 0 ? Math.abs(deltaY) ** FALLOFF_FAC * -1 : deltaY ** FALLOFF_FAC;

		x.value = falloffX * props.parallax;
		y.value = falloffY * props.parallax;
	});
}

onMounted(() => {
	window.addEventListener("mousemove", onMouseMove, { passive: true });
});

onUnmounted(() => {
	window.removeEventListener("mousemove", onMouseMove);

	if (moveTimeout) cancelAnimationFrame(moveTimeout);
});
</script>

<style scoped lang="scss">
@keyframes breathing {
	from {
		transform: translateX(-8px) scale(1);
	}

	to {
		transform: translateX(8px) scale(1.02);
	}
}

.image-layer {
	.container {
		position: absolute;
		inset: -16px;

		animation: 4s ease-in-out infinite alternate breathing;
	}

	img {
		position: absolute;
		width: 100%;
		height: 100%;

		transition: transform 100ms ease;

		object-fit: cover;
		object-position: center;
	}
}
</style>
