/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'π― ζ―ζ₯δΊ§εθζ΄',
  tagline: 'π― ζ―ζ₯δΊ§εθζ΄',
  url: 'https://mayandev.top/product-thinking',
  baseUrl: '/product-thinking/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'mayandev', // Usually your GitHub org/user name.
  projectName: 'product-thinking', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'ζ―ζ₯δΊ§εθζ΄',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/mayandev/product-thinking',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    copyright: `Copyright Β© ${new Date().getFullYear()} Product Thinking, Inc. Built with Docusaurus.`,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/mayandev/product-thinking/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/mayandev/product-thinking/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
