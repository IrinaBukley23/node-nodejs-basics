import { createReadStream } from "node:fs";
const PATH = new URL("./files/fileToRead.txt", import.meta.url);

const read = async () => {
  const stream = createReadStream(PATH);
    stream.on("data", (chunk) => {
    process.stdout.write(`${chunk.toString()}\n`);
  });
  stream.on("end", () => {});
};

await read();