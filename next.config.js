/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // fixes next-mdx-remote: Package path ./jsx-runtime.js is not exported from package react
      // https://github.com/hashicorp/next-mdx-remote/issues/237
      'react/jsx-runtime.js': require.resolve('react/jsx-runtime'),
    };
    return config;
  },
  /* In node_modules/next-mdx-remote/dist/index.js I changed:
     "import * as runtime from 'react/jsx-runtime.js';" to
     "import * as runtime from 'react/jsx-runtime';"
     and added the above webpack section which has resolved the error.
     solution found at: https://github.com/hashicorp/next-mdx-remote/issues/237
     */
};

module.exports = nextConfig;
