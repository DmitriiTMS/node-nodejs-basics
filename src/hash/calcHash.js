import crypto from "crypto";
import fs from "fs";

const calculateHash = async () => {
  const filePath = `${import.meta.dirname}\\files\\fileToCalculateHashFor.txt`;

  const hash = crypto.createHash("sha256");

  const fileStream = fs.createReadStream(filePath);

  fileStream.on("data", (chunk) => {
    hash.update(chunk);
  });

  fileStream.on("end", () => {
    const fileHash = hash.digest("hex");
    console.log(`SHA-256 hash: ${fileHash}`);
  });

  fileStream.on("error", (err) => {
    console.error("Error reading file:", err);
  });
};

await calculateHash();
