import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    image: {
        service: {
            entrypoint: "astro/assets/services/sharp",
        },
        // 画像の最適化設定
        domains: [],
        remotePatterns: [],
        format: ["webp", "avif", "png", "jpeg"],
        quality: 80, // 画質の設定（0-100）
        densities: [1, 2], // レスポンシブ画像の密度
    },
    // パフォーマンス最適化の設定
    build: {
        inlineStylesheets: "auto", // 小さなスタイルシートをインライン化
    },
    compressHTML: true, // HTMLを圧縮
    experimental: {
        optimizeHoistedScript: true, // スクリプトの最適化
    },
});
