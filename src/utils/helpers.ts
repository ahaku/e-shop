export const deepCopy = <T extends unknown>(obj: T): T =>
  JSON.parse(JSON.stringify(obj));
