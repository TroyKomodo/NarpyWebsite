export const PROVIDERS: Record<string, Provider> = {
	spotify: {
		name: "Spotify",
		icon: "fa-spotify",
		color: "#1DB954",
	},
	apple: {
		name: "Apple Music",
		icon: "fa-itunes-note",
		color: "#FF2444",
	},
	youtube: {
		name: "YouTube",
		icon: "fa-youtube",
		color: "#FF0000",
	},
	bandcamp: {
		name: "BandCamp",
		icon: "fa-bandcamp",
		color: "#629AA9",
	},
	amazon: {
		name: "Amazon Music",
		icon: "fa-amazon",
		color: "#FF9900",
	},
	deezer: {
		name: "Deezer",
		icon: "fa-deezer",
		color: "#EF5466",
	},
	twitch: {
		name: "Twitch",
		icon: "fa-twitch",
		color: "#9146FF",
	},
	instagram: {
		name: "Instagram",
		icon: "fa-instagram",
		color: "#F77737",
	},
	discord: {
		name: "Discord",
		icon: "fa-discord",
		color: "#5865F2",
	},
	twitter: {
		name: "Twitter",
		icon: "fa-twitter",
		color: "#1DA1F2",
	},
};

export interface Provider {
	name: string;
	icon: string;
	color?: string;
}

export interface ProviderLink {
	type: string;
	link: string;
	handle?: string;
}
