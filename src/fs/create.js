import { writeFile } from 'fs/promises';
import { existSync } from 'node:fs';

const STRING = 'Here soe text';
const PATH = './src/fs/files/fresh.txt';

const create = async () => {
    if (existSync(PATH)) {
        throw Error('Ooops, operation failed!!!');
    } else {
        try {
            await writeFile(PATH, STRING, {});
        } catch (err) {
            console.log('Error: ', err);
        }
    }
};

await create();