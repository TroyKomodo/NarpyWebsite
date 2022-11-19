<template>
	<div class="landing-page">
		<div class="landing-container">
			<div v-if="data.release" class="landing-card landing-main">
				<h1 class="no-margin">{{ data.release.name }}</h1>
				<span>out now</span>
				<div v-if="data.release.body" class="content">
					<iframe
						v-if="data.release.body.type === 'yt-embed'"
						class="yt-embed"
						:src="`https://www.youtube.com/embed/${data.release.body.video}`"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
				<h2 class="no-margin">listen</h2>
				<div class="line"></div>
				<div class="landing-links main-links">
					<IconButton
						v-for="(link, i) in transformLinks(data.release.links)"
						:key="i"
						:icon="link.icon ? `fab ${link.icon}` : 'fas fa-link'"
						:color="link.color"
						:name="link.name"
						:sub="link.handle"
						:href="link.link"
					/>
				</div>
			</div>
			<div class="landing-card landing-links">
				<IconButton
					v-for="(link, i) in transformLinks(data.links)"
					:key="i"
					:icon="link.icon ? `fab ${link.icon}` : 'fas fa-link'"
					:color="link.color"
					:name="link.name"
					:sub="link.handle"
					:href="link.link"
				/>
			</div>
		</div>
		<div class="bg-layers">
			<ImageLayer
				src="/img/background-small.webp"
				srcset="/img/background-small.webp 1025w, /img/background-medium.webp 2050w, /img/background-large.webp 4100w"
				:blur="4"
			/>
			<SnowLayer />
			<div class="bg-gradient"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import IconButton from "@/components/IconButton.vue";
import ImageLayer from "@/components/ImageLayer.vue";
import SnowLayer from "@/components/SnowLayer.vue";
import { DATA as data } from "@/data/data";
import { PROVIDERS, type Provider, type ProviderLink } from "@/data/providers";

function transformLinks(links: ProviderLink[]) {
	return links.map((link) => {
		const provider: Provider | undefined = PROVIDERS[link.type];

		return {
			name: provider?.name,
			icon: provider?.icon,
			color: provider?.color,
			handle: link.handle,
			link: link.link,
		};
	});
}
</script>

<style scoped lang="scss">
.landing-page {
	position: absolute;
	inset: 0;

	display: flex;
	align-items: center;
	justify-content: center;

	padding: 3rem;

	@media (max-height: 45rem), (max-width: 30rem) {
		padding: 0;
	}
}

.landing-container {
	display: flex;
	align-items: center;
	flex-direction: column;

	max-height: 100%;
	max-width: 100%;

	overflow: hidden auto;

	> :not(:last-child) {
		margin-bottom: 1rem;
	}

	.landing-card {
		background: var(--theme-card);

		max-height: 100%;
		max-width: 100%;

		padding: 1rem 1.5rem;
		border-radius: 1.5rem;

		box-sizing: border-box;

		backdrop-filter: blur(15px);

		.line {
			flex-shrink: 0;

			height: 0.15rem;
			width: 100%;

			background: var(--theme-text);

			margin: 0.5rem 0;
		}
	}

	.landing-main {
		display: flex;
		align-items: center;
		flex-direction: column;

		overflow: hidden auto;

		min-height: 5rem;
		min-width: 0;

		width: 25rem;

		.content {
			min-height: 2rem;
			min-width: 0;

			flex-shrink: 1;

			width: 100%;
			height: 100%;

			margin: 2rem 0;

			> img {
				width: 100%;
				height: 100%;

				object-fit: contain;
				object-position: center;
			}

			.yt-embed {
				width: 100%;
				height: 100%;

				aspect-ratio: 16 / 9;
			}
		}
	}

	.landing-links {
		display: flex;
		align-items: center;
		justify-content: center;

		flex-wrap: wrap;
		gap: 0 1.5rem;

		&.main-links {
			padding: 0.5rem 1.5rem;
			font-size: 1.5rem;
		}
	}
}

.bg-layers {
	position: absolute;
	inset: 0;

	z-index: -1;

	pointer-events: none;

	> * {
		position: absolute;
		inset: 0;
	}

	.bg-gradient {
		background: linear-gradient(180deg, rgb(0, 0, 0, 0), rgb(0, 0, 0, 0.6));
	}
}

.no-margin {
	margin: 0;
}
</style>
