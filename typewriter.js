const typeWriter = function() {
  const sentence = "hello there from lighthouse labs.";
  let timeout = 0
  for (const char of sentence) {
    setTimeout(
      function() {
        process.stdout.write(char);
      }, timeout);
      timeout += 50;
    
  }
  setTimeout(function(){
    console.log("")
  },timeout);
}

typeWriter();