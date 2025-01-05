import { newtClient } from './newt.js';

export async function fetchCasts() {
    const response = await newtClient.getContents({
        appUid: "cast",
        modelUid: "cast",
    });
    const casts = response.items;

    return {casts};
}
