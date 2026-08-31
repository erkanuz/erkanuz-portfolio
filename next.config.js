/** @type {import('next').NextConfig} */
const nextConfig = {
    allowedDevOrigins: ['192.168.0.101'],
    reactStrictMode: true,
    images: {
        domains: ['images.pexels.com', 'user-images.githubusercontent.com'],
    },
}

module.exports = nextConfig