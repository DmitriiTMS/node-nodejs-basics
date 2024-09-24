import fs from "fs";

const rename = async () => {
  const pathFileToRename = `${import.meta.dirname}\\files\\wrongFilename.txt`;
  const pathFileRename = `${import.meta.dirname}\\files\\properFilename.md`;

  fs.stat(pathFileToRename, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      fs.stat(pathFileRename, (err) => {
        if (err) {
          fs.rename(pathFileToRename, pathFileRename, (err) => {
            if (err) throw err;
          });
        } else {
          throw new Error("FS operation failed");
        }
      });
    }
  });
};

await rename();
