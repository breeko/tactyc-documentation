/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Tactyc Support Center',
  tagline: 'No-code platform to turn spreadsheets into web apps',
  url: 'https://tactycHQ.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tactycHQ', // Usually your GitHub org/user name.
  projectName: 'tactycHQ.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Tactyc Support Center',
      logo: {
        alt: 'Tactyc Logo',
        src: 'img/tactyc_icon.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'api', label: 'API', position: 'left'},
        {
          href: 'https://github.com/tactycHQ/tactycHQ.github.io',
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
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Issues',
              href: 'https://github.com/tactycHQ/tactyc-documentation/issues/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/tactycHQ',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/tactycHQ/tactyc-documentation',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tactyc, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
