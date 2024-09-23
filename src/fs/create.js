import fs from "fs";

const create = async () => {
  const path = import.meta.dirname;

  fs.stat(`${path}/files/fresh.txt`, function (err) {
    if (err) {
      fs.writeFile(`${path}/files/fresh.txt`, "I am fresh and young", (err) => {
        if (err) return err;
      });
    } else {
      throw new Error("FS operation failed");
    }
  });
};

await create();
