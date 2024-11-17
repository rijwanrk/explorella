/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
        // protocol: "http",
        // hostname: process.env.NEXT_PUBLIC_BASE_URL?.replace("http://", "").replace("https://", ""),
        // port: "",
        // pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,PATCH,POST" },
        ],
      },
    ];
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       headers: [
  //         { key: "Access-Control-Allow-Credentials", value: "true" },
  //         { key: "Access-Control-Allow-Origin", value: "*" },
  //         { key: "Access-Control-Allow-Methods", value: "GET,PATCH,POST,PUT,DELETE" },
  //         { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
  //       ],
  //     },
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         { key: "Content-Security-Policy", value: "default-src 'self'; img-src 'self' data: https:;" },
  //         { key: "X-Frame-Options", value: "DENY" },
  //         { key: "X-Content-Type-Options", value: "nosniff" },
  //         { key: "Referrer-Policy", value: "no-referrer" },
  //       ],
  //     },
  //   ];
  // },

};

module.exports = nextConfig;



// next.config.js

