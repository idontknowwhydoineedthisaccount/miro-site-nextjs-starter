const withTM = require('next-transpile-modules')(['@miro-site/core', '@miro-site/design-tokens'])

const withPlugins = require('next-compose-plugins')

const withFonts = require('next-fonts')

const withImages = require('next-optimized-images')

const nextConfig = {
  enableSvg: true,
}

module.exports = withPlugins(
  [
    withFonts,
    withTM,
    [
      withImages,
      {
        optimizeImages: false,
      },
    ],
  ],
  nextConfig,
)
