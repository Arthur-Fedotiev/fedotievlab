import path, { join } from "path";
import fs from "fs";

import { POSTS_PATH } from "./constants";

const getOne = (slug: string, format = "mdx"): Buffer => {
  const postFilePath = join(POSTS_PATH, `${slug}.${format}`);
  return fs.readFileSync(postFilePath);
};

const getMany = () =>
  getPathsSync().map((entityPath) =>
    fs.readFileSync(path.join(POSTS_PATH, entityPath), "utf-8")
  );

const getPostTitles = (): string[] =>
  getPathsSync().map((path) => path.replace(/\.(md|mdx)$/, ""));

export default {
  getPostTitles,
  getOne,
  getMany,
};

function getPathsSync() {
  return fs.readdirSync(POSTS_PATH);
}
