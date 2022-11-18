import type { ProviderLink } from "./providers";

export const DATA: LandingData = {
	release: {
		name: "cozy",
		body: {
			type: "yt-embed",
			video: "-QhAf7nfHVs",
		},
		links: [
			{
				type: "spotify",
				link: "",
			},
			{
				type: "apple",
				link: "",
			},
			{
				type: "youtube",
				link: "",
			},
			{
				type: "bandcamp",
				link: "",
			},
			{
				type: "amazon",
				link: "",
			},
			{
				type: "deezer",
				link: "",
			},
		],
	},
	links: [
		{
			type: "youtube",
			link: "https://youtube.com/narpylive",
			handle: "narpyLIVE",
		},
		{
			type: "twitch",
			link: "https://twitch.tv/narpy",
			handle: "narpy",
		},
		{
			type: "instagram",
			link: "https://instagram.com/narpylive",
			handle: "@narpylive",
		},
		{
			type: "discord",
			link: "https://discord.gg/narpy",
			handle: "narpy's cozy cafè",
		},
		{
			type: "twitter",
			link: "https://twitter.com/narpylive",
			handle: "@narpylive",
		},
	],
};

export interface LandingData {
	release?: {
		name: string;
		body: ReleaseBody;
		links: ProviderLink[];
	};
	links: ProviderLink[];
}

export interface ReleaseBodyBase {
	type: string;
}

export interface ReleaseBodyYT extends ReleaseBodyBase {
	type: "yt-embed";
	video: string;
}

export type ReleaseBody = ReleaseBodyYT;
