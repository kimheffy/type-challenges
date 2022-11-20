// To learn more about this: 
// check out https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#distributive-conditional-types 
type MyExclude<T, U> = T extends U ? never : T;
