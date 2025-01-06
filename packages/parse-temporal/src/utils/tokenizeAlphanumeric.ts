export const tokenizeAlphanumeric = (s: string): string[] =>
  s.split(/[^\dA-Za-z]+/);
