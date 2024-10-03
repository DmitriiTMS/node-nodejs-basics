import fs from "fs";

const read = async () => {
    
  const readStream = fs.createReadStream(
    `${import.meta.dirname}\\files\\fileToRead.txt`,
    { encoding: "utf8" }
  );

  readStream.on("data", (chunk) => {
    process.stdout.write(chunk.toString());
  });

  readStream.on("error", (err) => {
    console.error("Ошибка чтения файла:", err);
  });

  readStream.on("end", () => {
    console.log('\n');
  });
};

await read();
