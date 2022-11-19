type First<T extends any[]> = T extends [infer head, ...infer _] ? head : never
