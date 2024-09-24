import fs from "fs";

const list = async () => {
  const pathFileToDelete = `${import.meta.dirname}\\files`;

  fs.stat(pathFileToDelete, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      fs.readdir(pathFileToDelete, (err, files) => {
        if (err) throw err;
        console.log(files);
      });
    }
  });
};

await list();
