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
						{ label: 'Live TV Playback', slug: 'guides/live-tv' },
						{ label: 'VOD & Series', slug: 'guides/vod' },
						{ label: 'Local Library', slug: 'guides/local-library' },
						{ label: 'Stremio Addons', slug: 'guides/stremio-addons' },
						{ label: 'EPG Editor', slug: 'guides/epg-editor' },
						{ label: 'Logo Editor', slug: 'guides/logo-editor' },
						{ label: 'Popout & External Player', slug: 'guides/popout-player' },
						{ label: 'Cast to TV', slug: 'guides/cast-to-tv' },
						{ label: 'Widgets', slug: 'guides/widgets' },
						{ label: 'Automatic Stream Fallback', slug: 'guides/failover-group' },
						{ label: 'Stream Probe & IPTV Checker', slug: 'guides/stream-probe' },
						{ label: 'Time Shift & Catchup', slug: 'guides/time-shift' },
						{ label: 'Custom Groups & Playlists', slug: 'guides/playlists' },
						{ label: 'Playlist Editor', slug: 'guides/playlist-editor' },
						{ label: 'Watchlist & Notifications', slug: 'guides/watchlist' },
						{ label: 'TV Calendar', slug: 'guides/tv-calendar' },
						{ label: 'DVR & Recording', slug: 'guides/dvr' },
						{ label: 'Multiview Layouts', slug: 'guides/multiview' },
						{ label: 'Sports', slug: 'guides/sports-hub' },
						{ label: 'Search & Discovery', slug: 'guides/search' },
						{ label: 'Playback & MPV', slug: 'guides/playback' },
						{ label: 'Integrations', slug: 'guides/integrations' },
						{ label: 'Controllers & Phone Remote', slug: 'guides/controllers-phone-remote' },
						{ label: 'Settings Reference', slug: 'guides/settings' },
						{ label: 'Keyboard Shortcuts', slug: 'guides/shortcuts' },
						{ label: 'Tips & Tricks', slug: 'guides/tips' },
						{ label: 'Troubleshooting', slug: 'guides/troubleshoot' },
					],
				},
				{
					label: 'About',
					items: [
						{ label: 'Disclaimer & Credits', slug: 'about' },
						{ label: 'Changelogs', slug: 'changelogs' },
					],
				},
			],
		}),
	],
});
