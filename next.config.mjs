/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
        pathname: "**"
      }
    ]
  }
};

export default nextConfig;
