import { LeetCode, fetcher } from "leetcode-query";
import { chromium } from "playwright-extra";
import stealth from "puppeteer-extra-plugin-stealth";

// setup browser
const _browser = chromium.use(stealth()).launch();
const _page = _browser
  .then((browser) => browser.newPage())
  .then(async (page) => {
    await page.goto("https://leetcode.com");
    return page;
  });

// use a custom fetcher
fetcher.set(async (...args) => {
  const page = await _page;

  const res = await page.evaluate(async (args) => {
    const res = await fetch(...args);
    return {
      body: await res.text(),
      status: res.status,
      statusText: res.statusText,
      headers: Object.fromEntries(res.headers),
    };
  }, args);

  return new Response(res.body, res);
});

// use as normal
const lc = new LeetCode();
const daily = await lc.daily();
await _browser.then((browser) => browser.close());

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

console.log("Id:         ", daily.question.questionFrontendId);
console.log("Title:      ", daily.question.title);
console.log(
  "Slug:       ",
  daily.question.title
    .split(" ")
    .map((v) => capitalize(v))
    .join(""),
);
console.log("Difficulty: ", daily.question.difficulty);
