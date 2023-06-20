import { mkdir, access, copyFile, readdir } from "node:fs/promises";
const copyFolder = new URL("./files_copy/", import.meta.url);
const origin = new URL("./files/", import.meta.url);

const copy = async () => {
    try {
        await access(origin);
        await mkdir(copyFolder, { recursive: false });
        const sources = await readdir(origin, { withFileTypes: true });
        for (const source of sources) {
          await copyFile(
            new URL(source.name, origin),
            new URL(source.name, copyFolder)
          );
        }
      } catch (err) {
        throw Error('Ooops, operation failed!!!');
      }
};

await copy();
