/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['de', 'dk', 'en'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
