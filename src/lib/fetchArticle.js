import { newtClient } from "./newt";

export async function fetchArticles() {
    const response = await newtClient.getContents({
        appUid: "article",
        modelUid: "article",
        query: {
            select: ["title", "slug", "body", "coverImage", "_sys"],
        },
    });
    const articles = response.items;
    return { articles };
}
