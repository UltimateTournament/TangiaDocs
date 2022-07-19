// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tangia Developer Docs',
  tagline: 'Connecting Content Creators, Audiences, and Game Developers like never before',
  url: 'https://docs.tangia.co/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Tangia', // Usually your GitHub org/user name.
  projectName: 'Tangia Developer Docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/UltimateTournament/TangiaDocs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/UltimateTournament/TangiaDocs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Developer Documentation',
        logo: {
          alt: 'The Tangia Logo',
          src: 'img/logo.png',
        },
        items: [
          // {
          //   type: 'docsVersionDropdown',
          // },
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/UltimateTournament',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/GMD9Yrf9pb',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/UArcadeIO',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/UltimateTournament',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ultimate Tournament, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp', 'http']
      },
    }),
};

module.exports = config;
