<template>
	<div class="icon-button" :style="{ '--hover-color': color }" :title="`${name ?? ''}\n${sub ?? ''}`">
		<FaIcon :icon="icon" />
	</div>
</template>

<script setup lang="ts">
defineProps<{
	icon: string;
	color?: string;
	name?: string;
	sub?: string;
}>();
</script>

<style scoped lang="scss">
.icon-button {
	cursor: pointer;

	padding: 0.2rem;

	box-sizing: border-box;

	transition: color 175ms linear;

	color: var(--theme-text);

	&:hover {
		color: var(--hover-color);
	}
}
</style>
