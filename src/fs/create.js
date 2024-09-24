import fs  from 'fs'
import path from "path";
import { fileURLToPath } from "url";

const create = async () => {

  const fileName = fileURLToPath(import.meta.url);
  const dirName = path.dirname(fileName);
  const pathToFresh = path.join(dirName, 'files', 'fresh.txt');

  fs.stat(pathToFresh, function (err) {
    if (err) {
      fs.writeFile(pathToFresh, "I am fresh and young", (err) => {
        if (err) return err;
      });
    } else {
      throw new Error("FS operation failed");
    }
  });
};

await create();
