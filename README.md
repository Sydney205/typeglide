# Typeglide

### [![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=34B1F7&random=false&width=435&lines=Create+typing+effect+on+terminal)](https://git.io/typing-svg)

[Installation](#📦-installation)

[Quick Start](#🚀-quick-start)

[Speeds and Delays](#speeds-and-delays-⏱⚡)

[Loops](#loops-🔁)

[Contributions](#contributions-🤝🏻)

[Extra features](#typeglide-also-supprts-other-features-like)

---

### 📦 Installation

_install with [npm](https://www.npmjs.com/)_:

```sh
npm install typeglide
```

### 🚀 Quick start

_`Jump into action`_

```js
const typeglide = require("typeglide");

var myArray = [
  "Good morning",
  "How are you today?",
  "Would you like a cup of coffee?",
];

typeglide({
  strings: myArray,
});
```

---

### Speeds and Delays ⏱⚡

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

### Loops 🔁

_`Make loops...`_

```js
const typeglide = require("typeglide");

typeglide({
  strings: myArray,
  // Activating loop
  loop: true,
  // Number of times you want to loop
  loopCount: 3,
});
```

<br>

### _Extra features:_

<br>

| Name                      | Required                       | Default      | Description                                         |
| ------------------------- | ------------------------------ | ------------ | --------------------------------------------------- |
| backspace(bool)           | no                             | true         | Disable backspace to type each string on a new line |
| backspaceLastString(bool) | no                             | true         | Whether to backspace last string on the array       |
| shuffle(bool)             | no                             | false        | Shuffle the strings on the array                    |
| singleLine(bool)          | no                             | false        | Types strings on a single line                      |
| seperator(string)         | when `singleLine` is activated | empty string | Seperate strings on single line                     |

<br>

## Contributions 🤝🏻

**Have any features you wish to add?...** Make a [pull request](https://github.com/Sydney205/typeglide/pulls) to the repository on github.<br>
Feel free to create [issues](https://github.com/Sydney205/typeglide/issues) or provide feedbacks!.

### Author:

[Sydney205](https://github.com/Sydney205)

## License 📄

Copyright (c) 2024 Dieke Sydney
