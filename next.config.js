/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/blog",
        destination: "https://44zx10bwsj.execute-api.us-west-1.amazonaws.com/dev/api/v1/blog",
      },
    ];
  }
}

module.exports = nextConfig
