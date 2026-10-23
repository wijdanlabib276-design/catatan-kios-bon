/** @type {import('next').NextConfig} */
const nextConfig = {
  // Matikan strict mode di production agar tidak double-render
  reactStrictMode: false,
  // Aktifkan untuk menampilkan error lebih jelas
  swcMinify: true,
  // Izinkan import dari supabase (ESM)
  transpilePackages: [],
};

export default nextConfig;
