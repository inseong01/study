/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'shopping-phinf.pstatic.net',
      },
    ],
  },
};

export default nextConfig;
