const { sleep } = require("../utils/sleep");

function typing({
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
  seperator = " ",
}) {
  return new Promise((resolve) => {
    const shuffleString = strings
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    async function typeString(i = 0) {
      if (i < strings.length) {
        let str, lastString;
        let j = 0; let k = 0

        lastString = strings.length - 1;

        if (!shuffle) {
          str = strings[i];
        } else {
          str = shuffleString[i];
        }

        await sleep(startDelay);

        while (j < str.length) {
          process.stdout.write(str[j]);
          await sleep(typeSpeed);
          j++;
        }

        if (backspace && !backSpaceLastString && i == lastString) {
          process.stdout.write("\n");
          process.exit(); // we exit to prevent backspacing the last string
        }


        if (backspace) {
          await sleep(backDelay);

          while (j > 0) {
            process.stdout.write("\b \b");
            await sleep(backSpeed);
            j--;
          }
        } else if (!backspace && singleLine && i != lastString) {
          await sleep(delayBetweenStrings)

          while (k < seperator.length) {
            process.stdout.write(seperator[k]);
            await sleep(typeSpeed);
            k++;
          }
        } else {
          process.stdout.write("\n");
        }

        i++;
        await sleep(startDelay);
        await typeString(i);
      } else if (loop && loopCounter < loopCount) {
        loopCounter++;
        typeString(0);
      } else {
        resolve();
      }
    }
    let loopCounter = 1;
    typeString(0);
  });
}

module.exports = typing

