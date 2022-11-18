<template>
	<div class="landing-page">
		<div class="landing-container">
			<div class="landing-card landing-main">
				<h1 class="no-margin">cozy</h1>
				<span>out now</span>
				<div class="content">
					<img src="/img/background-1080.png" />
				</div>
				<h2 class="no-margin">listen</h2>
				<div class="line"></div>
				<div class="landing-links main-links">
					<IconButton icon="fab fa-spotify" color="#1DB954" name="Spotify" />
					<IconButton icon="fab fa-itunes-note" color="#FF2444" name="Apple Music" />
					<IconButton icon="fab fa-youtube" color="#FF0000" name="YouTube" />
					<IconButton icon="fab fa-bandcamp" color="#629AA9" name="BandCamp" />
					<IconButton icon="fab fa-amazon" color="#FF9900" name="Amazon Music" />
					<IconButton icon="fab fa-deezer" color="#EF5466" name="Deezer" />
				</div>
			</div>
			<div class="landing-card landing-links">
				<IconButton icon="fab fa-youtube" color="#FF0000" name="YouTube" sub="Test User" />
				<IconButton icon="fab fa-twitch" color="#9146FF" name="Twitch" sub="testuser" />
				<IconButton icon="fab fa-instagram" color="#F77737" name="Instagram" sub="@TestUser" />
				<IconButton icon="fab fa-discord" color="#5865F2" name="Discord" sub="TestUser#1234" />
				<IconButton icon="fab fa-twitter" color="#1DA1F2" name="Twitter" sub="@test_user" />
			</div>
		</div>
		<div class="bg-layers">
			<ImageLayer
				src="/img/background-1080.png"
				srcset="/img/background-1080.png 1080w, /img/background-2k.png 1367w, /img/background-4k.png 2050w, /img/background-8k.png 4100w"
				:blur="8"
			/>
			<div class="bg-gradient"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import IconButton from "@/components/IconButton.vue";
import ImageLayer from "@/components/ImageLayer.vue";
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

	overflow: hidden scroll;

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

		width: 25rem;

		.content {
			width: 100%;
			height: 100%;

			margin: 2rem 0;

			img {
				width: 100%;
				height: 100%;

				object-fit: contain;
				object-position: center;
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
		background: linear-gradient(180deg, rgb(0, 0, 0, 0), rgb(0, 0, 0, 0.8));
	}
}

.no-margin {
	margin: 0;
}
</style>
