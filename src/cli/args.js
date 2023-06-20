const parseArgs = () => {
    const { argv } = process;
  for (let i = 2; i < argv.length; i += 2) {
    console.log(`${argv[i]} is ${argv[i + 1]}`);
  }
};

parseArgs();