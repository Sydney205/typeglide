# TypeGlide

_`Create typing effect on terminal`_

---

[Installation](#installation)

[Quick Start](#quick-start)

[Speeds and Delays](#speeds-and-delays)

[Loops](#loops)

[Contributions](#contributions)

---

### Installation

_install with [npm](https://www.npmjs.com/)_:

```sh
npm install typeglide
```

### Quick start

_`Jump into action`_

```js
const typeglide = require("typeglide");

var myArray = [
  "Good morning",
  "How are you today?",
  "Would you like a cup of coffee?",
];

typeglide({
  strings: myArrays,
});
```

---

### Speeds and Delays

_`Customize typing and backspacing speed including delays`_

```js
const typeglide = require("typeglide");

typeglide({
  // Strings to be typed
  strings: myArray,
  // Typing speed
  typeSpeed: 70,
  // Backspacing speed
  backSpeed: 50,
  // start Delay
  startDelay: 10,
  // Backspacing delay
  backDelay: 100,
});
```

---

### Loops

_`Make loops...`_

```js
const typeglide = require("typeglide");

typeglide({
  strings: myArray,
  // Activating the loops
  loop: true,
  // Number of times you want to loop
  loopCount: 3,
});
```

#### _`And Many more...`_

<br>
<br>

## Contributions

**Have any features you wish to add?...** Make a [pull request](https://github.com/Sydney205/typeglide/pulls) to the repository on github.<br>
Feel free to create [issues](https://github.com/Sydney205/typeglide/issues) or provide feedbacks

### Author:

[Sydney205](https://github.com/Sydney205)

## License

Copyright (c) 2023 Dieke Sydney
