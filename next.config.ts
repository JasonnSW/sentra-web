import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ⛔ Abaikan error ESLint saat build
  },
  // config lainnya di sini...
};

export default nextConfig;
