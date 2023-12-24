// Sleeper
var { sleep } = require("../lib/util.js");

/**
 *
 * TypeGlide - Typing effect on terminal
 *
 * @param {object} options - Object options for typeout
 * @param {string[]} options.strings - An array of strings to be typed.
 * @param {number} [options.typeSpeed=50] - The typing speed in milliseconds.
 * @param {number} [options.backSpeed=50] - The backspacing speed in milliseconds.
 * @param {number} [options.startDelay=100] - The delay before starting to type in milliseconds.
 * @param {number} [options.backDelay=2000] - The delay before backspacing in milliseconds.
 * @param {boolean} [options.loop=false] - Whether to loop through the strings.
 * @param {number} [options.loopCount=1] - The number of times to loop if looping is activated.
 * @param {boolean} [options.backspace=true] - Whether to backspace after each string.
 * @param {boolean} [options.backspaceLastString=true] - Whether to backspace after the last string.
 * @returns
 */
function typeglide({
  strings,
  typeSpeed = 50,
  backSpeed = 50,
  startDelay = 100,
  backDelay = 2000,
  loop = false,
  loopCount = 1,
  backspace = true,
  backspaceLastString = true,
}) {
  return new Promise((resolve) => {
    async function typeString(index = 0) {
      if (index < strings.length) {
        const string = strings[index];
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
          // We exit to prevent backspace on the last string
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
