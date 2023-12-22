/** @type {import('next').NextConfig} */

const PREFIX = process.env.NEXT_PUBLIC_PATH_PREFIX;
const assetPrefix = `${PREFIX}/`
const basePath = `${PREFIX}`

const nextConfig = { 
    output: "export",
    assetPrefix: assetPrefix,
    basePath: basePath,
    reactStrictMode: false,
    trailingSlash: true,
    reactStrictMode: false
};
module.exports = nextConfig;
console.log("nextConfig", nextConfig);
