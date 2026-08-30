/** @type {import('next').NextConfig} */
const nextConfig = {
    allowedDevOrigins: ['192.168.0.103', '192.168.0.104', '192.168.0.105'],
    reactStrictMode: true,
    images: {
        domains: ['images.pexels.com', 'user-images.githubusercontent.com'],
    },
}

module.exports = nextConfig