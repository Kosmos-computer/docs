import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const org = 'Kosmos-computer';
const repo = 'docs';
const editUrl = `https://github.com/${org}/${repo}/tree/main/`;

const marketingSiteUrl = 'https://www.kosmos.computer';
const githubRepoUrl = 'https://github.com/Kosmos-computer/Kosmos';

const config: Config = {
  title: 'Kosmos Docs',
  tagline:
    'A generative AI operating system for integrated work & life — shell, agents, hosted instances, and Arco UI.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.kosmos.computer',
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
        gtag: {
          trackingID: 'G-PQ9XK2RDJS',
          anonymizeIP: true,
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
        alt: 'Kosmos',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
        width: 18,
        height: 13,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'kosmosSidebar',
          position: 'left',
          label: 'Kosmos',
        },
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
          type: 'docSidebar',
          sidebarId: 'sdkSidebar',
          position: 'left',
          label: 'SDK',
        },
        {
          href: githubRepoUrl,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Kosmos',
          items: [
            {label: 'What is Kosmos?', to: '/kosmos/what-is-kosmos'},
            {label: 'Marketing site', href: marketingSiteUrl},
            {label: 'Prototype repo', href: githubRepoUrl},
          ],
        },
        {
          title: 'Guide',
          items: [
            {label: 'What is Arco?', to: '/guide/what-is-arco'},
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
          title: 'SDK',
          items: [
            {label: 'Overview', to: '/sdk/overview'},
            {label: 'Getting started', to: '/sdk/getting-started'},
            {label: 'Agent events', to: '/sdk/agent-events'},
            {label: 'kosmos-sdk repo', href: 'https://github.com/Kosmos-computer/kosmos-sdk'},
          ],
        },
      ],
      copyright: `Kosmos Docs — generative AI OS and Arco UI. © ${new Date().getFullYear()} Kosmos-computer`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
