import type { StarlightUserConfig } from '@astrojs/starlight/types';
import { group } from './config/sidebar';


/**
 * Starlight sidebar configuration object for the global site sidebar.
 *
 * - Top-level groups become tabs.
 * - Use the `group()` utility function to define groups. This uses labels from our
 *   `src/content/nav/*.ts` files instead of defining labels and translations inline.
 *
 */
export const sidebar = [
        // The legacy V2 (Hollyhock-2 SDK) docs under getting-started/, reference/,
        // tutorials/ and examples/ are intentionally not listed in the menu anymore.
        // The V2 era is now the gint era: the old content is kept and still reachable
        // through links (e.g. from the HH3 introduction) but hidden from quick access.
        group('Gint', {
            items: [
                {
                    label: 'Get Started',
                    autogenerate: { directory: 'gint/getting-started' },
                },
                {
                    label: 'Reference',
                    collapsed: true,
                    items: [
                        {
                            label: '🖥️ Kernel',
                            collapsed: true,
                            autogenerate: { directory: 'gint/reference/kernel' },
                        },
                        {
                            label: '📚 LIBS',
                            collapsed: true,
                            autogenerate: { directory: 'gint/reference/libraries' },
                        }
                    ]
                },
                {
                    label: 'Tutorials',
                    autogenerate: { directory: 'gint/tutorials' },
                },
                {
                    label: 'Examples',
                    collapsed: true,
                    autogenerate: { directory: 'gint/examples' },
                }
            ]
        }),
        // ---- Legacy V2 (Hollyhock-2 SDK) sidebar group ----
        // The V2 docs are hidden from the menu but the content is kept.
        // Old links keep working; the V2 pages are still reachable directly.
        // group('HHK-V2 (legacy)', {
        // hidden: true,
        // items: [
        // {
        // label: 'Get Started',
        // items: [
        // { label: 'Introduction', link: '/getting-started/introduction/' },
        // { label: 'Building', link: '/getting-started/building/' },
        // ],
        // },
        // // {
        // // 	label: 'Guides',
        // // 	collapsed: true,
        // // 	autogenerate: { directory: 'guides' },
        // // 	items: [
        // // 		// Each item here is one entry in the navigation menu.
        // // 		{ label: 'Example Guide', link: '/guides/example/' },
        // // 	],
        // // },
        // {
        // label: 'Reference',
        // collapsed: true,
        // items: [
        // {
        // label: '📱 GUI',
        // collapsed: true,
        // autogenerate: { directory: 'reference/gui' },

        // },
        // {
        // label: '📟 OS',
        // collapsed: true,
        // autogenerate: { directory: 'reference/os' },

        // },
        // {
        // label: '🧮 CPU',
        // collapsed: true,
        // autogenerate: { directory: 'reference/cpu' },

        // },
        // {
        // label: '🖩 CALC',
        // collapsed: true,
        // autogenerate: { directory: 'reference/calc' },

        // }
        // ]
        // },
        // {
        // label: 'Tutorials',
        // autogenerate: { directory: 'tutorials' },
        // },
        // {
        // label: 'Examples',
        // collapsed: true,
        // autogenerate: { directory: 'examples' },
        // }
        // ]
        // }),
        group('HH3', {
            items: [
                {
                    label: 'Get Started',
                    autogenerate: { directory: 'hh3/getting-started' },
                    // items: [
                    //     { label: 'Introduction', link: '/hh3/getting-started/introduction/' },
                    //     { label: 'Building', link: '/hh3/getting-started/building/' },
                    // ],
                },
                 {
                    label: 'Reference',
                    collapsed: true,
                    items: [
                        // {
                        //     label: '📱 GUI',
                        //     collapsed: true,
                        //     autogenerate: { directory: 'hh3/reference/gui' },

                        // },
                        {
                            label: '📟 OS',
                            collapsed: true,
                            autogenerate: { directory: 'hh3/reference/os' },

                        },
                        {
                            label: '🧮 CPU',
                            collapsed: true,
                            autogenerate: { directory: 'hh3/reference/cpu' },

                        },
                        {
                            label: '🖩 CALC',
                            collapsed: true,
                            autogenerate: { directory: 'hh3/reference/calc' },

                        },
                        {
                            label: '📚 LIBS',
                            collapsed: true,
                            autogenerate: { directory: 'hh3/reference/libraries' },

                        } 
                    ]
                },
                {
                    label: 'Examples',
                    collapsed: true,
                    autogenerate: { directory: 'hh3/examples' },
                }
            ]
        }),
        group('Python', {
            collapsed: true,
            badge: { text: 'New', variant: 'tip' },
            items: [
                { label: 'Introduction', link: '/python/introduction/' },
                { label: 'Installation', link: '/python/installation-guide/' },
                {
                    label: 'Examples',
                    collapsed: true,
                    autogenerate: { directory: 'python/examples' },
                },
                {
                    label: 'Reference',
                    collapsed: true,
                    autogenerate: { directory: 'python/reference' },
                },
                { label: 'Optimize', link: '/python/optimize/' },
            ]
        }),
        group('Misc', {
            collapsed: true,
            items: [
                { label: 'FAQ', link: '/faq/' },
                {
                    label: 'Developer Notes',
                    autogenerate: { directory: 'dev' },
                },
                {
                    label: 'Hardware',
                    collapsed: true,
                    autogenerate: { directory: 'hardware' },
                }
            ]
        })
    ] satisfies StarlightUserConfig['sidebar'];
