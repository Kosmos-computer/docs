import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  kosmosSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'kosmos/what-is-kosmos',
        'kosmos/concepts',
      ],
    },
    {
      type: 'category',
      label: 'Kosmos Cloud',
      items: [
        'kosmos/cloud-get-instance',
        'kosmos/cloud-sign-in',
        'kosmos/cloud-desktop-connect',
        'kosmos/cloud-billing',
        'kosmos/cloud-usage-credits',
      ],
    },
    {
      type: 'category',
      label: 'Run it yourself',
      items: [
        'kosmos/run-locally',
        'kosmos/self-host',
      ],
    },
  ],
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
