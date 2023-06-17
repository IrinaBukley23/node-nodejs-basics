import { access, readdir } from "node:fs/promises";
const folder = new URL("./files/", import.meta.url);

const list = async () => {
    try {
        await access(folder);
        const sources = await readdir(folder, { withFileTypes: true });
        for (const source of sources) {
          console.log(source.name);
        }
      } catch (err) {
        throw Error('Ooops, operation failed!!!');
      }
};

await list();