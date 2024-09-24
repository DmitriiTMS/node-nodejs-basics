import fs from "fs";

const remove = async () => {
  const pathFileToDelete = `${import.meta.dirname}\\files\\fileToRemove.txt`;

  fs.stat(pathFileToDelete, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    } else {
        fs.unlink(pathFileToDelete, err => {
            if(err) throw err;
         });
    }
  });
};

await remove();
