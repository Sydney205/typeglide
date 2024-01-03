declare module "typeglide" {
  interface TypeOptions {
    /** An array of strings to be typed. */
    strings: string[];
    /** The typing speed in milliseconds. */
    typeSpeed?: number | undefined;
    /** The backspacing speed in milliseconds  */
    backSpeed?: number | undefined;
    /** The delay before starting to type in milliseconds */
    startDelay?: number | undefined;
    /** The delay before backspacing in milliseconds */
    backDelay?: number | undefined;
    /** Whether to loop through the strings on the array */
    loop?: boolean | undefined;
    /** The number of time to loop if looping is activated */
    loopCount?: number | undefined;
    /** Whether to backspace after typing each string. Set to false to type each string on a new line */
    backspace?: boolean | undefined;
    /** Whether to backspace after the last string */
    backspaceLastString?: boolean | undefined;
    /** Shuffle the strings on the array */
    shuffle?: boolean | undefined;
  }

  /**
   * Typeglide - Create typing effect on terminal
   * @version typeglide@1.0.0
   */
  function typeglide(options: TypeOptions): Promise<void>;

  export = typeglide;
}

