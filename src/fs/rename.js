import fs from 'node:fs/promises';

const prev = new URL("./files/wrongFilename.txt", import.meta.url);
const next = new URL("./files/properFilename.md", import.meta.url);

const rename = async () => {
    try {
        await fs.access(next);
        throw Error('The file has already created.');
    } catch (err) {
        throw Error('Ooops, operation failed!!!');
    }
};

await rename();