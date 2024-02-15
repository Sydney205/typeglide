# Typing ✈

### _Create typing effect on terminal_


[Installation](#📦-installation)

[Quick Start](#🚀-quick-start)

[Speeds and Delays](#speeds-and-delays-⏱⚡)

[Loops](#loops-🔁)

[Contributions](#contributions-🤝🏻)

[Extra features](#extra-features)

---

### 📦 Installation

_install with [npm](https://www.npmjs.com/)_:

```sh
npm install typing
```

### 🚀 Quick start

_`Jump into action`_

```js
const typing = require("typing");

var myArray = [
  "Good morning",
  "How are you today?",
  "Would you like a cup of coffee?",
];

typing({
  strings: myArray,
});
```

---

### Speeds and Delays ⏱⚡

_`Customize typing and backspacing speed including delays`_

```js
const typing = require("typing");

typing({
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
const typing = require("typing");

typing({
  strings: myArray,
  // Activating the loops
  loop: true,
  // Number of times you want to loop
  loopCount: 3,
});
```

<br>

### _Extra features:_
<br>


| Name  | Required | Default  | Description |
| ------------- | ------------- | ------------- | ------------- |
| backspace(bool) | no | true | Disable backspace to type each string on a new line |
| backspaceLastString(bool) | no | true | Whether to backspace last string on the array |
| shuffle(bool) | no | false | Shuffle the strings on the array |
| singleLine(bool) | no | false | Types strings on a single line |
| seperator(string) | when `singleLine` is activated | space | Seperate strings on single line |

<br>

## Contributions 🤝🏻

**Have any features you wish to add?...** Make a [pull request](https://github.com/Sydney205/typing/pulls) to the repository on github.<br>
Feel free to create [issues](https://github.com/Sydney205/typing/issues) or provide feedbacks!.

### Author:

[Sydney205](https://github.com/Sydney205)

## License 📄

Copyright (c) 2023 Dieke Sydney

