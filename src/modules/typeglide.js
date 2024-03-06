const { sleep } = require("../utils/sleep");
const keyMap = require("../utils/keywords");
const highlight = require("./highlight");

function typeglide({
  strings,
  typeSpeed = 50,
  backSpeed = 20,
  startDelay = 100,
  backDelay = 2000,
  delayBetweenStrings = 1000,
  loop = false,
  loopCount = 1,
  backspace = true,
  backSpaceLastString = true,
  shuffle = false,
  singleLine = false,
  separator = " ",
  codeHighlight = false,
}) {
  return new Promise((resolve) => {
    async function typeString(i = 0) {
      if (i < strings.length) {
        let lastString;
        let j = 0;
        let k = 0;

        lastString = strings.length - 1;

        const str = shuffle
          ? shuffleString[i]
          : codeHighlight
          ? highlight(strings[i], keyMap, 32)
          : strings[i];

        await sleep(startDelay);

        while (j < str.length) {
          process.stdout.write(str[j]);
          await sleep(typeSpeed);
          j++;
        }

        if (backspace && !backSpaceLastString && i === lastString) {
          process.stdout.write("\n");
          process.exit(); // We exit to prevent backspacing on laststring
        }

        if (backspace) {
          await sleep(backDelay);

          while (j > 0) {
            process.stdout.write("\b \b");
            await sleep(backSpeed);
            j--;
          }
        } else if (!backspace && singleLine && i !== lastString) {
          await sleep(delayBetweenStrings);

          while (k < separator.length) {
            process.stdout.write(separator[k]);
            await sleep(typeSpeed);
            k++;
          }
        } else {
          process.stdout.write("\n");
        }

        // Move to the next string and recursively call the function
        i++;
        await sleep(startDelay);
        await typeString(i);
      } else if (loop && loopCounter < loopCount) {
        loopCounter++;
        typeString(0);
      } else {
        // Resolve the promise when finished
        resolve();
      }
    }

    // Shuffle the strings if required
    const shuffleString = strings
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    let loopCounter = 1;

    // Kick start
    typeString(0);
  });
}

module.exports = typeglide;
