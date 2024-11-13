const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextConfig = {
  // Add any additional Next.js config options here
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = withPlugins([withImages], nextConfig);
