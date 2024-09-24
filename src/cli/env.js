const parseEnv = () => {
  const envVariables = process.env;

  const rssVariables = Object.entries(envVariables)
    .filter(([key]) => key.startsWith("RSS_"))
    .map(([key, value]) => `${key}=${value}`)
    .join("; ");

  if (rssVariables) {
    console.log(rssVariables);
  } else {
    console.log("No RSS_ environment variables found.");
  }
};

parseEnv();
