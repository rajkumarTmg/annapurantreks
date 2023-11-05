/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "annapurnatrek.abhiyantraconsulting.com.np",
      "nawapaila.org.np",
      "cmslog.annapurnatreks.com",
      "cms.annapurnatreks.com",
    ],
    // unoptimized: true,
  },
};

module.exports = nextConfig;
