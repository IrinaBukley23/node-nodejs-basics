import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
const PATH = new URL("./files/fileToCompress.txt", import.meta.url);
const RES_PATH = new URL("./files/archive.gz", import.meta.url);

const compress = async () => {
    try {
        const gzip = createGzip();
        const source = createReadStream(PATH);
        const destination = createWriteStream(RES_PATH);
        await pipeline(source, gzip, destination);
      } catch (error) {
        throw Error('Ooops, operation failed!!!');
      }
};

await compress();