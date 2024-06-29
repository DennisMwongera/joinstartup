// import pkg from 'next/dist/compiled/webpack/webpack.js';
const webpack = require('webpack');
/** @type {import('next').NextConfig} */

const nextConfig = {

    output: 'export',
    distDir: 'docs',
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
         })
       );
       return config;
    }

        
};



module.exports = nextConfig

// export default nextConfig;
