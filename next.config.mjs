/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The single /platform page split into the Business, Agency and
      // Developers surfaces. Agents were that page's default persona, so bare
      // /platform lands on Agency and the old in-page anchors map to whichever
      // surface absorbed each section.
      { source: "/platform", destination: "/agency", permanent: true },
    ];
  },
};

export default nextConfig;
