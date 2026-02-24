// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';

// https://astro.build/config
export default defineConfig({
	site: 'https://tbeezy.github.io',
	base: '/ynotvdoc',
	integrations: [
		starlight({
			title: 'ynoTV Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/tbeezy/ynotvdoc' }],
			plugins: [starlightThemeNova()],
			sidebar: [
				{
					label: 'Start here',
					items: [
						{ label: 'Getting Started', slug: 'getting-started' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Source Management', slug: 'guides/sources' },
						{ label: 'Custom Groups & Playlists', slug: 'guides/playlists' },
						{ label: 'Watchlist & Notifications', slug: 'guides/watchlist' },
						{ label: 'TV Calendar', slug: 'guides/tv-calendar' },
						{ label: 'DVR & Recording', slug: 'guides/dvr' },
						{ label: 'Multiview Layouts', slug: 'guides/multiview' },
						{ label: 'Sports Hub', slug: 'guides/sports-hub' },
						{ label: 'Search & Discovery', slug: 'guides/search' },
						{ label: 'Playback & MPV', slug: 'guides/playback' },
						{ label: 'Keyboard Shortcuts', slug: 'guides/shortcuts' },
						{ label: 'Settings', slug: 'guides/settings' },
					],
				},
				{
					label: 'About',
					items: [
						{ label: 'Disclaimer & Credits', slug: 'about' },
					],
				},
			],
		}),
	],
});
