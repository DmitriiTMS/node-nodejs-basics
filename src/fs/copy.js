import fs from "fs";

const copy = async () => {
  const filesfolderPath = import.meta.dirname + "\\files";

  const filesCopyfolderPath = import.meta.dirname + "\\files_copy";

  fs.access(filesfolderPath, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      fs.access(filesCopyfolderPath, (err) => {
        if (err) {
          fs.cp(
            filesfolderPath,
            filesCopyfolderPath,
            { recursive: true },
            (err) => {
              return err;
            }
          );
        } else {
          throw new Error("FS operation failed");
        }
      });
    }
  });
};

await copy();
