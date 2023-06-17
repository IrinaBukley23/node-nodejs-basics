import { readFile } from "node:fs/promises";
const filePath = new URL("./files/fileToRead.txt", import.meta.url);

const read = async () => {
    try {
        const contents = await readFile(filePath);
        console.log(contents.toLocaleString());
      } catch (err) {
        throw Error('Ooops, operation failed!!!');
      }
};

await read();