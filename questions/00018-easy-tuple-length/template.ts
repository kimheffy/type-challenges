type Length<T extends readonly any[]> = T extends readonly any[] ? T['length'] : never
