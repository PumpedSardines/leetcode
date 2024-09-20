import { LeetCode, fetcher } from "leetcode-query";
import { chromium } from "playwright-extra";
import stealth from "puppeteer-extra-plugin-stealth";

import fs from "fs/promises";
import os from "os";
import path from "path";

const tempDir = os.tmpdir();
const leetCodeTempDir = path.join(tempDir, "leetcode-daily");

await fs.mkdir(leetCodeTempDir).catch(() => {});
const cache = JSON.parse(
  await fs.readFile(path.join(leetCodeTempDir, "cache.json")).catch(() => "{}"),
);
const todayKey = new Date().toISOString().split("T")[0];

function printProblem(problem) {
  console.log("Id:         ", problem.question.questionFrontendId);
  console.log("Title:      ", problem.question.title);
  console.log(
    "Slug:       ",
    problem.question.title
      .split(" ")
      .map((v) => capitalize(v))
      .join(""),
  );
  console.log("Difficulty: ", problem.question.difficulty);
}

if (cache[todayKey]) {
  printProblem(cache[todayKey]);
  process.exit(0);
}

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

// const tempFilePath = path.join(newTempDir, "example.txt");
// fs.writeFileSync(tempFilePath, "This is a temporary file.");

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

cache[todayKey] = daily;
await fs.writeFile(
  path.join(leetCodeTempDir, "cache.json"),
  JSON.stringify(cache),
);

printProblem(daily);
