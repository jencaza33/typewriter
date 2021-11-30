const typewriter = function(sentence) {
  let delay = 0;
  const increment = 500;
  for (let i of sentence) {
    setTimeout(() => {
      process.stdout.write(i);
    },delay);
    delay += increment;
  }
};
typewriter("Hello world");