import { createWriteStream } from "fs";
const PATH = new URL("./files/fileToWrite.txt", import.meta.url);

const write = async () => {
    process.stdin.setEncoding("utf8");
    const stream = createWriteStream(PATH);
  
    process.stdin.on("data", (data) => {
      if (data.trim() === "end") {
        process.stdin.emit("end");
      } else {
        stream.write(`${data.trim()}\n`);
      }
    });
  
    process.stdin.on("end", () => {
      console.log("Read");
      process.stdin.pause();
      stream.end();
    });
    stream.on("finish", () => {
      console.log("Write");
    });
};

await write();