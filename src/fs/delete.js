import { unlink } from "node:fs/promises";
const removedFile = new URL("./files/fileToRemove.txt", import.meta.url);

const remove = async () => {
    try {
        await unlink(removedFile);
      } catch (err) {
        throw Error('Ooops, operation failed!!!');
      }
};

await remove();