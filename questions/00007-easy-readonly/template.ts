// Original Template
// type MyReadonly<T> = any

// My Solution:
type MyReadonly<Type> = {
    +readonly [Property in keyof Type]: Type[Property]
};
