let spinner = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];

spinner.forEach((item, index) => {
  setTimeout(() => {
    process.stdout.write(item);
  }, 100 + index * 200);
});
