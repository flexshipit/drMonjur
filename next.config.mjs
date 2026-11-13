/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["10.247.231.228", "localhost", "127.0.0.1"],
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
