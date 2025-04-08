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
import typeglide from "typeglide";

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
import typeglide from "typeglide";

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
import typeglide from "typeglide";

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






lite-xl-terminal
lite-xl-terminal is a (mostly) fully-featured terminal emulator designed to slot into lite-xl as a plugin for windows (Windows 10+ only), mac and linux.

image

Description
A simple, and straightforward integrated terminal that presents itself as xterm-256color. Supports:

A configurable-length scrollback buffer.
Alternate buffer support for things like vim and htop.
Configurable color support.
Signal characters.
Configurable shell.
Selecting from terminal.
Copying from terminal.
UTF-8 support.
Terminal resizing.
Locked scrollback regions.
And more!
By default, will use $SHELL as your shell if present. If not, we will use sh on linux and mac (though this is configurable), and %COMSPEC% or c:\windows\system32\cmd.exe on windows.

Usage
You can activate the terminal as a docked view at the bottom of your editor by either pressing alt+t, or running the Terminal: Toggle Drawer command.

You can also put a TerminalView into your main viewing pane by using ctrl+shift+`  or by running the Terminal: Open Tab command. It can be closed with ctrl+shift+w.

Most commands that would normally be bound to ctrl+<key> in the editor can be accessed by ctrl+shift+<key> when the terminal has focus.

Supported Shells
The following shells are tested on each release to ensure that they actually function:

bash (Linux/Mac/Windows 10+)
dash (Linux/Mac)
zsh (Linux/Mac)
cmd.exe (Windows 10+)
More shells should work, but are not tested outright.

Installation
The easiest way to install lite-xl-terminal is to use lpm, and then run the following command:

lpm install terminal
If you want to simply try it out, you can use lpm's run command:

lpm run terminal
If you want to grab it directly, and build it from the repo, on Linux, Mac or MSYS on Windows you can do:

git clone --depth=1 https://github.com/adamharrison/lite-xl-terminal.git \
  --recurse-submodules --shallow-submodules && cd lite-xl-terminal && \
  ./build.sh && cp -R plugins/terminal ~/.config/lite-xl/plugins && \
  cp libterminal.so ~/.config/lite-xl/plugins/terminal
If you want to install on Windows, but don't have MSYS, you can download the files directly from our release page, download libterminal.x86_64-windows.dll, as well as the Source Code, and place both the dll, and the plugins/terminal/init.lua from the source code archive into your lite-xl plugins directory as plugins/terminal/init.lua and plugins/terminal/libterminal.x86_64-windows.dll.

Stanalone
If you want to use terminal as a standalone terminal, here's a handy script you can use:

LITE_SCALE=1 lpm run terminal --config 'config.plugins.treeview=false config.plugins.workspace=false config.always_show_tabs=false local _,_,x,y = system.get_window_size() system.set_window_size(800, 500, x, y) local TerminalView = require "plugins.terminal".class local old_close = TerminalView.close function TerminalView:close() old_close(self) os.exit(0) end core.add_thread(function() command.perform("terminal:open-tab") local node = core.root_view.root_node:get_node_for_view(core.status_view) node:close_view(core.root_view.root_node, core.status_view) end)'
Status
1.0 has been released. It should be functional on Windows 10+, Linux, and MacOS.

Building
As this is a native plugin, it requires building. Currently it has no dependencies other than the native OS libraries for each OS.

Linux, Mac, and Windows MSYS
./build.sh -g
Linux -> Windows
CC=x86_64-w64-mingw32-gcc BIN=libterminal.dll ./build.sh -g
About
A terminal plugin for lite-xl.

Resources
 Readme
License
 MIT license
 Activity
Stars
 42 stars
Watchers
 4 watching
Forks
 6 forks

