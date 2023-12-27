var { sleep } = require("../lib/util.js");

function typeglide({
  strings,
  typeSpeed = 50,
  backSpeed = 20,
  startDelay = 100,
  backDelay = 2000,
  loop = false,
  loopCount = 1,
  backspace = true,
  backspaceLastString = true,
  shuffle = false,
}) {
  return new Promise((resolve) => {

    let shuffledStrings = strings
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    
    async function typeString(index = 0) {
      if (index < strings.length) {
        if (!shuffle) {
          var string = strings[index];
        } else {
          // Shuffle the strings if `shuffle` is activated
          var string = shuffledStrings[index];
        }

        let counter = 0;

        await sleep(startDelay);

        while (counter < string.length) {
          // Typing simulator
          process.stdout.write(string[counter]);
          await sleep(typeSpeed);
          counter++;
        }

        await sleep(backDelay);

        if (backspace && !backspaceLastString && index == strings.length - 1) {
          process.stdout.write("\n");
          // We exit to prevent backspacing the last string
          process.exit();
        }

        if (backspace) {
          while (counter > 0) {
            // Backspace simulator
            process.stdout.write("\b \b");
            await sleep(backSpeed);
            counter--;
          }
        } else {
          process.stdout.write("\n");
        }

        index++;
        await sleep(startDelay);
        await typeString(index);
      } else if (loop && loopCounter < loopCount) {
        loopCounter++;
        typeString(0); // Start afresh
      } else {
        resolve();
      }
    }
    let loopCounter = 1;
    typeString(0);
  });
}

module.exports = typeglide;
