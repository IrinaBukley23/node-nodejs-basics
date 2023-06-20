import { createGunzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
const PATH = new URL("./files/archive.gz", import.meta.url);
const RES_PATH = new URL("./files/fileToCompress.txt", import.meta.url);

const decompress = async () => {
    const gzip = createGunzip();
    const source = createReadStream(PATH);
    const destination = createWriteStream(RES_PATH);
    try {
        await pipeline(source, gzip, destination);
    } catch (err) {
        throw Error('Ooops, operation failed!!!');
    }
};

await decompress();