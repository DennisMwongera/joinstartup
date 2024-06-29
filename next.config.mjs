import pkg from 'next/dist/compiled/webpack/webpack.js';
const { webpack } = pkg;
/** @type {import('next').NextConfig} */

const nextConfig = {

    output: 'export',
    distDir: 'build',
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

export default nextConfig;
