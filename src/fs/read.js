import fs from "fs";

const read = async () => {
  const pathFileToRead = `${import.meta.dirname}\\files\\fileToRead.txt`;

  fs.stat(pathFileToRead, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      fs.readFile(pathFileToRead, "utf8", function (error, fileContent) {
        if (error) throw error;
        console.log(fileContent);
      });
    }
  });
};

await read();
