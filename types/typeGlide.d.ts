declare module 'typeglide' {
  interface TypeOptions {
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    startDelay?: number;
    backDelay?: number;
    loop?: boolean;
    loopCount?: number;
    backspace?: boolean;
    backspaceLastString?: boolean;
  }

  function typeglide(options: TypeOptions): Promise<void>;

  export = typeglide;
}
