<template>
	<a class="icon-button" :href="href" :style="{ '--hover-color': color }" :title="`${name ?? ''}\n${sub ?? ''}`">
		<FontAwesomeIcon :icon="icon" />
	</a>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import type { FontAwesomeIconProps } from "@fortawesome/vue-fontawesome";

defineProps<{
	icon: FontAwesomeIconProps["icon"];
	color?: string;
	name?: string;
	sub?: string;
	href: string;
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
		color: var(--hover-color, var(--theme-icon-hover));
	}
}
</style>
