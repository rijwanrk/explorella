// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "placehold.co",
//         port: "",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "res.cloudinary.com",
//         port: "",
//         pathname: "/**",
//       },
//       {
//         protocol: "http",
//         hostname: "localhost",
//         port: "3000",
//         pathname: "/**",
//       },
//     ],
//   },
//   async headers() {
//     return [
//       {
//         source: "/api/:path*",
//         headers: [
//           { key: "Access-Control-Allow-Credentials", value: "true" },
//           { key: "Access-Control-Allow-Origin", value: "*" },
//           { key: "Access-Control-Allow-Methods", value: "GET,PATCH,POST" },
//         ],
//       },
//     ];
//   },
// };

// module.exports = nextConfig;

const isProd = process.env.NODE_ENV === "production";
const prodDomain = "https://explorella.onrender.com";

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
      ...(isProd
        ? [
            {
              protocol: "https",
              hostname: "explorella.onrender.com",
              port: "",
              pathname: "/**",
            },
          ]
        : []),
    ],
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: isProd ? prodDomain : "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, PATCH, POST, OPTIONS",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

