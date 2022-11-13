/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // NOTE: https://stackoverflow.com/a/70047180
  images: {
    loader: 'akamai',
    path: '',
  }
}

module.exports = nextConfig
