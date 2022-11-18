import LandingPage from "@/views/LandingPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "landing",
			component: LandingPage,
		},
		{
			path: "/:pathMatch(.*)",
			redirect: { name: "landing" },
		},
	],
});

export default router;
