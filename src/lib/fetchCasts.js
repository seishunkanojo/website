import { newtClient } from "./newt.js";

// キャッシュ用のオブジェクト
let castsCache = null;
let lastFetchTime = 0;
const CACHE_DURATION = 1000 * 60 * 5; // 5分間キャッシュを有効にする

export async function fetchCasts() {
    const currentTime = Date.now();

    // キャッシュが有効な場合はキャッシュを返す
    if (castsCache && currentTime - lastFetchTime < CACHE_DURATION) {
        return castsCache;
    }

    // キャッシュがない場合や期限切れの場合は新しくデータを取得
    const response = await newtClient.getContents({
        appUid: "cast",
        modelUid: "cast",
    });
    const casts = response.items;

    // キャッシュを更新
    castsCache = { casts };
    lastFetchTime = currentTime;

    return castsCache;
}
