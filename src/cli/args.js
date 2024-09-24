const parseArgs = () => {
  const args = process.argv.slice(2);

  console.log(args);

  const parsedArgs = {};

  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith("--")) {
      const propName = args[i].slice(2);
      const value = args[i + 1];
      parsedArgs[propName] = value;
      i++;
    }
  }
  const output = Object.entries(parsedArgs)
    .map(([key, value]) => `${key} is ${value}`)
    .join(", ");

  console.log(output);
};

parseArgs();
