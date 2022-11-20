import type { Equal } from '@type-challenges/utils';

type Includes<T extends readonly any[], U> = T extends [infer head, ...infer tail] ? Equal<head, U> extends true ? true : Includes<tail, U> : false 
