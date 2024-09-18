declare function o(): void;

type prop = `--${string}`;
declare const prop: (prop: prop) => string | undefined | Error;

export { o as default, prop };
