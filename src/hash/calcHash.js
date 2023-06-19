import { readFile } from "node:fs/promises";
const { createHash } = await import("node:crypto");
import path from "path";
const filePath = new URL("./files/fileToCalculateHashFor.txt", import.meta.url);

const calculateHash = async () => {
    const hash = createHash("sha256");

    try {
        const contents = await readFile(filePath);
        await hash.update(contents);
        console.log(`${`${hash.digest("hex")} ${path.basename(filePath.pathname)}`}`);
    } catch (err) {
        throw Error('Ooops, operation failed!!!');
    }
};

await calculateHash();