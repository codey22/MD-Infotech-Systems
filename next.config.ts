import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "images.unsplash.com" },
            { protocol: "https", hostname: "plus.unsplash.com" },
            { protocol: "https", hostname: "cdn.pixabay.com" },
            { protocol: "https", hostname: "assets.codepen.io" },
            { protocol: "https", hostname: "images.pexels.com" },
        ],
    },
    devIndicators: {
        // @ts-ignore
        appIsrStatus: false,
        // @ts-ignore
        buildActivity: false,
        // @ts-ignore
        staticIndicator: false,
    },
};

export default nextConfig;
