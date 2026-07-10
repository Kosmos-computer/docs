import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  guideSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'guide/what-is-arco',
        'guide/getting-started',
        'guide/kosmos-vs-arco',
      ],
    },
    {
      type: 'category',
      label: 'Using Arco',
      items: [
        'guide/design-tokens',
        'guide/ui-primitives',
        'guide/layout-patterns',
        'guide/generative-blocks',
      ],
    },
  ],
  referenceSidebar: [
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/tokens',
        'reference/component-tiers',
        'reference/block-registry',
        'reference/standards-map',
      ],
    },
  ],
  sdkSidebar: [
    {
      type: 'category',
      label: 'SDK',
      items: [
        'sdk/overview',
        'sdk/getting-started',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'sdk/architecture',
        'sdk/agent-events',
        'sdk/auth',
      ],
    },
    {
      type: 'category',
      label: 'API reference',
      items: [
        'sdk/api/client',
      ],
    },
  ],
};

export default sidebars;
