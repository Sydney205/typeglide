declare module "typeglide" {
  interface TypeOptions {
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

  function typeglide(options: TypeOptions): Promise<void>;

  export = typeglide;
}
