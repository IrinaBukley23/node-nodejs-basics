import { parentPort, Worker } from "worker_threads";
import os from "node:os";
const PATH = new URL("./worker", import.meta.url);

const performCalculations = async () => {
    const cpus = os.cpus();
    const promises = cpus.map((info, i) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(PATH);
      worker.postMessage(10 + i);
      worker.on("message", (msg) => {
        resolve(msg);
      });
    });
  });
  console.log(await Promise.allSettled(promises));
  process.exit();
};

await performCalculations();