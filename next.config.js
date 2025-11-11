const repoName = 'Demo-Webpage';
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const defaultBasePath = isGithubActions ? `/${repoName}` : '';
const basePath =
  typeof process.env.NEXT_PUBLIC_BASE_PATH === 'string'
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : defaultBasePath;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'gh-pages-export',
  basePath,
  assetPrefix: basePath,
  
  images: {
    unoptimized: true,
    formats: ['image/webp'],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  
  // Disable ESLint errors during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Disable server-side rendering for the form
  experimental: {
    serverActions: {
      allowedOrigins: [],
    },
  },
  
  // Enable compression for better performance
  compress: true,
  poweredByHeader: false,
  
  // Add security headers for better SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; frame-src 'self' https://mapy.com; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob:; connect-src 'self';",
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/optimized/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig 
