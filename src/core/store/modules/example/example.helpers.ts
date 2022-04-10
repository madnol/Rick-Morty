import { ExampleValue } from './example.types';

// Put here any helper you may need for this module to work

// A fake helper just as an example
export const generateExampleValues = (list: string[]): ExampleValue[] =>
  list.map(foo => ({ foo }));
