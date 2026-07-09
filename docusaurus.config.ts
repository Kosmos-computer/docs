import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const org = 'Kosmos-computer';
const repo = 'docs';
const editUrl = `https://github.com/${org}/${repo}/tree/main/`;

const controlPlaneUrl = 'https://arco-control-plane.fly.dev';
const marketingSiteUrl = 'https://kosmos-www.vercel.app';
const betaModalUrl = `${marketingSiteUrl}/#beta`;

const config: Config = {
  title: 'Arco',
  tagline: 'Generative UI library for Kosmos — tokens, components, blocks, and the AI assembly contract.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://kosmos-docs.vercel.app',
  baseUrl: '/',
  organizationName: org,
  projectName: repo,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/arco-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Kosmos Docs',
      logo: {
        alt: 'Arco',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
        width: 18,
        height: 13,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guideSidebar',
          position: 'left',
          label: 'Guide',
        },
        {
          type: 'docSidebar',
          sidebarId: 'referenceSidebar',
          position: 'left',
          label: 'Reference',
        },
        {
          type: 'html',
          position: 'right',
          value: '<span class="navbar__item navbar__link navbar__link--inactive">Kosmos</span>',
        },
        {
          type: 'html',
          position: 'right',
          value: '<span class="navbar__item navbar__link navbar__link--inactive">Get instance</span>',
        },
        {
          type: 'html',
          position: 'right',
          value: '<span class="navbar__item navbar__link navbar__link--inactive">Sign in</span>',
        },
        {
          type: 'html',
          position: 'right',
          value: '<span class="navbar__item navbar__link navbar__link--inactive">GitHub</span>',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Guide',
          items: [
            {label: 'Getting started', to: '/guide/getting-started'},
            {label: 'Design tokens', to: '/guide/design-tokens'},
            {label: 'Generative blocks', to: '/guide/generative-blocks'},
          ],
        },
        {
          title: 'Reference',
          items: [
            {label: 'Token catalog', to: '/reference/tokens'},
            {label: 'Block registry', to: '/reference/block-registry'},
            {label: 'Standards map', to: '/reference/standards-map'},
          ],
        },
        {
          title: 'Kosmos',
          items: [
            {label: 'Marketing site', href: betaModalUrl},
            {label: 'Get hosted instance', href: betaModalUrl},
            {label: 'Sign in', href: betaModalUrl},
            {label: 'Arco spec', href: `${marketingSiteUrl}/spec.html`},
            {label: 'Prototype repo', href: 'https://github.com/Kosmos-computer/Kosmos'},
          ],
        },
      ],
      copyright: `Arco — generative UI library for Kosmos. © ${new Date().getFullYear()} Kosmos-computer`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
