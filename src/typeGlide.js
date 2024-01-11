const { sleep } = require("../lib/sleep")

function typeglide({
  strings = [],
  typeSpeed = 50,
  backSpeed = 20,
  startDelay = 100,
  backDelay = 2000,
  loop = false,
  loopCount = 1,
  backspace = true,
  backspaceLastString = true,
  shuffle = false,
  singleLine = false,
  seperator = "",
}) {
  return new Promise((resolve) => {
    let shuffledStrings = strings
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    async function typeString(index = 0) {
      if (index < strings.length) {
        let string, lastString, charCounter, sepChar;

        sepChar = 0;
        charCounter = 0;
        lastString = strings.length - 1;

        if (!shuffle) {
          string = strings[index];
        } else {
          // Shuffle the strings if `shuffle` is activated
          string = shuffledStrings[index];
        }

        await sleep(startDelay);

        while (charCounter < string.length) {
          // Typing simulator
          process.stdout.write(string[charCounter]);
          await sleep(typeSpeed);
          charCounter++;
        }

        await sleep(backDelay);

        if (backspace && !backspaceLastString && index == lastString) {
          process.stdout.write("\n");
          // We exit to prevent backspacing the last string
          process.exit();
        }

        if (backspace) {
          while (charCounter > 0) {
            // Backspace simulator
            process.stdout.write("\b \b");
            await sleep(backSpeed);
            charCounter--;
          }
        } else if (singleLine && !backspace && index != lastString) {
          // write strings out on a single line with a seperator between strings
          while (sepChar < seperator.length) {
            process.stdout.write(seperator[sepChar]);
            await sleep(typeSpeed);
            sepChar++;
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
