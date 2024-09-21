import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    const redirects = [
      "better-testing",
      "custom-text-field",
      "dynamic-vue-components",
      "easiest-way-to-use-query-param",
      "how-to-test-responsive-components",
      "npm-specific-package-version",
      "scrape-chinese",
      "things-i-learned-from-amazon",
      "typescript-template",
      "vue-snackbar",
      "what-is-closure",
      "why-i-decided-to-be-a-software-engineer",
      "why-i-switched-to-react-new",
      "why-i-switched-to-react",
      "yarn-monorepo",
    ];
    return redirects.map((path) => ({
      source: `/${path}`,
      destination: `/posts/${path}`,
      permanent: true,
    }));
  },
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default withContentlayer(nextConfig);
