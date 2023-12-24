declare module 'typeout' {
  interface TypeoutOptions {
    strings: string[];
    typeSpeed?: number | undefined;
    backSpeed?: number | undefined;
    startDelay?: number | undefined;
    backDelay?: number | undefined;
    loop?: boolean | undefined;
    loopCount?: number | undefined;
    backspace?: boolean | undefined;
    backspaceLastString?: boolean | undefined;
  }

  function typeout(options: TypeoutOptions): Promise<void>;

  export = typeout;
}
