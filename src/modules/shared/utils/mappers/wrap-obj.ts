export const wrapToObj =
  <K extends string | number>(key: K) =>
  <T = any>(v: T) =>
    ({
      [key]: v,
    } as { [P in K]: T });
