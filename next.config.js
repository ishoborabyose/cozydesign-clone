/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "assets.website-files.com",
      "res.cloudinary.com",
      "agencyvista.com",
      "upcity-marketplace.s3.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
