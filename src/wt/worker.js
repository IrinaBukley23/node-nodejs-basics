import { parentPort } from "worker_threads";

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    parentPort.on("message", (num) => {
        const n = parseInt(num, 10);
        if (!isNaN(n)) {
          parentPort.postMessage({ status: "resolved", data: nthFibonacci(n) });
        } else {
          parentPort.postMessage({ status: "error", data: null });
        }
      });
      parentPort.on("error", () => {
        parentPort.postMessage({ status: "error", data: null });
      });
};

sendResult();